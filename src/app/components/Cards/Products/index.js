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
      <section className="container m-auto px-6 ">
        <div className="container m-auto text-center mb-6 relative">
          <p className=" text-lg text-[#9666FF] pt-12">Our products</p>
            <div className=" pl-24 flex flex-col items-center justify-center max-w-[500px] m-auto top-6">
              <svg
                width="192"
                height="35"
                viewBox="0 0 192 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="114" height="4" rx="0.4" fill="#45D5F5" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M178.11 16.5324C178.049 16.1668 178.002 15.8054 177.972 15.444C177.927 14.9019 177.955 14.3556 177.939 13.8134C177.932 13.5834 177.905 12.9838 177.916 12.8976C178.016 12.1459 178.623 12.0309 178.8 12.0104C178.886 11.9981 179.768 11.8995 179.958 12.877C180.191 14.0722 180.266 15.2756 180.183 16.4544C180.376 17.4565 180.705 18.4545 181.14 19.3581C182.871 22.9518 186.169 23.3009 189.742 23.2681C190.292 23.2599 190.748 23.6911 190.777 24.2374C190.806 24.7877 190.397 25.2642 189.85 25.3134C187.852 25.5065 184.309 27.1083 183.083 28.7758C182.827 29.1249 182.678 29.9669 182.481 30.7924C182.206 31.9383 181.878 33.0718 181.512 33.5483C181.457 33.6222 180.787 34.3779 180.588 34.4888C180.108 34.7517 179.724 34.5997 179.506 34.4601C179.288 34.3204 179.041 34.0452 178.943 33.5893C178.839 33.1129 178.927 32.1354 178.911 31.9259C178.852 31.1661 178.7 29.6752 178.39 28.3938C178.223 27.7038 178.045 27.0672 177.75 26.7509C176.658 25.5804 174.913 25.7529 173.443 25.946C173.274 25.9665 173.105 25.9911 172.937 26.0117C172.338 26.1883 171.703 26.3197 171.031 26.3977C170.017 26.5168 169.851 25.5845 169.842 25.5229C169.823 25.3874 169.752 24.6892 170.517 24.4099C170.6 24.3811 171.215 24.2456 171.452 24.1922C171.783 24.1183 172.116 24.0608 172.452 24.0074C175.914 22.9313 177.794 19.9084 178.11 16.5324ZM179.299 20.2658C180.606 22.9683 182.589 24.2743 184.94 24.8658H184.939C183.472 25.6338 182.136 26.5949 181.429 27.5601C181.16 27.9256 180.914 28.6608 180.691 29.4863C180.571 28.7183 180.408 27.9009 180.194 27.2027C179.949 26.4059 179.62 25.7447 179.253 25.3504C178.544 24.5906 177.655 24.1676 176.698 23.9581C177.843 22.9436 178.711 21.6786 179.299 20.2658Z"
                  fill="#5645F5"
                />
              </svg>
            </div>
          <div className=" md:max-w-[550px] md:h-[96px] max-w-[302px] m-auto ">
            <h1 className="text-[#2A0079] md:text-5xl text-2xl font-bold ">
              A new era for payment around the world
            </h1>
          </div>
          <p className="text-[#302D53] leading-6 max-w-[450px] pt-4 m-auto">
            We revolutionise how people transact and manage their money by
            offering stand-out features, and we aim to make financial
            transactions around the world accessible, secure, and convenient for
            all.
          </p>
        </div>
        <div className=" space-y-5">
          {/* First Big card */}
        <div className="  bg-[url('../assets/Topographic.png')] bg-[#CAC5FC] flex items-center md:flex-row flex-col justify-between md:m-auto container rounded-3xl p-6">
          <div className="md:w-1/2 space-y-4 p-6">
            <div className=" md:max-w-[400px] max-w-[300px]">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold ">
              Multiple Currency= Multiple Wallets!
            </h1>
            </div>
            <p className="text-[#302D53] leading-7">
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
          <div className="bg-[url('../assets/grainTexture.png')] relative bg-[#95DBC4] bg-blend-overlay flex items-center flex-col justify-between container md:m-auto rounded-3xl ">
            <div className="space-y-6 pt-8 px-6">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold max-w-[400px] px-6 ">
                Want to receive money from loved ones?
              </h1>
              <p className="text-[#302D53] leading-7 px-6 pb-6">
                Distance is no barrier with Aza. Easily receive and send money
                to friends and family, no matter where you are. Our secure
                platform helps you manage your finances and keep track of all
                your payments to stay connected.
              </p>
            </div>
            <div className="">
              <Image src={Mockup1} alt="sample image" width={200} />
              <Image
                src={LoveIcon}
                width={80}
                className="absolute left-[60%] top-[48%] lg:left-[60%] md:left-[65%] lg:top-[48%] md:top-[58%]"
                alt="icon for love"
              />
            </div>
          </div>
          <div className=" relative bg-[url('../assets/grainTexture.png')] bg-[#FFADD2] bg-blend-overlay flex flex-col items-center justify-between container md:m-auto  rounded-3xl">
            <div className=" space-y-6 pt-8 px-6">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold max-w-[400px] px-6 ">
                Fast and Hassle-free money transfer!
              </h1>
              <p className="text-[#302D53] leading-7 pb-6 px-6">
                Get lightning-fast, hassle-free money transfers with Aza. Our
                platform allows you to send and receive payments quickly and
                securely, faster than many other platforms
              </p>
            </div>
            <div className="">
              <Image src={Mockup2} alt="sample image" width={200} />
              <Image
                src={WalletIcon}
                width={80}
                className="absolute right-[25%]  top-[42%] lg:right-[25%]  lg:top-[42%] md:right-[12%]  md:top-[54%]"
                alt="icon for wallet"
              />
            </div>
          </div>
        </div>
        {/* second cards inbetween the big cards */}
        <div className="flex gap-4 items-center justify-center md:flex-row flex-col space-y-6">
          <div className="bg-[url('../assets/grainTexture.png')] bg-[#FEEBB4] bg-blend-overlay flex items-center flex-col justify-between container md:m-auto  rounded-3xl ">
            <div className="space-y-6 pt-8 px-6">
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold max-w-[350px] px-6 ">
                Virtual cards just got better!
              </h1>
              <p className="text-[#302D53] leading-7 px-6">
                Easily create and manage virtual cards for secure online and
                in-store purchases. Enjoy the flexibility of using a card
                without needing a physical card, all while keeping your
                financial information secure
              </p>
            </div>
            <div className="flex flex-col items-start justify-start pl-2 w-full">
              <Image src={Cards} alt="sample image" width={300} />
            </div>
          </div>
          <div className=" relative bg-[url('../assets/grainTexture.png')] bg-[#B1EDFB] bg-blend-overlay flex flex-col items-center justify-between container md:m-auto  rounded-3xl">
            <div className=" space-y-6 pt-8 px-6">
              <h1 className="text-[#2A0079] hidden md:block md:text-3xl text-2xl font-bold max-w-[400px] px-6 ">
                Swap Currencies Quickly and Securely
              </h1>
              <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold md:hidden max-w-[300px] px-6 ">
              Currency swap, like no other?
              </h1>
             
              <p className="text-[#302D53] leading-7 pb-6 px-6">
                Our platform allows you to quickly and securely swap between
                various currencies, so you can easily make transactions and
                manage your finances in different currencies.
              </p>
            </div>
            <div className="">
              <Image src={Mockup3} alt="sample image" width={200} />
              <Image
                src={Exchange}
                width={80}
                className="absolute right-[25%]  top-[48%] md:right-[15%]  md:top-[55%] lg:right-[25%]  lg:top-[48%]"
                alt="icon for wallet"
              />
            </div>
          </div>
        </div>
        {/* Second big card below */}
        <div className=" bg-[url('../assets/grainTexture.png')] bg-[#FECCAE] bg-blend-overlay flex items-center md:flex-row flex-col justify-between md:m-auto container  rounded-3xl p-6">
          <div className="md:w-1/2 space-y-3 p-6">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl font-bold ">
              Send and receive money for FREE with your Aza-Tag!
            </h1>
            <p className="text-[#302D53] leading-7">
              Our platform allows you to make transactions without incurring
              charges by using a unique tag generated within the app. Enjoy the
              convenience and cost-saving benefits of this feature with Aza.
            </p>
          </div>
          <div className="flex flex-col">
            <Image src={Image2} alt="sample image" width={200} />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default index;
