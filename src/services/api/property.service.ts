/**
 * Property API Service
 * Handles all property-related API calls
 */

import { API_ENDPOINTS, buildApiUrl, getDefaultHeaders } from './config';

export interface PropertyFormData {
    // Overview
    title: string;
    description: string;
    category: string;
    listedIn: string;
    price: number;
    yearlyTaxRate: number;

    // Listing Details
    size: number;
    bedrooms: number;
    bathrooms: number;
    kitchens: number;
    garages: number;
    garageSize?: number;
    yearBuilt: number;
    floorsNo: number;
    propertyDescription: string;

    // Amenities
    amenities: string[];

    // Address & Location
    address?: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    location?: {
        lat: number;
        lng: number;
    };

    // Media - will be handled separately for file uploads
    images?: File[] | string[];
    videos?: File[] | string[];
}

export interface PropertyResponse {
    success: boolean;
    message: string;
    property: any;
}

/**
 * Create new property
 * @param propertyData - Complete property data
 * @returns Promise with property creation response
 */
export const createProperty = async (propertyData: PropertyFormData): Promise<PropertyResponse> => {
    try {
        // If we have files, use FormData
        const hasFiles = propertyData.images?.some(img => img instanceof File) ||
            propertyData.videos?.some(vid => vid instanceof File);

        let body: FormData | string;
        let headers: Record<string, string>;

        if (hasFiles) {
            // Create FormData for file uploads
            const formData = new FormData();

            // Add all non-file fields
            Object.entries(propertyData).forEach(([key, value]) => {
                if (key !== 'images' && key !== 'videos') {
                    if (typeof value === 'object' && value !== null) {
                        formData.append(key, JSON.stringify(value));
                    } else {
                        formData.append(key, String(value));
                    }
                }
            });

            // Add image files
            if (propertyData.images) {
                propertyData.images.forEach((image) => {
                    if (image instanceof File) {
                        formData.append('images', image);
                    }
                });
            }

            // Add video files
            if (propertyData.videos) {
                propertyData.videos.forEach((video) => {
                    if (video instanceof File) {
                        formData.append('videos', video);
                    }
                });
            }

            body = formData;
            // Get headers without Content-Type (browser will set it with boundary for FormData)
            const defaultHeaders = getDefaultHeaders(true) as Record<string, string>;
            delete defaultHeaders['Content-Type'];
            headers = defaultHeaders;
        } else {
            // Regular JSON request
            body = JSON.stringify(propertyData);
            headers = getDefaultHeaders(true) as Record<string, string>;
        }

        const response = await fetch(buildApiUrl(API_ENDPOINTS.properties.create), {
            method: 'POST',
            headers,
            body,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create property');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred while creating property');
    }
};

/**
 * Get all properties
 * @returns Promise with list of properties
 */
export const getAllProperties = async (): Promise<any> => {
    try {
        const response = await fetch(buildApiUrl(API_ENDPOINTS.properties.getAll), {
            method: 'GET',
            headers: getDefaultHeaders(true),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch properties');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred while fetching properties');
    }
};

/**
 * Get property by ID
 * @param id - Property ID
 * @returns Promise with property data
 */
export const getPropertyById = async (id: string): Promise<any> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.properties.getById.replace(':id', id));
        const response = await fetch(url, {
            method: 'GET',
            headers: getDefaultHeaders(true),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch property');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred while fetching property');
    }
};

/**
 * Update property
 * @param id - Property ID
 * @param propertyData - Updated property data
 * @returns Promise with update response
 */
export const updateProperty = async (id: string, propertyData: Partial<PropertyFormData>): Promise<PropertyResponse> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.properties.update.replace(':id', id));
        const response = await fetch(url, {
            method: 'PUT',
            headers: getDefaultHeaders(true),
            body: JSON.stringify(propertyData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update property');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred while updating property');
    }
};

/**
 * Delete property
 * @param id - Property ID
 * @returns Promise with delete response
 */
export const deleteProperty = async (id: string): Promise<{ success: boolean; message: string }> => {
    try {
        const url = buildApiUrl(API_ENDPOINTS.properties.delete.replace(':id', id));
        const response = await fetch(url, {
            method: 'DELETE',
            headers: getDefaultHeaders(true),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to delete property');
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || 'An error occurred while deleting property');
    }
};

// Export as default object for easier imports
const propertyService = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
};

export default propertyService;
