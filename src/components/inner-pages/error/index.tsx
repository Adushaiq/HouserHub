import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ErrorArea from "./ErrorArea"
import FooterTwo from "@/layouts/footers/FooterTwo"

const Error = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <ErrorArea />
         <FooterTwo />
      </>
   )
}

export default Error
