import Faq from "@/components/inner-pages/faq";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "FAQ - Houser Hub",
};
const index = () => {
   return (
      <Wrapper>
         <Faq />
      </Wrapper>
   )
}

export default index