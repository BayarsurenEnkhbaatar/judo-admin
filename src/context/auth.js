import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { loginUri, logoutUri } from "../utils/url";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("AGHGSFYFSHS")) || null)

    const login = async(user)=>{
        const res = await axios.post(loginUri, user)
        setCurrentUser(res.data)
    }

    const logout = async(user) => {
        await axios.post(logoutUri, user)
        setCurrentUser(null)
    };

    useEffect(()=>{
        localStorage.setItem("AGHGSFYFSHS", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
