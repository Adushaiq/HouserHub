"use client"
import { useState } from "react"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Overview from "./Overview"
import ListingDetails from "./ListingDetails"
import Link from "next/link"
import SelectAmenities from "./SelectAmenities"
import AddressAndLocation from "../profile/AddressAndLocation"
import { toast } from "react-toastify"

const AddPropertyBody = () => {
   // Form state
   const [formData, setFormData] = useState({
      // Overview fields
      title: '',
      description: '',
      category: '',
      listedIn: '',
      price: '',
      yearlyTaxRate: '',

      // Listing Details
      size: '',
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      garages: 0,
      garageSize: '',
      yearBuilt: '',
      floorsNo: 0,
      propertyDescription: '',

      // Amenities
      amenities: [] as string[],

      // Address & Location
      address: '',
      country: '',
      city: '',
      zipCode: '',
      state: '',
      mapLocation: '',

      // Images
      images: [] as File[],
   });

   // Handle form field changes
   const handleChange = (field: string, value: any) => {
      setFormData(prev => ({
         ...prev,
         [field]: value
      }));
   };

   // Handle amenities change
   const handleAmenitiesChange = (selectedAmenities: string[]) => {
      setFormData(prev => ({
         ...prev,
         amenities: selectedAmenities
      }));
   };

   // Handle file upload
   const handleFileUpload = (files: FileList | null) => {
      if (files) {
         const fileArray = Array.from(files);
         setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...fileArray]
         }));
      }
   };

   // Remove uploaded file
   const handleRemoveFile = (index: number) => {
      setFormData(prev => ({
         ...prev,
         images: prev.images.filter((_, i) => i !== index)
      }));
   };

   // Handle form submission
   const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // Debug: Log raw formData to see what's actually stored
      console.log('FORM DATA:');
      console.log(formData);

   };

   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Add New Property" />
            <h2 className="main-title d-block d-lg-none">Add New Property</h2>

            <Overview
               formData={formData}
               onChange={handleChange}
            />

            <ListingDetails
               formData={formData}
               onChange={handleChange}
            />

            <div className="bg-white card-box border-20 mt-40">
               <h4 className="dash-title-three">Photo & Video Attachment</h4>
               <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">File Attachment*</label>

                  {formData.images.map((file, index) => (
                     <div key={index} className="attached-file d-flex align-items-center justify-content-between mb-15">
                        <span>{file.name}</span>
                        <Link href="#" onClick={(e) => { e.preventDefault(); handleRemoveFile(index); }} className="remove-btn">
                           <i className="bi bi-x"></i>
                        </Link>
                     </div>
                  ))}
               </div>
               <div className="dash-btn-one d-inline-block position-relative me-3">
                  <i className="bi bi-plus"></i>
                  Upload File
                  <input
                     type="file"
                     id="uploadCV"
                     name="uploadCV"
                     multiple
                     accept=".jpg,.jpeg,.png,.mp4"
                     onChange={(e) => handleFileUpload(e.target.files)}
                  />
               </div>
               <small>Upload file .jpg, .png, .mp4</small>
            </div>

            <SelectAmenities
               selectedAmenities={formData.amenities}
               onChange={handleAmenitiesChange}
            />

            <AddressAndLocation
               formData={formData}
               onChange={handleChange}
            />

            <div className="button-group d-inline-flex align-items-center mt-30">
               <Link href="#" onClick={handleSubmit} className="dash-btn-two tran3s me-3">
                  Submit Property
               </Link>
               <Link href="#" className="dash-cancel-btn tran3s">Cancel</Link>
            </div>
         </div>
      </div>
   )
}

export default AddPropertyBody
