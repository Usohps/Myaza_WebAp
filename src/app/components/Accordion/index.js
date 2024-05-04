"use client"
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container m-auto'>
       <div className="container m-auto  space-y-3 text-center p-4">
        <p className=" text-sm from-[#9666FF] to-[#5645F5]">Answered questions</p>
        <div className=" max-w-[200px] md:max-w-[250px] m-auto ">
          <h1 className="text-[#2A0079] md:text-3xl text-2xl font-semibold  ">
          Questions? We gat answers!
          </h1>
        </div>
      </div>
    <div className=" md:w-1/2 px-2 m-auto py-12">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#BDB6FB]">
          <div
            className={`flex justify-between items-center cursor-pointer border-b border-gray-300 
            ${index === activeIndex ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => handleClick(index)}
          >
            <div className="p-4">{item.title}</div>
            <div className="p-4">
              <svg
                className={`w-6 h-6 transition-transform transform ${index === activeIndex ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>
          <div className={`transition-max-height ease-in-out duration-300 overflow-hidden ${index === activeIndex ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="p-4">{item.content}</div>
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
  )
}

export default Accordion