import { Header } from "@/app/home/components/layouts/Header";
import { Hero } from "@/app/home/components/layouts/Hero";
import { Promotion } from "@/app/home/components/layouts/Promotion";
import { WhyChoose } from "@/app/home/components/layouts/WhyChoose";
import { TopSale } from "@/app/home/components/layouts/TopSale";
import { HotDealFurniture } from "@/app/home/components/layouts/HotDealFurniture";
import { ReadBlog } from "@/app/home/components/layouts/ReadBlog";
import { Testimonials } from "@/app/home/components/layouts/Testimonials";
import { TrendyCollection } from "@/app/home/components/layouts/TrendyCollection";
import { Banner } from "./components/layouts/Banner";
import { Footer } from "./components/layouts/Footer";

export default function Home() {
  return (
    <>
     <Header /> 
      <Hero />
      <WhyChoose />
      <Promotion />
      <TopSale />
      <HotDealFurniture />
      <Testimonials />
      <TrendyCollection />
      <Banner />
      <ReadBlog /> 
      <Footer />
    </>
  );
}
