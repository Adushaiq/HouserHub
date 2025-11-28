import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import locationImage from "@/assets/images/dashboard/icon/icon_16.svg";

interface AddressAndLocationProps {
   formData: any;
   onChange: (field: string, value: any) => void;
}

const AddressAndLocation = ({ formData, onChange }: AddressAndLocationProps) => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Address & Location</h4>
         <div className="row">
            <div className="col-12">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Address*</label>
                  <input
                     type="text"
                     placeholder="19 Yawkey Way"
                     value={formData.address}
                     onChange={(e) => onChange('address', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Country*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Afghanistan", text: "Afghanistan" },
                        { value: "Albania", text: "Albania" },
                        { value: "Algeria", text: "Algeria" },
                        { value: "Andorra", text: "Andorra" },
                        { value: "Angola", text: "Angola" },
                        { value: "United States", text: "United States" },
                        { value: "United Kingdom", text: "United Kingdom" },
                        { value: "Canada", text: "Canada" },
                        { value: "Australia", text: "Australia" },
                        { value: "India", text: "India" },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('country', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">City*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Boston", text: "Boston" },
                        { value: "New York", text: "New York" },
                        { value: "Los Angeles", text: "Los Angeles" },
                        { value: "Chicago", text: "Chicago" },
                        { value: "Mumbai", text: "Mumbai" },
                        { value: "Delhi", text: "Delhi" },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('city', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Zip Code*</label>
                  <input
                     type="text"
                     placeholder="1708"
                     value={formData.zipCode}
                     onChange={(e) => onChange('zipCode', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">State*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Maine", text: "Maine" },
                        { value: "California", text: "California" },
                        { value: "Texas", text: "Texas" },
                        { value: "Florida", text: "Florida" },
                        { value: "New York", text: "New York" },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('state', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
         </div>
         <div className="col-12">
            <div className="dash-input-wrapper mb-25">
               <label htmlFor="">Map Location*</label>
               <div className="position-relative">
                  <input
                     type="text"
                     placeholder="XC23+6XC, Moiran, N105"
                     value={formData.mapLocation}
                     onChange={(e) => onChange('mapLocation', e.target.value)}
                  />
                  <button className="location-pin tran3s"><Image src={locationImage} alt="" className="lazy-img m-auto" /></button>
               </div>
               <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                     <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddressAndLocation
