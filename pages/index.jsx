import Head from "next/head"
import 'atropos/css'
import 'swiper/css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Banner from "./components/Banner"
import ArtputSection from "./components/ArtputSection"
import NFTSection from "./components/NFTSection"
import OurArtsSection from "./components/OurArtsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return(
    <>
      <Header/>
      <Banner/>
      <ServicesSection/>
      <OurArtsSection/>
      <NFTSection/>
      <ArtputSection/>      
      <ContactSection/>
    </>
  )
}
