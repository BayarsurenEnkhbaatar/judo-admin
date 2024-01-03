import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import { loginUri, logoutUri } from "../utils/url";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("JUDOTOKENA")) || null)

    const login = async(user) => {
        const res = await axios.post(loginUri+`/login`, user)
        if(res.status === 204){
            return toast.error("Ийм админ байхгүй байна")
        }

        if(res.status === 205){
            return toast.error("Нууц үг буруу байна !")
        }

        setCurrentUser(res.data);
        return navigate('/dashboard');
    }

    const logout = async(user) => {
        // await axios.post(logoutUri, user)
        setCurrentUser(null)
    };

    useEffect(()=>{
        localStorage.setItem("JUDOTOKENA", JSON.stringify(currentUser));
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}
