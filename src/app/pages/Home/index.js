import React from 'react'
import FooterCard from "@/app/components/Cards/FooterCard";
import Footer from "@/app/components/Footer/index";
import Hero from "@/app/components/Hero/index";
import Navbar from "@/app/components/Navbar/index";
import GetStarted from "@/app/components/GetStarted/index";
import Products from "@/app/components/Cards/Products/index"
function Homepage() {
  return (
    <div>
       <Navbar/>
      <Hero/>
      <Products/>
      <GetStarted/>
      <FooterCard/>
      <Footer/> 
    </div>
  )
}

export default Homepage