"use client";
// import Link from 'next/link'
import React, { useState } from "react";
import Image from "next/image";
import Twitter from "@/assets/twitter.png";
import Linkedin from "@/assets/linkedin.png";
import Instagram from "@/assets/instagram.png";
import Facebook from "@/assets/facebook.png";
import Link from "next/link";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Navmodal({ setModal, modal }) {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="bg-[#2A0079] overflow-y-scroll w-[85%] min-h-screen md:hidden z-40 top-[0] fixed right-0 ">
      <div className="flex justify-between items-center px-8 py-12">
        <svg
          width="94"
          height="24"
          viewBox="0 0 94 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_11114)">
            <path
              d="M13.3546 1.65927L22.1385 10.6947C23.1062 11.6902 23.3888 13.1652 22.86 14.4476L19.8232 21.8014C19.456 22.6887 18.4391 23.1116 17.5518 22.7455C17.3345 22.6556 17.1375 22.5228 16.9727 22.3548L11.703 16.9727L6.18497 22.526C5.50739 23.2079 4.407 23.2111 3.72514 22.5335C3.55816 22.3666 3.42543 22.1685 3.33765 21.9491L0.259124 14.3095C-0.265381 13.0089 0.0439699 11.52 1.0416 10.5341L10.0631 1.62609C10.974 0.725867 12.4426 0.735501 13.3429 1.64643C13.3471 1.65071 13.3514 1.65499 13.3557 1.65927H13.3546Z"
              fill="white"
            />
            <path
              d="M5.50587 10.6618L12.9828 18.2768L12.9442 18.2372C12.272 17.5511 11.1705 17.5403 10.4844 18.2136C10.4769 18.2211 10.4694 18.2286 10.4619 18.2351L10.4212 18.2768L6.18559 22.5306C5.50802 23.2114 4.40655 23.2136 3.72577 22.536C3.55878 22.3701 3.42712 22.1721 3.33934 21.9537L0.227634 14.2285C-0.400703 12.6678 0.314338 10.8888 1.84825 10.1983C3.11884 9.62566 4.33805 9.78087 5.50695 10.6629L5.50587 10.6618Z"
              fill="#BDB6FB"
            />
            <path
              d="M80.0773 5.88428H71.6584V8.54855H77.4655L71.6584 14.4723V17.1376H72.9975H81.273V14.4723H75.5655L81.273 8.54855V5.88428H80.0773Z"
              fill="white"
            />
            <path
              d="M66.782 5.88428V6.72563C66.6172 6.62287 66.447 6.52974 66.2704 6.44411C65.5296 6.08659 64.6979 5.88428 63.8191 5.88428C60.7128 5.88428 58.193 8.40191 58.193 11.5093C58.193 14.6168 60.7128 17.1365 63.8191 17.1365C64.6979 17.1365 65.5296 16.9342 66.2704 16.5756C66.4459 16.49 66.6161 16.3969 66.782 16.2941V17.1365H69.4463V5.88428H66.782ZM63.8191 14.438C62.2028 14.438 60.8915 13.1267 60.8915 11.5104C60.8915 9.89407 62.2028 8.58281 63.8191 8.58281C65.4355 8.58281 66.7478 9.893 66.7478 11.5104C66.7478 13.1278 65.4365 14.438 63.8191 14.438Z"
              fill="white"
            />
            <path
              d="M91.3337 5.88428V6.72563C91.1688 6.62287 90.9986 6.52974 90.822 6.44411C90.0813 6.08659 89.2496 5.88428 88.3708 5.88428C85.2644 5.88428 82.7446 8.40191 82.7446 11.5093C82.7446 14.6168 85.2644 17.1365 88.3708 17.1365C89.2496 17.1365 90.0813 16.9342 90.822 16.5756C90.9976 16.49 91.1678 16.3969 91.3337 16.2941V17.1365H93.998V5.88428H91.3337ZM88.3708 14.438C86.7544 14.438 85.4432 13.1267 85.4432 11.5104C85.4432 9.89407 86.7544 8.58281 88.3708 8.58281C89.9871 8.58281 91.2994 9.893 91.2994 11.5104C91.2994 13.1278 89.9882 14.438 88.3708 14.438Z"
              fill="white"
            />
            <path
              d="M54.6492 5.84326L51.7248 12.466L48.9342 5.84326H45.754L50.1171 15.8121L47.3671 21.4596H50.5773L57.8712 5.84326H54.6492Z"
              fill="white"
            />
            <path
              d="M40.1598 5.74823C38.7779 5.74823 37.4859 6.31449 36.5557 7.2982C36.5257 7.26609 36.4947 7.23505 36.4636 7.20401C35.5249 6.26525 34.2768 5.74823 32.9495 5.74823C32.1659 5.74823 31.4059 5.93128 30.7198 6.27702V5.74823H27.9795V17.5196H30.7198V10.8959C30.7198 9.66704 31.7195 8.6662 32.9495 8.6662C33.5457 8.6662 34.1055 8.89848 34.5262 9.31916C34.9469 9.73983 35.1791 10.2997 35.1791 10.8948V17.5186H37.9301V10.8948C37.9301 9.66597 38.9299 8.66513 40.1598 8.66513C40.756 8.66513 41.3159 8.89741 41.7365 9.31808C42.1572 9.73876 42.3895 10.2986 42.3895 10.8937V17.5175H45.1298V10.715C45.1298 9.38766 44.6127 8.13955 43.674 7.20187C42.7352 6.26311 41.4871 5.74609 40.1598 5.74609V5.74823Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_11114">
              <rect
                width="94"
                height="22.086"
                fill="white"
                transform="translate(0 0.957031)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* <Image src={MobileLogo} alt="mobile logo" /> */}
        <button onClick={() => setModal(!modal)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#F6F5FE"
            />
          </svg>
        </button>
      </div>
      <div className="border pl-4 space-y-12 ">
        <div>
          <button
            className="flex gap-4  pl-0 text-white justify-between items-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h1 className="text-2xl font-semibold">Our Products</h1>
            {open ? (
              <AiOutlineCaretUp className="text-white" />
            ) : (
              <AiOutlineCaretDown className="text-white" />
            )}
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
            <Link href={"#"}>
              <h1 className="text-2xl  font-semibold">About Us</h1>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <h1 className="text-2xl  font-semibold">FAQs</h1>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <h1 className="text-2xl  font-semibold">Our Blog</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-col md:flex-row items-center  justify-center px-4 py-12 gap-5">
        <buttton className="  bg-[#5645F5] md:w-1/4 w-1/2 text-center  border text-white text-xs font-bold px-3 py-3 rounded-md">
          Create an Account
        </buttton>
        <buttton className=" md:w-1/4 w-1/2  font-bold text-xs  px-3 py-3 rounded-md text-center bg-[#E9E7FE] text-[#5645F5] p-4 ">
          Login
        </buttton>
      </div>
      <div className="py-8 px-4 text-[#E9E7FE] ">
        <h1 className="text-2xl  font-semibold mb-3">Contact</h1>
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
        <div className="text-center">
          <p>Designed with ❤️ & Caprisun</p>
        </div>
      </div>
    </div>
  );
}

export default Navmodal;
