# Authentication API Documentation for Backend Developer

## Overview
This document outlines the expected API endpoints and payload structures for the Houser Hub dashboard authentication system.

## Base URL
```
http://localhost:5000/api/auth
```

---

## 1. Login Endpoint

### **POST** `/login`

Authenticates a user and returns a JWT token.

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "email": "admin@houserhub.com",
  "password": "securePassword123"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | ✅ Yes | User's email address |
| password | string | ✅ Yes | User's password |

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE4Zjc5YjJlMzQ1NjEyMzQ1Njc4OTAiLCJlbWFpbCI6ImFkbWluQGhvdXNlcmh1Yi5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDU1NjIwMDAsImV4cCI6MTcwNTY0ODQwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "id": "65a8f79b2e34561234567890",
    "name": "John Doe",
    "email": "admin@houserhub.com",
    "role": "admin"
  }
}
```

#### Error Response (401 Unauthorized)
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Email and password are required"
}
```

---

## 2. Signup Endpoint

### **POST** `/signup`

Registers a new user and returns a JWT token.

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@houserhub.com",
  "password": "securePassword123",
  "termsAccepted": true
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | ✅ Yes | User's full name |
| email | string | ✅ Yes | User's email address |
| password | string | ✅ Yes | User's password (min 8 characters recommended) |
| termsAccepted | boolean | ✅ Yes | Must be `true` to proceed |

#### Success Response (201 Created)
```json
{
  "success": true,
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE4Zjc5YjJlMzQ1NjEyMzQ1Njc4OTAiLCJlbWFpbCI6ImpvaG4uZG9lQGhvdXNlcmh1Yi5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDU1NjIwMDAsImV4cCI6MTcwNTY0ODQwMH0.dGVzdC10b2tlbi1zaWduYXR1cmU",
  "user": {
    "id": "65a8f79b2e34561234567890",
    "name": "John Doe",
    "email": "john.doe@houserhub.com",
    "role": "admin"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

```json
{
  "success": false,
  "message": "Terms must be accepted to register"
}
```

#### Error Response (422 Unprocessable Entity)
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

---

## JWT Token Specification

### Token Structure
The JWT should be signed using **HS256** algorithm and contain the following payload:

```json
{
  "userId": "65a8f79b2e34561234567890",
  "email": "admin@houserhub.com",
  "role": "admin",
  "iat": 1705562000,
  "exp": 1705648400
}
```

| Field | Type | Description |
|-------|------|-------------|
| userId | string | Unique user identifier |
| email | string | User's email address |
| role | string | User role (`admin`, `user`, etc.) |
| iat | number | Issued at timestamp (Unix) |
| exp | number | Expiration timestamp (Unix) |

### Token Expiration
- **Recommended**: 24 hours (86400 seconds)
- **Minimum**: 1 hour (3600 seconds)
- **Maximum**: 7 days (604800 seconds)

### Token Format
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Security Requirements

### Password Security
- Passwords must be hashed using **bcrypt** or **argon2**
- Minimum password length: **8 characters**
- Recommended: enforce password complexity (uppercase, lowercase, numbers, special characters)

### Rate Limiting
Please implement rate limiting on auth endpoints:
- Login: 5 attempts per 15 minutes per IP
- Signup: 3 attempts per hour per IP

### CORS Configuration
Allow requests from:
- `http://localhost:3000` (development)
- Production domain (to be provided)

---

## Error Handling Standard

All error responses should follow this format:

```json
{
  "success": false,
  "message": "Human-readable error message",
  "error": "ERROR_CODE" // Optional: for client-side error handling
}
```

### Common Error Codes
- `INVALID_CREDENTIALS` - Wrong email/password
- `USER_EXISTS` - Email already registered
- `VALIDATION_ERROR` - Invalid input data
- `SERVER_ERROR` - Internal server error

---

## Frontend Implementation

### Token Storage
Tokens are stored in `localStorage` with key: `houser_hub_auth_token`

### Token Usage
The frontend will send the token in future API requests as:
```
Authorization: Bearer {token}
```

### Auto-Logout
Frontend automatically removes invalid/expired tokens and shows login modal.

---

## Testing Credentials

For testing purposes, please create the following admin account:

```
Email: admin@houserhub.com
Password: Admin@123
Role: admin
```

---

## Questions or Clarifications?

Contact: [Your contact information]

Last Updated: 2025-11-25
