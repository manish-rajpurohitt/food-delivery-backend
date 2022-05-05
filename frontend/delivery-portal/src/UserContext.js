import React, {createContext, useEffect,useState} from "react";

const axios = require('axios').default;

const BASE_URL = "http://localhost:5000/api/delivery";



const AuthContext = createContext({});

const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);
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

    const forgotPassword = (email) =>{
      instance.post('/auth/forgotPasswordRider', {
        email: email
      })
      .then(function (response) {
        console.log(response.data)
        return true;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
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
        forgotPassword
    };
    return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth}