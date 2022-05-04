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
            localStorage.setItem("auth", response.data);
            setLoggedIn(true);
            return true;
          })
          .catch(function (error) {
            console.log(error);
            return false;
          });
    }

    const logout = () =>{
        setLoggedIn(false);
    }
    useEffect(()=>{
        
    }, [loggedIn])
    const authContextValue = {
        login,
        loggedIn,
        logout
    };
    return <AuthContext.Provider value={authContextValue} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export {AuthProvider, useAuth}