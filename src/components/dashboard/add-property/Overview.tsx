import NiceSelect from "@/ui/NiceSelect";

interface OverviewProps {
   formData: any;
   onChange: (field: string, value: any) => void;
}

const Overview = ({ formData, onChange }: OverviewProps) => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Overview</h4>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Property Title*</label>
            <input
               type="text"
               placeholder="Your Property Name"
               value={formData.title}
               onChange={(e) => onChange('title', e.target.value)}
            />
         </div>
         <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Description*</label>
            <textarea
               className="size-lg"
               placeholder="Write about property..."
               value={formData.description}
               onChange={(e) => onChange('description', e.target.value)}
            ></textarea>
         </div>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Category*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Apartments", text: "Apartments" },
                        { value: "Condos", text: "Condos" },
                        { value: "Houses", text: "Houses" },
                        { value: "Industrial", text: "Industrial" },
                        { value: "Villas", text: "Villas" },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('category', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Listed in*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "Buy", text: "Buy" },
                        { value: "Sell", text: "Sell" },
                        { value: "Rent", text: "Rent" },
                     ]}
                     defaultCurrent={0}
                     onChange={(e: any) => onChange('listedIn', e.target.value)}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Price*</label>
                  <input
                     type="text"
                     placeholder="Your Price"
                     value={formData.price}
                     onChange={(e) => onChange('price', e.target.value)}
                  />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Yearly Tax Rate*</label>
                  <input
                     type="text"
                     placeholder="Tax Rate"
                     value={formData.yearlyTaxRate}
                     onChange={(e) => onChange('yearlyTaxRate', e.target.value)}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Overview;
