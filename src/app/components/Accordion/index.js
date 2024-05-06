"use client";
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container m-auto">
      <div className="container m-auto  space-y-3 text-center p-4">
        <p className=" text-sm from-[#9666FF] to-[#5645F5]">
          Answered questions
        </p>
        <div className=" max-w-[200px] md:max-w-[250px] m-auto relative">
          <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold  ">
            Questions? We gat answers!
          </h1>
          <svg className="absolute top-0 right-0" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.61042 4.53261C9.54881 4.16707 9.5024 3.80568 9.47242 3.44425C9.42724 2.90211 9.45517 2.35582 9.43916 1.81368C9.43217 1.58368 9.40465 0.984044 9.41574 0.897794C9.51637 0.146187 10.123 0.0311732 10.3004 0.0106375C10.3863 -0.00168396 11.2676 -0.100211 11.4578 0.877289C11.6911 2.07247 11.7658 3.27584 11.6833 4.45459C11.8759 5.45674 12.2053 6.45475 12.6403 7.35832C14.371 10.9521 17.669 11.3012 21.2423 11.2683C21.7918 11.2601 22.2481 11.6914 22.2769 12.2376C22.3056 12.788 21.8965 13.2644 21.3495 13.3137C19.3522 13.5067 15.8085 15.1085 14.5833 16.776C14.3271 17.1251 14.178 17.9671 13.9808 18.7926C13.7056 19.9385 13.3783 21.0721 13.0115 21.5485C12.9565 21.6225 12.2874 22.3782 12.0878 22.4891C11.6081 22.7519 11.2241 22.5999 11.006 22.4603C10.7879 22.3207 10.5411 22.0455 10.4425 21.5896C10.3394 21.1132 10.4265 20.1356 10.4105 19.9262C10.3522 19.1663 10.2002 17.6755 9.89013 16.394C9.72297 15.704 9.54471 15.0674 9.24982 14.7512C8.15814 13.5806 6.4126 13.7532 4.94266 13.9462C4.77385 13.9667 4.60505 13.9914 4.43666 14.0119C3.83825 14.1885 3.20286 14.3199 2.53134 14.398C1.51729 14.5171 1.35055 13.5848 1.34151 13.5231C1.32262 13.3876 1.25238 12.6894 2.01672 12.4101C2.10009 12.3814 2.71535 12.2458 2.95233 12.1924C3.28255 12.1185 3.61645 12.061 3.95159 12.0076C7.4135 10.9316 9.29376 7.90868 9.61042 4.53261ZM10.7986 8.26604C12.1055 10.9685 14.0888 12.2746 16.4398 12.866H16.4394C14.9715 13.6341 13.6362 14.5951 12.9286 15.5603C12.66 15.9259 12.4135 16.661 12.1913 17.4866C12.071 16.7185 11.9084 15.9012 11.6936 15.203C11.4492 14.4062 11.1202 13.745 10.753 13.3507C10.0441 12.5909 9.15452 12.1678 8.19796 11.9584C9.34303 10.9439 10.2113 9.67889 10.7986 8.26604Z" fill="#5645F5"/>
</svg>

        </div>
      </div>
      <div className=" md:w-1/2 px-2 m-auto py-12">
        {items.map((item, index) => (
          <div key={index} className="border-b border-[#BDB6FB]">
            <div
              className={`flex justify-between items-center cursor-pointer border-b border-gray-300 
            ${index === activeIndex ? "bg-gray-200" : "bg-white"}`}
              onClick={() => handleClick(index)}
            >
              <div className="p-4">
                <h1 className="text-[#2A0079]">{item.title}</h1>
              </div>
              <div className="p-4">
                {index === activeIndex ? (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 16H8"
                      stroke="#5645F5"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8V16M16 16V24M16 16H24M16 16H8"
                      stroke="#3A25F4"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
                index === activeIndex ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4">
                {" "}
                <p className="from-[#9666FF] to-[#5645F5]">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container m-auto text-center py-4 px-6 md:p-0">
        <button className="bg-[#5645F5] md:w-1/3 w-full  border text-white text-xs font-bold px-3 py-3 rounded-md ">
          See more answered questions
        </button>
      </div>
    </div>
  );
};

export default Accordion;
