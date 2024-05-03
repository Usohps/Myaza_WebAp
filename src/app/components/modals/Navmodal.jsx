"use client";
// import Link from 'next/link'
import React, { useState } from "react";
import MobileLogo from "@/assets/Frame437.png";
import Image from "next/image";
import Twitter from "@/assets/twitter.png";
import Linkedin from "@/assets/linkedin.png";
import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Navmodal() {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="bg-[#2A0079] min-w-full min-h-screen md:hidden z-40 top-[0] fixed right-0 ">
      <div className="flex justify-between items-center px-8 py-8">
        <Image src={MobileLogo} alt="mobile logo" />
        <button><MdClose width={18} className="text-white" /></button>
      </div>
      <div>
        <div>
          <button
            className="flex border w-1/3 r p-4 text-white justify-between items-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Account
            {open ? <AiOutlineCaretDown className="text-white"/> : <AiOutlineCaretUp className="text-white"/>}
          </button>
          {open && (
            <div className="text-white space-y-2 text-xl">
              <div className="">
                <Link href={"#"}>
                  <h2>New Account</h2>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <h2>Status</h2>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <ul className=" w-full  md:max-w-[300px] text-white h-[150px]  text-2xl space-y-4">
        <li>
          <Link href={"#"}>About Us</Link>
        </li>
        <li>
          <Link href={"#"}>FAQs</Link>
        </li>
        <li>
          <Link href={"#"}>Our Blog</Link>
        </li>
      </ul>
      <div className="flex sm:flex-col md:flex-row items-center justify-center px-4 gap-5">
        <buttton className="  bg-[#5645F5] md:w-1/4 w-1/2 text-center  border text-white text-xs font-bold px-3 py-3 rounded-md">
          Create an Account
        </buttton>
        <buttton className=" md:w-1/4 w-1/2   font-bold text-xs  px-3 py-3 rounded-md text-center bg-[#E9E7FE] text-[#5645F5] p-4 ">
          Login
        </buttton>
      </div>
      <div className="py-8 px-4 text-[#E9E7FE] ">
        <h1 className="text-2xl  font-bold mb-3">Contact</h1>
        <div className="space-y-3">
          <div className="flex items-center text-xl gap-2">
            <p>Hello@aza.co</p>
          </div>
          <div className="flex items-center gap-4 md:justify-center">
            <div>
              <a href="#">
                <Image src={Twitter} alt="twitter logo" className="w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <Image src={Linkedin} alt="linkedin logo" className="w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <Image src={Instagram} alt="instagram logo" className="w-8" />
              </a>
            </div>
            <div>
              <a href="#">
                <Image src={Facebook} alt="facebook logo" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navmodal;
