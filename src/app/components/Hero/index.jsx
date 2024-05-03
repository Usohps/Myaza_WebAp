import Image from "next/image";
import React from "react";
import HeroIcon from "@/assets/illustration1.png";
import HeroIcon2 from "@/assets/illustration2.png";
import Pounds from "@/assets/Pounds.png";
import Appleimg from "@/assets/AppStore.png";
import Playstore from "@/assets/PlayStore.png";
import Pounds1 from "@/assets/Pounds1.png";
import Pounds2 from "@/assets/Pounds2.png";
import Pounds3 from "@/assets/Pounds3.png";
import Vector from "@/assets/Vector.png";
import USDblur from "@/assets/USD.png";
import NGNblur from "@/assets/NGN.png";
import Link from "next/link";
function Hero() {
  return (
    <div className=" relative gap-4 items-center">
      <div className="md:p-0 py-10">
        <div className="flex justify-between w-full md:flex-row flex-col md:min-h-screen p-12 md:p-0 ">
          <Image
            src={HeroIcon}
            alt="illustration image1"
            // width={300}
            className="hidden md:block lg:w-[300px] pt-12 md:w-[200px]"
          />
          <div className=" text-center space-y-6 border border-red-800">
            <div className="max-w-[350px] md:pt-32 pt-20 m-auto">
              <h1 className=" hidden md:block text-[#2A0079] md:text-4xl  font-semibold text-2xl ">
                Experience a revolution in payments with Aza
              </h1>
              <h1 className=" md:hidden block text-[#2A0079] md:text-4xl  font-semibold text-2xl ">
                A new era for payment around the world
              </h1>
            </div>
            <p className="text-[#302D53] md:block hidden leading-6">
              Aza is the future of global payment as we make it easy for
              everyone to send and receive money and exchange currencies at
              little to no cost. Our convenient platform simplifies transactions
              and removes the hassle that comes with financial management
            </p>
            <p className="text-[#302D53] min-w-[300px] md:hidden leading-6">
              Welcome to a new era for payment around the world, as Aza has made
              it a mission to provide everyone with free transfer across the
              globe, currencies exchange with no fee, and many more.
            </p>
            <div>
              <buttton className="  bg-[#5645F5] md:w-1/4 w-1/2 text-center  border text-white text-xs font-bold px-3 py-3 rounded-md">
                Create an Account
              </buttton>
            </div>
            <div>
              <p>Available on</p>
              <div className="border border-red-400 flex flex-col justify-center items-center text-center">
                <Image src={Vector} alt="vector icon" />
              </div>
            </div>
            <div className="flex justify-center gap-5 items-center">
              <Link href={"#"}>
                <Image src={Appleimg} alt="app store link" />
              </Link>
              <Link href={"#"}>
                <Image src={Playstore} alt="playstore link" />
              </Link>
            </div>
          </div>
          <Image
            src={HeroIcon2}
            alt="illustration image2"
            className="hidden lg:w-[300px] md:w-[200px] pt-12 md:block"
          />
        </div>
      </div>
      <Image
        src={Pounds}
        alt="illustration image2"
        className=" md:w-[120px] w-[60px] md:block absolute top-12  left-0"
      />
      <Image
        src={Pounds1}
        alt="illustration image2"
        // width={100}
        className=" md:w-[100px] w-[60px] absolute top-48 left-0"
      />
      <Image
        src={Pounds2}
        alt="illustration image2"
        className=" md:w-[100px] w-[60px] absolute bottom-0 left-0 md:block"
      />
      <Image
        src={Pounds3}
        alt="illustration image2"
        className=" md:w-[120px] w-[60px] absolute top-12 right-0 md:block"
      />
      <Image
        src={USDblur}
        alt="illustration image2"
        className="hidden md:w-[100px] w-[60px] absolute top-48  right-0 md:block"
      />
      <Image
        src={NGNblur}
        alt="illustration image2"
        className=" md:w-[100px] w-[60px] absolute bottom-0 right-0 md:block"
      />
    </div>
  );
}

export default Hero;
