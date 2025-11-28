# API Services Documentation

## Overview
All frontend API calls are now centralized in `/src/services/api` for easy management and maintenance. You can change API endpoints and configurations in one place.

---

## 📁 Service Structure

```
src/services/
├── api/
│   ├── config.ts           # API configuration & endpoints
│   ├── auth.service.ts     # Authentication API calls
│   ├── property.service.ts # Property CRUD API calls
│   └── index.ts           # Export all services
└── index.ts               # Re-export for imports
```

---

## 🔧 Configuration (`config.ts`)

### Base URL
Change the backend URL in one place:
```typescript
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
```

### All Endpoints
```typescript
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
```

**To change endpoints**: Just update the values in `API_ENDPOINTS`.

---

## 🔐 Authentication Service

### Import
```typescript
import { authService } from '@/services/api';
```

### Login
```typescript
const result = await authService.login({
 email: "user@example.com",
  password: "password123"
});

// Response: { success, message, token, user }
```

### Signup
```typescript
const result = await authService.signup({
  name: "John Doe",
  email: "user@example.com",
  password: "password123",
  termsAccepted: true
});

// Response: { success, message, token, user }
```

---

## 🏠 Property Service

### Import
```typescript
import { propertyService } from '@/services/api';
```

### Create Property
```typescript
const propertyDataconst data = {
  // Overview
  title: "Beautiful Villa",
  description: "Stunning villa...",
  category: "Villas",
  listedIn: "Sell",
  price: 1500000,
  yearlyTaxRate: 2.5,

  // Listing Details
  size: 3500,
  bedrooms: 4,
  bathrooms: 3,
  kitchens: 2,
  garages: 2,
  garageSize: 600,
  yearBuilt: 2020,
  floorsNo: 2,
  propertyDescription: "Luxurious villa...",

  // Amenities
  amenities: ["Swimming Pool", "Garden", "Wifi"],

  // Images/Videos (Files or URLs)
  images: [file1, file2],  // File objects from input
};

const result = await propertyService.createProperty(propertyData);
```

### Get All Properties
```typescript
const properties = await propertyService.getAllProperties();
```

### Get Single Property
```typescript
const property = await propertyService.getPropertyById("property_id_123");
```

### Update Property
```typescript
const updated = await propertyService.updateProperty("property_id_123", {
  price: 1600000,
  title: "Updated Title"
});
```

### Delete Property
```typescript
const result = await propertyService.deleteProperty("property_id_123");
```

---

## ✅ Benefits

1. **Centralized Management** - All API endpoints in `config.ts`
2. **Easy Updates** - Change backend URL once
3. **TypeScript Support** - Full type safety
4. **Reusable** - Import and use anywhere
5. **Error Handling** - Consistent across all services
6. **File Upload Support** - Automatic FormData handling

---

## 🔄 How It Works

### Authentication Flow
```
LoginForm → authService.login() → Backend API → Store Token → Redirect
```

### Property Submission Flow
```
Add Property Form → Collect Data → propertyService.createProperty() → Backend API → Success/Error
```

---

## 🎯 Next Steps for Add Property Form

The property service is ready. To complete property submission:

1. **Make AddPropertyBody stateful** - Add `useState` for all fields
2. **Make child components controlled** - Pass state as props
3. **Add submit handler** - Call `propertyService.createProperty(formData)`
4. **Handle file uploads** - Collect File objects from input
5. **Show success/error** - Toast notifications

---

## 📋 Expected API Payloads

### Login
```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Signup
```json
POST /auth/signup
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "termsAccepted": true
}
```

### Create Property
```json
POST /properties
Headers: Authorization: Bearer {token}
Content-Type: multipart/form-data (if files) OR application/json

{
  "title": "Beautiful Villa",
  "description": "...",
  "category": "Villas",
  "listedIn": "Sell",
  "price": 1500000,
  "yearlyTaxRate": 2.5,
  "size": 3500,
  "bedrooms": 4,
  "bathrooms": 3,
  "kitchens": 2,
  "garages": 2,
  "garageSize": 600,
  "yearBuilt": 2020,
  "floorsNo": 2,
  "propertyDescription": "...",
  "amenities": ["Swimming Pool", "Garden"],
  "images": [File, File],
  "videos": [File]
}
```

---

## ⚙️ Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

This overrides the default in `config.ts`.

---

## 🚀 Usage in Components

```tsx
import { authService, propertyService } from '@/services/api';

// In your component
const handleSubmit = async (data) => {
  try {
    const result = await propertyService.createProperty(data);
    toast.success("Property created!");
  } catch (error) {
    toast.error(error.message);
  }
};
```

---

**All API calls are now organized and maintainable!** ✨
