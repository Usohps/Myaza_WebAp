import Image from "next/image";
import React from "react";
import HeroIcon from "@/assets/illustration1.png";
import HeroIcon2 from "@/assets/illustration2.png";
import Pounds from "@/assets/Pounds.png";
import Pounds1 from "@/assets/Pounds1.png";
import Pounds2 from "@/assets/Pounds2.png";
import Pounds3 from "@/assets/Pounds3.png";
import USDblur from "@/assets/USD.png";
import NGNblur from "@/assets/NGN.png";
function Hero() {
  return (
    <div className=" relative gap-4 items-center">
      <div>
        <div className="flex justify-between min-h-screen ">
          <Image
            src={HeroIcon}
            alt="illustration image1"
            // width={300}
            className="hidden md:block lg:w-[300px] pt-12 md:w-[200px]"
          />
          <div className=" text-center ">
            <div className="max-w-[350px] pt-32 m-auto">
              <h1 className=" hidden md:block text-[#2A0079] md:text-4xl  font-semibold text-2xl ">
                Experience a revolution in payments with Aza
              </h1>
              <h1 className=" md:hidden block text-[#2A0079] md:text-3xl  font-semibold text-2xl ">
                A new era for payment around the world
              </h1>
            </div>
            <p className="text-[#302D53] md:block hidden leading-6">
              Aza is the future of global payment as we make it easy for
              everyone to send and receive money and exchange currencies at
              little to no cost. Our convenient platform simplifies transactions
              and removes the hassle that comes with financial management
            </p>
            <p className="text-[#302D53] max-w-[300px] md:hidden leading-6">
              Welcome to a new era for payment around the world, as Aza has made
              it a mission to provide everyone with free transfer across the
              globe, currencies exchange with no fee, and many more.
            </p>
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
        width={120}
        className="hidden md:block absolute top-12 left-0"
      />
      <Image
        src={Pounds1}
        alt="illustration image2"
        width={100}
        className=" absolute top-48 left-0"
      />
      <Image
        src={Pounds2}
        alt="illustration image2"
        width={100}
        className=" absolute bottom-0 left-0 md:block"
      />
      <Image
        src={Pounds3}
        alt="illustration image2"
        width={120}
        className=" absolute top-12 right-0 md:block"
      />
      <Image
        src={USDblur}
        alt="illustration image2"
        width={100}
        className="hidden absolute top-48  right-0 md:block"
      />
      <Image
        src={NGNblur}
        alt="illustration image2"
        width={100}
        className=" absolute bottom-0 right-0 md:block"
      />
    </div>
  );
}

export default Hero;
