"use client"
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
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
  )
}

export default Accordion