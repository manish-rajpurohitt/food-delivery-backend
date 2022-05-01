import React, {createContext, useEffect,useState} from "react";

const sleep = mill => {
    return new Promise(resolve => setTimeout(resolve, mill));
};

const AuthContext = createContext({});

const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => {
        sleep(2000).then(()=> setLoggedIn(true))
    }

    const logout = () =>{
        sleep(2000).then(()=> setLoggedIn(false))
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