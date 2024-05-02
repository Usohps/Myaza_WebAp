import React from "react";
import Image1 from "@/assets/topopgraphyimg.png"
import Image from "next/image";
function index() {
  return (
    <div>
      <section className="container m-auto">
        <div className="container m-auto text-center p-4">
          <p className=" text-sm from-[#9666FF] to-[#5645F5]">Our products</p>
          <div className=" md:w-1/3 w-1/2 m-auto">
            <h1 className="text-[#2A0079] md:text-3xl text-2xl ">
              A new era for payment around the world
            </h1>
          </div>
          <p className="text-[#302D53]">
            We revolutionise how people transact and manage their money by
            offering stand-out features, and we aim to make financial
            transactions around the world accessible, secure, and convenient for
            all.
          </p>
        </div>
        <div className=" bg-[url('../assets/Topographic.png')] bg-[#CAC5FC] flex items-center md:flex-row flex-col justify-between m-auto md:container w-1/2 rounded-xl  border p-4">
          <div className="md:w-1/2">
            <h1  className="text-[#2A0079] md:text-3xl text-2xl ">Multiple Currency= Multiple Wallets!</h1>
            <p className="text-[#302D53] leading-8">
              Experience the convenience and flexibility of managing multiple
              currencies with Aza. Our app allows you to hold multiple wallets
              and easily switch between them, making it easy to transact in
              various currencies.
            </p>
          </div>
         <div className="flex flex-col justify-end">
         <Image src={Image1} alt="sample image"/>
         </div>
        </div>
      </section>
    </div>
  );
}

export default index;
