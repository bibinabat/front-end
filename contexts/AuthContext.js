import {useContext, useEffect, useState} from "react";
import React from "react";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {useCart} from "@/contexts/CartContext";

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const router = useRouter()
    const {getCart} = useCart()

    const [isLoggedIn, setIsLoggedIn] = useState("loading")
    const [userData, setUserData] = useState("loading")

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

    useEffect(() => {
        fetch("https://backend-bibinabat.iran.liara.run/api/auth/data", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.user) {
                    setUserData(data.data.user)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [isLoggedIn])

    const handleUserLogout = () => {
        fetch("https://backend-bibinabat.iran.liara.run/api/auth/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.messages.success) {
                    Cookies.remove("Authorization")
                    setIsLoggedIn(false)
                    router.replace('/')
                        .then(getCart())
                    toast.info(data.data.messages.success[0], {
                        icon: false,
                        closeButton: false
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, userData, setUserData, handleUserLogout}}>
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