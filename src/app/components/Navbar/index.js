"use client"
import React, { useState } from "react";
import Logo from "@/assets/myAzaLogo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Navmodal from "@/app/components/modals/Navmodal";
function Navbar() {
  const [modal,setModal]=useState(false)
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 w-full z-30 shadow-md bg-white py-4 sm:py-6">
        <div className="">
          <div className="flex md:justify-around justify-between px-7 md:px-0 items-center">
            <div className="flex text-purple-600 items-center gap-4 font-bold text-2xl ">
              <Image src={Logo} alt="logo" className="md:w-32 w-24" />
            </div>
            <div className="text-[#838197] hidden md:block">
              <ul className="flex items-center justify-center text-bold gap-6 text-base py-4 sm:py-0">
                <li>
                  <a href="#"> <p>Our Products</p></a>
                </li>
                <li>
                  <a href="#"> <p>About Us</p></a>
                </li>
                <li>
                  <a href="#"><p>FAQs</p></a>
                </li>
                <li>
                  <a href="#"> <p>Our Blogs</p></a>
                </li>
              </ul>
            </div>
            <div className="hidden space-x-6 md:block">
              <button className="border-white border font-bold text-[#2A0079] px-3 py-1 rounded-md ">
                <p>Login</p>
              </button>
              <button className="bg-[#5645F5] border text-white text-xs font-bold px-3 py-2 rounded-md ">
                <p>Create an Account</p>
              </button>
            </div>
            <div onClick={()=>setModal(!modal)} className="md:hidden">
            <GiHamburgerMenu/>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Navmodal setModal={setModal} modal={modal}/>
      )}
    </div>

  );
}

export default Navbar;
