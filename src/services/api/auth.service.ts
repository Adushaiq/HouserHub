/**
 * Authentication API Service
 * Handles all authentication-related API calls
 */

import { API_ENDPOINTS, buildApiUrl, getDefaultHeaders } from './config';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
    termsAccepted: boolean;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role?: string;
    };
}

/**
 * Login user
 * @param credentials - User email and password
 * @returns Promise with auth response including token and user data
 */
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
        const response = await fetch(buildApiUrl(API_ENDPOINTS.auth.login), {
            method: 'POST',
            headers: getDefaultHeaders(),
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred during login');
    }
};

/**
 * Register new user
 * @param signupData - User registration data
 * @returns Promise with auth response including token and user data
 */
export const signup = async (signupData: SignupData): Promise<AuthResponse> => {
    try {
        const response = await fetch(buildApiUrl(API_ENDPOINTS.auth.signup), {
            method: 'POST',
            headers: getDefaultHeaders(),
            body: JSON.stringify(signupData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Signup failed');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred during signup');
    }
};

// Export as default object for easier imports
const authService = {
    login,
    signup,
};

export default authService;
