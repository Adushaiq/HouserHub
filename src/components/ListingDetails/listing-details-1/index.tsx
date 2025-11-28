import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsOneArea from "./ListingDetailsOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterTwo from "@/layouts/footers/FooterTwo"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <ListingDetailsOneArea />
      <FancyBanner />
      <FooterTwo />
    </>
  )
}

export default ListingDetailsOne
