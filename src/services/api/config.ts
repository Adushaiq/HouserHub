/**
 * API Configuration
 * Central configuration for all API endpoints and settings
 */

// Base API URL - can be configured via environment variable
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * API Endpoints
 * All backend endpoints defined in one place for easy maintenance
 */
export const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        signup: '/auth/signup',
    },
    properties: {
        create: '/properties',
        update: '/properties/:id',
        delete: '/properties/:id',
        getAll: '/properties',
        getById: '/properties/:id',
    },
};

/**
 * Default headers for API requests
 */
export const getDefaultHeaders = (includeAuth: boolean = false): HeadersInit => {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (includeAuth && typeof window !== 'undefined') {
        const token = localStorage.getItem('houser_hub_auth_token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    }

    return headers;
};

/**
 * Build full API URL
 */
export const buildApiUrl = (endpoint: string): string => {
    return `${API_BASE_URL}${endpoint}`;
};

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: any): never => {
    console.error('API Error:', error);

    if (error.response) {
        // Server responded with error
        throw new Error(error.response.data?.message || 'An error occurred');
    } else if (error.request) {
        // Request made but no response
        throw new Error('No response from server. Please check your connection.');
    } else {
        // Something else happened
        throw new Error(error.message || 'An unexpected error occurred');
    }
};
