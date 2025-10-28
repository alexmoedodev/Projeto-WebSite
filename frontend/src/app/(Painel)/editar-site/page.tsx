
import LayuotMain from "../components/LayoutMain";
import { HeroDocumentation } from "./components/HeroDocumentation";
import { PromotionDocumentation } from "./components/PromotionDocumentation";
import { WhyChooseDocumentation } from "./components/WhyChooseDocumentation";
import { TopSaleDocumentation } from "./components/TopSaleDocumentation";

export const metadata = {
  title: "Documentação do Site",
  description: "Documentação do site - manual de utilização e edição.",
};

export default function EditWebSite() {
  return (
    <>
      <LayuotMain>
        <HeroDocumentation />
        <WhyChooseDocumentation />
        <PromotionDocumentation />  
        <TopSaleDocumentation />
      </LayuotMain>
    </>
  );
}
