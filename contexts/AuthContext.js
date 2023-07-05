import {useContext, useEffect, useState} from "react";
import React from "react";
import Cookies from "js-cookie";

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState("loading")

    useEffect(() => {
        const verifyUserLogin = () => {
            fetch("https://backend-bibinabat.iran.liara.run/api/auth/is_authenticated/", {
                method: "GET",
                headers: {
                    "Authorization": Cookies.get("Authorization"),
                    "Content-Type": "Application/json"
                },
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    setIsLoggedIn(data.data.user.is_authenticated)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        verifyUserLogin()
    }, [])

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};