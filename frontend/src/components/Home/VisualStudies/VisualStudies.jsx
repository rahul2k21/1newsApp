import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import croppedpexels from "../../../../public/images/croppedpexels.avif";
import croppedpexels2 from "../../../../public/images/croppedpexels2.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VisualStudies.css";


function VisualStudies() {
  const cardDataList = [
    {
      cardImg: croppedpexels,
      cardTitle: "बच्चों के लिए तैयार किया गया सबसे बड़ा ",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "खेल मेला, हर उम्र के लिए गतिविधियां",
    },
    {
      cardImg: croppedpexels,
      cardTitle: "'सिकंदर समय पर पूरी हो पाएगी फिल्म?",
    },
    {
      cardImg: croppedpexels,
      cardTitle: "दी सिनेमा शो: सलमान खान मंदन्न पहला",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "नल, जानें इसकी कीमत और खासियत",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "टेक्नोलॉजी से बना पहला फ्लाइंग कार मॉडल",
    },
    {
      cardImg: croppedpexels,
      cardTitle: "यहां से दिखता है पूरा शहर, देखें तस्वीरें",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "जानें कैसे मिलेगा बना पहला फ्लाइंग फायदा",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "10px", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="bg-white p-6 mb-10 overflow-hidden">
      <div>
        <ul className="flex justify-between p-2 mb-4">
          <li className="text-pink-600 text-2xl font-bold flex gap-2 justify-center items-center">
            <span className="text-2xl">
              <MdOutlinePermContactCalendar />
            </span>
            विज़ुअल स्टोरीज़
          </li>
          <li className="text-slate-600 text-xl flex gap-2 justify-center items-center">
            और देखेंं
            <span className="text-xl">
              <FaAngleRight />
            </span>
          </li>
        </ul>
      </div>

     <Slider {...settings} className="slider-container">
  {cardDataList.map((item, index) => (
    <div className="rounded shadow-md overflow-hidden p-2 mx-2" key={index}>
      <Image
        src={item.cardImg}
        alt={item.cardTitle}
        className="w-full h-30"
        layout="responsive"
        height={100}
        width={100}
      />
      <div className="p-2">
        <p className="text-pink-600 text-xs font-semibold mb-3 ">हेल्थ</p>
        <p className="font-bold text-sm ">{item.cardTitle}</p>
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
}

export default VisualStudies;
