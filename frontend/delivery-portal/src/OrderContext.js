import React, {createContext, useEffect,useState} from "react";

const axios = require('axios').default;

const BASE_URL = "http://localhost:5000/api/delivery";



const orderContext = createContext({});

const AuthProvider = props => {
    const [orderId, setOrderId] = useState(false);
    const [user, setUser] = useState({});
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
      });

    useEffect(()=>{
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