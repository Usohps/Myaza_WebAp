import Image from "next/image";
import React from "react";
import IphoneImage from "@/assets/iPhone13Pro.png";
import Vector from "@/assets/Vector.png"
import Applestore from "@/assets/App Store.png"
import PlayStore from "@/assets/Play Store.png"
import WebLogo from "@/assets/web.png"
function FooterCard() {
  return (
    <div className="p-8">
      <div className="bg-[url('../assets/footerbg.png')] flex md:flex-row flex-col justify-between  min-h-64 m-auto px-6 rounded-3xl h-auto bg-black">
      <div className="text-center space-y-4 pt-12">
        <h1 className="text-3xl min-[300px]: md:text-4xl text-white font-bold px-4">
          Ready to join the <br/>Geng? Sign up today!
        </h1>
        <Image src={Vector} alt="arrow vector" className="m-auto"/>
        <p className="text-white">Available on</p>
        <div className="flex items-center flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0">
           <Image src={Applestore} alt="apple logo"/>
          <Image src={PlayStore} alt="playstore logo"/>
          <Image src={WebLogo} alt="website logo"/>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image src={IphoneImage} alt="iphone13 photo" />
      </div>
    </div>
    </div>
  );
}

export default FooterCard;
