import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import FancyBanner from "@/components/common/FancyBanner"
import ListingNineArea from "./ListingNineArea"

const ListingNine = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <ListingNineArea />
         <FancyBanner />
         <FooterTwo />
      </>
   )
}

export default ListingNine;
