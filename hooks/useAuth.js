import {useAuth} from "@/contexts/AuthContext";

const useAuthState = () => {
    const {isLoggedIn, setIsLoggedIn, userData, setUserData, handleUserLogout} = useAuth()
    return {isLoggedIn, setIsLoggedIn, userData, setUserData, handleUserLogout}
}

export default useAuthState