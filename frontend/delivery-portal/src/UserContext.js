import React, {createContext, useEffect,useState} from "react";

const axios = require('axios').default;

const BASE_URL = "http://localhost:5000/api/delivery";



const AuthContext = createContext({});

const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      });
    const login = (user) => {
        instance.post('/auth/loginRider', {
            email: user.email,
            password: user.password
          })
          .then(function (response) {
            localStorage.setItem("auth", response.data.token);
            setLoggedIn(true);
            return true;
          })
          .catch(function (error) {
            console.log(error);
            return false;
          });
    }

    const logout = () =>{
      localStorage.removeItem('auth')
        setLoggedIn(false);
    }

    const forgotPassword = async (email) =>{
      let res = await instance.post('/auth/forgotPasswordRider', {
        email: email
      })
      .then(function (response) {
        if(response.data.data === "User not registered")
          return false;
        if(response.data.data === "Email sent")
          return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
      return res;
    }

    const resetPassword = async (pass, token)=> {
        let res = await instance.put('/auth/resetPasswordRider/'+token, {
                    password: pass
                  })
                  .then(function (response) {
                    if(response.data.data === "Invalid reset token"){
                      return false;
                    }
                    if(response.data.data === "Password reset success")
                    return true;
                  })
                  .catch(function (error) {
                    console.log(error);
                    return false;
                  });
      return res;
    }



    useEffect(()=>{
      console.log(localStorage.getItem('auth'))
        if(localStorage.getItem('auth') !== null){
          setLoggedIn(true);
        }
    }, [])
    const authContextValue = {
        login,
        loggedIn,
        logout,
        forgotPassword,
        resetPassword
    };
    return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth}