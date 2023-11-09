import React, { useState } from "react";
import "./Toggle.css";

const TogglePage = () => {
  const data = [
    {
      id: 1,
      bread: "Restaurant",
      title: "Full service & counter service. Bars & nightclubs. Breweries.",
      buttonTitle: "Explore restaurant",
      img: "https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftab-1.afef5e65.png&w=3840&q=75",
    },
    {
      id: 2,
      bread: "Small business",
      title:
        "Retail & shopping. Professional services. Automotive. Health & beauty.",
      buttonTitle: "Explore small business",
      img: "https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftab-2.2976708d.png&w=3840&q=75",
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(data[0]);

  const handleButtonClick = (item) => {
    setSelectedTitle(item);
  };

  return (
    <div className="main">
      <div className="wrapper">
        {data.map((item) => {
          return (
            <button
              className={selectedTitle.id === item.id ? "toggle1" : "toggle2"}
              key={item.id}
              onClick={() => handleButtonClick(item)}
            >
              {item.bread}
            </button>
          );
        })}
      </div>
      <div className="black">
        <div className="flex justify-between items-center">
          <h2>{selectedTitle.title}</h2>
          <button className="bg-blue-600 text-sm px-6 py-4 text-white rounded-full hover:bg-blue-700 mb-4">
            {selectedTitle.buttonTitle}
          </button>
        </div>
        <img
          className="pt-16 pb-4"
          src={selectedTitle.img}
          alt={selectedTitle.bread}
        />
      </div>
    </div>
  );
};

export default TogglePage;
