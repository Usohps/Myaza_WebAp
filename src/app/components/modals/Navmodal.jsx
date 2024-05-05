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
function Navmodal({setModal,modal}) {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="bg-[#2A0079] overflow-y-hidden overflow-scroll w-[85%] min-h-screen md:hidden z-40 top-[0] fixed right-0 ">
      <div className="flex justify-between items-center px-8 py-12">
        <Image src={MobileLogo} alt="mobile logo" />
        <button onClick={()=>setModal(!modal)}><MdClose width={18} className="text-white" /></button>
      </div>
      <div className="border pl-4 space-y-12 ">
        <div>
          <button
            className="flex border gap-4 p-4 pl-0 text-white justify-between items-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h1 className="text-3xl font-semibold">Our Products</h1>
            {open ?<AiOutlineCaretUp className="text-white"/>:<AiOutlineCaretDown className="text-white"/>}
          </button>
          {open && (
            <div className="text-white space-y-4 text-2xl">
              <div className="">
                <Link href={"#"}>
                  <p className="">Virtual Cards</p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <p>Transfer Funds</p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <p>Swap Currency</p>
                </Link>
              </div>
              <div className="">
                <Link href={"#"}>
                  <p>Multiple Wallets</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      <ul className=" w-full  md:max-w-[300px] text-white   text-2xl space-y-12">
        <li>
          <Link href={"#"}><h1 className="text-3xl  font-semibold">About Us</h1></Link>
        </li>
        <li>
          <Link href={"#"}><h1 className="text-3xl  font-semibold">FAQs</h1></Link>
        </li>
        <li>
          <Link href={"#"}><h1 className="text-3xl  font-semibold">Our Blog</h1></Link>
        </li>
      </ul>
      </div>
      <div className="flex sm:flex-col md:flex-row items-center  justify-center px-4 py-12 gap-5">
        <buttton className="  bg-[#5645F5] md:w-1/4 w-1/2 text-center  border text-white text-xs font-bold px-3 py-3 rounded-md">
          Create an Account
        </buttton>
        <buttton className=" md:w-1/4 w-1/2   font-bold text-xs  px-3 py-3 rounded-md text-center bg-[#E9E7FE] text-[#5645F5] p-4 ">
          Login
        </buttton>
      </div>
      <div className="py-8 px-4 text-[#E9E7FE] ">
        <h1 className="text-3xl  font-semibold mb-3">Contact</h1>
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
          <div className="text-center">
                <p>Designed with ❤️ & Caprisun</p>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Navmodal;
