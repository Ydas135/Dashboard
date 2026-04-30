import { LoginServices } from "../services/AuthService";
import { useAuthStore } from "../store/AuthStore"

export const useAuth = () => {
    const { token, setToken, logout} = useAuthStore();

    const login = async ({ username, password}) => {
        const token = await LoginServices({ username, password})
        setToken(token);
    }

    return {
        token, 
        login,
        logout,
        isAuthenticated: !!token,
    }
}