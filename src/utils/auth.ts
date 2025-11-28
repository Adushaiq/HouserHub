/**
 * Authentication utility functions for JWT token management
 */

const AUTH_TOKEN_KEY = 'houser_hub_auth_token';
const AUTH_USER_KEY = 'houser_hub_user';

/**
 * Store JWT token in localStorage
 */
export const setAuthToken = (token: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
    }
};

/**
 * Retrieve JWT token from localStorage
 */
export const getAuthToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(AUTH_TOKEN_KEY);
    }
    return null;
};

/**
 * Remove JWT token from localStorage (logout)
 */
export const removeAuthToken = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(AUTH_USER_KEY);
    }
};

/**
 * Store user data in localStorage
 */
export const setUserData = (user: any): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }
};

/**
 * Retrieve user data from localStorage
 */
export const getUserData = (): any | null => {
    if (typeof window !== 'undefined') {
        const userData = localStorage.getItem(AUTH_USER_KEY);
        return userData ? JSON.parse(userData) : null;
    }
    return null;
};

/**
 * Check if user is authenticated (has valid token)
 */
export const isAuthenticated = (): boolean => {
    const token = getAuthToken();
    if (!token) return false;

    // Check if token is expired
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000; // Convert to milliseconds
        return Date.now() < exp;
    } catch (error) {
        // Invalid token format
        return false;
    }
};

/**
 * Decode JWT token and get payload
 */
export const decodeToken = (token: string): any | null => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

/**
 * Get token expiration time
 */
export const getTokenExpiry = (token: string): number | null => {
    try {
        const payload = decodeToken(token);
        return payload?.exp ? payload.exp * 1000 : null;
    } catch (error) {
        return null;
    }
};
