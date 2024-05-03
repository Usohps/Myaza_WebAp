import Image from "next/image";
import React from "react";
import HeroIcon from "@/assets/illustration1.png";
import HeroIcon2 from "@/assets/illustration2.png";
function Hero() {
  return (
    <div className="border flex flex-col justify-center gap-4 items-center border-black min-h-screen">
      <div className="flex justify-between items-center">
        <Image
          src={HeroIcon}
          alt="illustration image"
          width={300}
          className="hidden md:block"
        />
        <div className="container m-auto text-center ">
          <div className="">
            <h1 className=" hidden md:block text-[#2A0079] md:text-3xl  font-semibold text-2xl ">
              Experience a revolution in payments with Aza
            </h1>
            <h1 className=" md:hidden block text-[#2A0079] md:text-3xl  font-semibold text-2xl ">
              A new era for payment around the world
            </h1>
          </div>
          <p className="text-[#302D53] md:block hidden leading-8">
            Aza is the future of global payment as we make it easy for everyone
            to send and receive money and exchange currencies at little to no
            cost. Our convenient platform simplifies transactions and removes
            the hassle that comes with financial management
          </p>
          <p className="text-[#302D53] md:hidden leading-8">
            Welcome to a new era for payment around the world, as Aza has made
            it a mission to provide everyone with free transfer across the
            globe, currencies exchange with no fee, and many more.
          </p>
        </div>
        <Image
          src={HeroIcon2}
          alt="illustration image"
          width={300}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}

export default Hero;
