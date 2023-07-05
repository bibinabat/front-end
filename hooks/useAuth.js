import {useAuth} from "@/contexts/AuthContext";

const useAuthState = () => {
    const {isLoggedIn, setIsLoggedIn} = useAuth()
    return {isLoggedIn, setIsLoggedIn}
}

export default useAuthState