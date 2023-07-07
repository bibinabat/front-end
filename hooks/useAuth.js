import {useAuth} from "@/contexts/AuthContext";

const useAuthState = () => {
    const {isLoggedIn, setIsLoggedIn, userData, setUserData} = useAuth()
    return {isLoggedIn, setIsLoggedIn, userData, setUserData}
}

export default useAuthState