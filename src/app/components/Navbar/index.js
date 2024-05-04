"use client"
import React from "react";
import Logo from "@/assets/myAzaLogo.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Navmodal from "@/app/components/modals/Navmodal";
function Navbar() {
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 w-full z-30 shadow-md bg-white py-4 sm:py-4">
        <div className="">
          <div className="flex md:justify-around justify-between px-7 md:px-0 items-center">
            <div className="flex text-purple-600 items-center gap-4 font-bold text-2xl ">
              <Image src={Logo} alt="logo" className="md:w-32 w-24" />
            </div>
            <div className="text-[#838197] hidden md:block">
              <ul className="flex items-center justify-center text-bold gap-6 text-base py-4 sm:py-0">
                <li>
                  <a href="#">Our Products</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Our Blogs</a>
                </li>
              </ul>
            </div>
            <div className="hidden space-x-6 md:block">
              <button className="border-white border font-bold text-[#2A0079] px-3 py-1 rounded-md ">
                Login
              </button>
              <button className="bg-[#5645F5] border text-white text-xs font-bold px-3 py-2 rounded-md ">
                Create an Account
              </button>
            </div>
            <div className="md:hidden">
              <RxHamburgerMenu width={200} />
            </div>
          </div>
        </div>
      </div>
      {/* <Navmodal/> */}
    </div>

  );
}

export default Navbar;
