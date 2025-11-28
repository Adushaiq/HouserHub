"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAuthToken, getUserData, setAuthToken, setUserData, removeAuthToken, isAuthenticated } from '@/utils/auth';

interface User {
    id: string;
    name: string;
    email: string;
    role?: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    login: (token: string, user: User) => void;
    logout: () => void;
    checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Check authentication on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        setLoading(true);
        const authenticated = isAuthenticated();
        const userData = getUserData();

        setIsAuth(authenticated);
        setUser(authenticated ? userData : null);
        setLoading(false);
    };

    const login = (token: string, userData: User) => {
        setAuthToken(token);
        setUserData(userData);
        setIsAuth(true);
        setUser(userData);
    };

    const logout = () => {
        removeAuthToken();
        setIsAuth(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: isAuth,
                user,
                loading,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
