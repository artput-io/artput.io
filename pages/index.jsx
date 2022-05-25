import Head from "next/head"
import 'atropos/css'
import Header from "../components/Header"
import Banner from "../components/Banner"
import NFTSection from "../components/NFTSection"

export default function Home() {
  return(
    <>
      <Header/>
      <Banner/>
      <NFTSection/>
    </>
  )
}
