import React from "react";
import Image1 from "@/assets/topopgraphyimg.png";
import Image2 from "@/assets/Frame331.png";
import Mockup1 from "@/assets/Mockup1.png";
import Mockup2 from "@/assets/Mockup2.png";
import Cards from "@/assets/MyazaCards.png";
import Mockup3 from "@/assets/Mockup3.png";
import WalletIcon from "@/assets/wallet.png";
import LoveIcon from "@/assets/loveEmoji.png";
import Exchange from "@/assets/ExchangeIcon.png";
import Image from "next/image";
function index() {
  return (
    <div className="md:max-w-[1130px] m-auto">
      <section className="container m-auto px-6 space-y-4">
        <div className="container m-auto text-center ">
          <p className=" text-sm from-[#9666FF] to-[#5645F5]">Our products</p>
          <div className=" md:w-1/3 w-1/2 m-auto">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl ">
              A new era for payment around the world
            </h1>
          </div>
          <p className="text-[#302D53] leading-8">
            We revolutionise how people transact and manage their money by
            offering stand-out features, and we aim to make financial
            transactions around the world accessible, secure, and convenient for
            all.
          </p>
        </div>
        {/* First Big card */}
        <div className=" bg-[url('../assets/Topographic.png')] bg-[#CAC5FC] flex items-center md:flex-row flex-col justify-between md:m-auto container  rounded-xl  border p-6">
          <div className="md:w-1/2">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
              Multiple Currency= Multiple Wallets!
            </h1>
            <p className="text-[#302D53] leading-8">
              Experience the convenience and flexibility of managing multiple
              currencies with Aza. Our app allows you to hold multiple wallets
              and easily switch between them, making it easy to transact in
              various currencies.
            </p>
          </div>
          <div className="">
            <Image src={Image1} alt="sample image" />
          </div>
        </div>
        {/* cards inbetween the cards big on desktop */}
        <div className="flex gap-4 items-center justify-center md:flex-row flex-col space-y-6">
          <div className="bg-[url('../assets/grainTexture.png')] bg-[#95DBC4] flex items-center flex-col justify-between container md:m-auto  rounded-xl ">
            <div className="space-y-3 p-4">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
                Want to receive money from loved ones?
              </h1>
              <p className="text-[#302D53] leading-8">
                Distance is no barrier with Aza. Easily receive and send money
                to friends and family, no matter where you are. Our secure
                platform helps you manage your finances and keep track of all
                your payments to stay connected.
              </p>
            </div>
            <div className=" relative">
              <Image src={Mockup1} alt="sample image" width={200} />
              <Image src={LoveIcon} width={80} className="absolute right-0  top-0"  alt="icon for love"/>
            </div>
          </div>
          <div className=" bg-[url('../assets/grainTexture.png')] bg-[#FFADD2] flex flex-col items-center justify-between container md:m-auto  rounded-xl">
            <div className=" space-y-3 p-4">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
                Fast and Hassle-free money transfer!
              </h1>
              <p className="text-[#302D53] leading-8">
                Get lightning-fast, hassle-free money transfers with Aza. Our
                platform allows you to send and receive payments quickly and
                securely, faster than many other platforms
              </p>
            </div>
            <div className="relative">
              <Image src={Mockup2} alt="sample image" width={200} />
              <Image src={WalletIcon} width={80} className="absolute right-0  top-0"  alt="icon for wallet"/>
            </div>
          </div>
        </div>
        {/* second cards inbetween the big cards */}
        <div className="flex gap-4 items-center justify-center md:flex-row flex-col space-y-6">
          <div className="bg-[url('../assets/grainTexture.png')] bg-[#95DBC4] flex items-center flex-col justify-between container md:m-auto  rounded-xl ">
            <div className="space-y-3 p-4">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
                Want to receive money from loved ones?
              </h1>
              <p className="text-[#302D53] leading-8">
                Distance is no barrier with Aza. Easily receive and send money
                to friends and family, no matter where you are. Our secure
                platform helps you manage your finances and keep track of all
                your payments to stay connected.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pl-2 w-full">
              <Image src={Cards} alt="sample image" width={300} />
            </div>
          </div>
          <div className=" bg-[url('../assets/grainTexture.png')] bg-[#FFADD2] flex flex-col items-center justify-between container md:m-auto  rounded-xl">
            <div className=" space-y-3 p-4">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
                Fast and Hassle-free money transfer!
              </h1>
              <p className="text-[#302D53] leading-8">
                Get lightning-fast, hassle-free money transfers with Aza. Our
                platform allows you to send and receive payments quickly and
                securely, faster than many other platforms
              </p>
            </div>
            <div className="relative">
              <Image src={Mockup3} alt="sample image" width={200} />
              <Image src={Exchange} width={80} className="absolute right-0  top-0"  alt="icon for wallet"/>
            </div>
          </div>
        </div>
        {/* Second big card below */}
        <div className=" bg-[url('../assets/grainTexture.png')] bg-[#FECCAE] flex items-center md:flex-row flex-col justify-between md:m-auto container  rounded-xl p-6">
          <div className="md:w-1/2 space-y-3">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold ">
              Send and receive money for FREE with your Aza-Tag!
            </h1>
            <p className="text-[#302D53] leading-8">
              Our platform allows you to make transactions without incurring
              charges by using a unique tag generated within the app. Enjoy the
              convenience and cost-saving benefits of this feature with Aza.
            </p>
          </div>
          <div className="flex flex-col">
            <Image src={Image2} alt="sample image" width={200} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
