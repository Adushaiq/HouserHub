import NumberNiceSelect from "@/ui/NumberNiceSelect";

interface ListingDetailsProps {
   formData: any;
   onChange: (field: string, value: any) => void;
}

const ListingDetails = ({ formData, onChange }: ListingDetailsProps) => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Listing Details</h4>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Size in ft*</label>
                  <input
                     type="text"
                     placeholder="Ex: 3,210 sqft"
                     value={formData.size}
                     onChange={(e) => onChange('size', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bedrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 0, text: 0 },
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('bedrooms', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bathrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 0, text: 0 },
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('bathrooms', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Kitchens*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 0, text: 0 },
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('kitchens', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Garages</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                        { value: 4, text: 4 },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('garages', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Garage Size</label>
                  <input
                     type="text"
                     placeholder="Ex: 1,230 sqft"
                     value={formData.garageSize}
                     onChange={(e) => onChange('garageSize', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Year Built*</label>
                  <input
                     type="text"
                     placeholder="Type Year"
                     value={formData.yearBuilt}
                     onChange={(e) => onChange('yearBuilt', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Floors No*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 0, text: 0 },
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('floorsNo', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-12">
               <div className="dash-input-wrapper">
                  <label htmlFor="">Description*</label>
                  <textarea
                     className="size-lg"
                     placeholder="Write about property..."
                     value={formData.propertyDescription}
                     onChange={(e) => onChange('propertyDescription', e.target.value)}
                  ></textarea>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingDetails;
