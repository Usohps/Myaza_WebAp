import React from 'react'
import FooterCard from "@/app/components/Cards/FooterCard";
import Footer from "@/app/components/Footer/index";
import Hero from "@/app/components/Hero/index";
import Navbar from "@/app/components/Navbar/index";
import GetStarted from "@/app/components/GetStarted/index";
import Products from "@/app/components/Cards/Products/index"
import Accordion from '@/app/components/Accordion';
function Homepage() {
  const items = [
    {
      title: 'Section 1',
      content: `You can signup under 5 mins. Yes, we are very sure. Install our app on the Google Play Store or Apple Store or even Web. You will have an instant free wallet in your local currency and can fund very very easily.`,
    },
    {
      title: 'Section 2',
      content: 'Content for section 2...',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3...',
    },
  ];
  return (
    <div className='space-y-6'>
       <Navbar/>
      <Hero/>
      <Products/>
      <GetStarted/>
      <Accordion items={items}/>
      <FooterCard/>
      <Footer/> 
    </div>
  )
}

export default Homepage