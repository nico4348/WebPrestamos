import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface User {
    id: string;
    email: string;
    name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        try {
            // TODO: Implement actual login logic
            const mockUser = {
                id: "1",
                email,
                name: "Admin User",
            };
            setUser(mockUser);
            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
