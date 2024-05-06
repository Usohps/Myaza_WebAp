import Image from "next/image";
import React from "react";
import Arrow1 from "@/assets/step1.png";
import Arrow2 from "@/assets/step2.png";
import Arrow3 from "@/assets/mobileicon.png";
function index() {
  return (
    <div className="md:max-w-[1130px] space-y-6 m-auto relative">
      <div className="container m-auto space-y-4 pt-6 text-center p-4">
        <p className=" text-lg from-[#9666FF] to-[#5645F5]">Want to join us?</p>
        <div className=" md:max-w-[300px] max-w-[250px] m-auto">
          <h1 className="text-[#2A0079] md:text-3xl font-semibold text-2xl ">
            Get started in three easy steps
          </h1>
        </div>
        <p className="text-[#302D53]">
          Setting up Aza is easy. Follow the steps below to get started
        </p>
      </div>
      <section className="flex container m-auto md:flex-row flex-col items-center gap-6 justify-center p-6">
        <div className="md:w-1/3 container m-auto md:m-0 space-y-3">
          <div className=" w-[56px] h-[56px] text-4xl  p-4 font-extrabold flex items-center justify-center rounded-full text-[#2A0079] bg-[#CAC5FC] ">
            <p>1</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#2A0079] ">
              Find the Aza app
            </p>
          </div>
          <div className="p-2 md:p-0">
            <p className="text-[#302D53] text-sm leading-8">
              Find the Aza app in the App Store (for Apple devices) or the Play
              Store (for Android devices). You can search for the app or follow
              a link to the app&apos;s page.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 md:mt-24 container m-auto md:m-0 space-y-3">
          <div className=" w-[56px] h-[56px] text-4xl  p-4 font-extrabold flex items-center justify-center rounded-full text-[#2A0079] bg-[#95DBC4] ">
            <p>2</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#2A0079] ">
              Install Aza app
            </p>
          </div>
          <div className="p-2 md:p-0">
            <p className="text-[#302D53] text-sm leading-8">
              Install the app on your device by tapping the &#34;Install button
              and waiting for the download process to complete. Depending on
              your device and internet connection, this may take a few minutes.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 md:mt-36 container m-auto md:m-0 space-y-3">
          <div className="w-[56px] h-[56px] text-4xl  p-4 font-extrabold flex items-center justify-center rounded-full text-[#2A0079] bg-[#FFADD2] ">
            <p>3</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#2A0079] ">
              Register/Log in
            </p>
          </div>
          <div className="p-2 md:p-0">
            <p className="text-[#302D53] text-sm leading-8 ">
              Once the app is installed, launch it and register for a new
              account or log in to your existing account to access all of the
              features and benefits of Aza.
            </p>
          </div>
        </div>
      </section>
      <Image
        src={Arrow1}
        alt="step arrow 1"
        className=" hidden md:block absolute left-[20%] top-[34%] w-[100px]"
      />
      <Image
        src={Arrow2}
        alt="step arrow 2"
        className="hidden md:block absolute right-[35%] top-[38%] w-[100px]"
      />
      <Image
        src={Arrow3}
        alt="step arrow 3"
        className=" md:hidden block absolute right-[20%] top-[38%]"
      />
      <Image
        src={Arrow3}
        alt="step arrow 3"
        className=" md:hidden block absolute right-[20%] top-[63%] "
      />
     <div className="container m-auto text-center py-6">
     <button className="bg-[#5645F5] md:w-1/4 w-1/2  border text-white text-xs font-bold px-3 py-3 rounded-md ">
        Download Aza app
      </button>
     </div>
    </div>
  );
}

export default index;
