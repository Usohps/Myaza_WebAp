"use client";
import React, { useState } from "react";
import Navmodal from "@/app/components/modals/Navmodal";
function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 md:h-[88px] h-[100px] w-full z-30 shadow-md bg-white md:py-4 py-9">
        <div className="">
          <div className="flex md:justify-around justify-between px-7 md:px-0 items-center">
              {/* Logo SVG*/}
              
              <svg
                width="94"
                height="23"
                viewBox="0 0 94 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_139_847)">
                  <path
                    d="M13.3546 0.702242L22.1385 9.73766C23.1062 10.7331 23.3888 12.2082 22.86 13.4906L19.8232 20.8443C19.456 21.7317 18.4391 22.1545 17.5518 21.7884C17.3345 21.6985 17.1375 21.5658 16.9727 21.3977L11.703 16.0157L6.18497 21.569C5.50739 22.2509 4.407 22.2541 3.72514 21.5765C3.55816 21.4095 3.42543 21.2115 3.33765 20.9921L0.259124 13.3525C-0.265381 12.0519 0.0439699 10.563 1.0416 9.5771L10.0631 0.669059C10.974 -0.231164 12.4426 -0.22153 13.3429 0.689397C13.3471 0.693679 13.3514 0.69796 13.3557 0.702242H13.3546Z"
                    fill="#5645F5"
                  />
                  <path
                    d="M5.50587 9.7048L12.9828 17.3198L12.9442 17.2802C12.272 16.594 11.1705 16.5833 10.4844 17.2566C10.4769 17.2641 10.4694 17.2716 10.4619 17.278L10.4212 17.3198L6.18559 21.5736C5.50802 22.2544 4.40655 22.2565 3.72577 21.579C3.55878 21.413 3.42712 21.215 3.33934 20.9967L0.227634 13.2714C-0.400703 11.7108 0.314338 9.93173 1.84825 9.24131C3.11884 8.66863 4.33805 8.82384 5.50695 9.70587L5.50587 9.7048Z"
                    fill="#19156F"
                  />
                  <path
                    d="M80.0773 4.92725H71.6584V7.59152H77.4654L71.6584 13.5152V16.1806H72.9975H81.2729V13.5152H75.5655L81.2729 7.59152V4.92725H80.0773Z"
                    fill="#100671"
                  />
                  <path
                    d="M66.782 4.92725V5.7686C66.6172 5.66584 66.447 5.57271 66.2703 5.48708C65.5296 5.12956 64.6979 4.92725 63.8191 4.92725C60.7127 4.92725 58.193 7.44487 58.193 10.5523C58.193 13.6597 60.7127 16.1795 63.8191 16.1795C64.6979 16.1795 65.5296 15.9772 66.2703 15.6186C66.4459 15.533 66.6161 15.4398 66.782 15.3371V16.1795H69.4463V4.92725H66.782ZM63.8191 13.481C62.2028 13.481 60.8915 12.1697 60.8915 10.5534C60.8915 8.93704 62.2028 7.62578 63.8191 7.62578C65.4354 7.62578 66.7478 8.93597 66.7478 10.5534C66.7478 12.1708 65.4365 13.481 63.8191 13.481Z"
                    fill="#100671"
                  />
                  <path
                    d="M91.3336 4.92725V5.7686C91.1687 5.66584 90.9985 5.57271 90.8219 5.48708C90.0812 5.12956 89.2495 4.92725 88.3707 4.92725C85.2643 4.92725 82.7445 7.44487 82.7445 10.5523C82.7445 13.6597 85.2643 16.1795 88.3707 16.1795C89.2495 16.1795 90.0812 15.9772 90.8219 15.6186C90.9975 15.533 91.1677 15.4398 91.3336 15.3371V16.1795H93.9979V4.92725H91.3336ZM88.3707 13.481C86.7543 13.481 85.4431 12.1697 85.4431 10.5534C85.4431 8.93704 86.7543 7.62578 88.3707 7.62578C89.987 7.62578 91.2993 8.93597 91.2993 10.5534C91.2993 12.1708 89.9881 13.481 88.3707 13.481Z"
                    fill="#100671"
                  />
                  <path
                    d="M54.6492 4.88623L51.7249 11.5089L48.9343 4.88623H45.7541L50.1171 14.8551L47.3672 20.5026H50.5774L57.8712 4.88623H54.6492Z"
                    fill="#100671"
                  />
                  <path
                    d="M40.1598 4.7912C38.7779 4.7912 37.4859 5.35746 36.5557 6.34117C36.5257 6.30906 36.4947 6.27802 36.4636 6.24697C35.5249 5.30822 34.2768 4.7912 32.9495 4.7912C32.1659 4.7912 31.4059 4.97425 30.7198 5.31999V4.7912H27.9795V16.5626H30.7198V9.93885C30.7198 8.71001 31.7195 7.70917 32.9495 7.70917C33.5457 7.70917 34.1055 7.94145 34.5262 8.36212C34.9469 8.7828 35.1791 9.34263 35.1791 9.93778V16.5615H37.9301V9.93778C37.9301 8.70894 38.9299 7.7081 40.1598 7.7081C40.756 7.7081 41.3159 7.94038 41.7365 8.36105C42.1572 8.78173 42.3895 9.34156 42.3895 9.93671V16.5605H45.1298V9.75795C45.1298 8.43063 44.6127 7.18252 43.674 6.24483C42.7352 5.30608 41.4871 4.78906 40.1598 4.78906V4.7912Z"
                    fill="#100671"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_139_847">
                    <rect width="94" height="22.086" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            <div className="text-[#838197] hidden md:block">
              <ul className="flex items-center justify-center text-bold gap-6 text-base py-4 sm:py-0">
                <li>
                  <a href="#">
                    {" "}
                    <p>Our Products</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <p>About Us</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>FAQs</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <p>Our Blogs</p>
                  </a>
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
            <div onClick={() => setModal(!modal)} className="md:hidden">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33337 24H26.6667M5.33337 8H26.6667H5.33337ZM5.33337 16H26.6667H5.33337Z" stroke="#5645F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </div>
        </div>
      </div>
      {modal && <Navmodal setModal={setModal} modal={modal} />}
    </div>
  );
}

export default Navbar;
