import React from "react";
import Image from "next/image";
import movideReview from "../../../../public/images/movideReview.webp";
import calld from "../../../../public/images/calld.webp";
import { FaAngleRight } from "react-icons/fa6";
import { RiDeleteBin3Line } from "react-icons/ri";
import "./LatestVideo.css";

function LatestVideo() {
  const cardDataList = [
    {
      cardImg: calld,
      cardTitle:
        "बच्चों के लिए तैयार किया गया सबसे बड़ा खेल मेला, हर उम्र के लिए मजेदार गतिविधियां",
    },
    {
      cardImg: calld,
      cardTitle:
        "दी  सिनेमा शो: सलमान खान  मंदन्ना की 'सिकंदर समय पर पूरी हो पाएगी फिल्म?",
    },
    {
      cardImg: calld,
      cardTitle:
        "नई टेक्नोलॉजी से बना पहला फ्लाइंग कार मॉडल, जानें इसकी कीमत और खासियत",
    },
    {
      cardImg: calld,
      cardTitle:
        "दुनिया का सबसे ऊंचा पुल तैयार, यहां से दिखता है पूरा शहर, देखें तस्वीरें",
    },
    {
      cardImg: calld,
      cardTitle:
        "खुशखबरी! अब इस ऐप से करें फ्री में डॉक्टर से बात, जानें कैसे मिलेगा फायदा",
    },
  ];

  return (
    <div style={{ background: "#016369" }} className="p-6 ">
      <div className="">
        <div>
          <ul className="flex  justify-between p-2 mb-4">
            <li className="text-white text-2xl font-bold flex  gap-2 justify-center items-center">
              <span className="text-2xl">
                <RiDeleteBin3Line />
              </span>
              लेटेस्ट वीडियो
            </li>
            <li className="text-white text-1xl font-bold flex gap-2 justify-center items-center">
              और देखेंं
              <span className="text-1xl">
                <FaAngleRight />
              </span>
            </li>
          </ul>
        </div>

        <div className="nav-item-content flex gap-4 justify-between ">
          <div className="w-2/4 nav-item-list ">
            <ul>
              <div className="flex flex-col gap-4 cursor-pointer ">
                {cardDataList.map((item, index) => (
                  <div key={index} className="flex gap-2  items-start">
                    <Image
                      src={item.cardImg}
                      height={10}
                      width={140}
                      alt={item.cardTitle}
                      className="nav-item-img rounded-md"
                    />
                    <li className="text-sm font-bold text-white card-title-latest">
                      {item.cardTitle}
                    </li>
                  </div>
                ))}
              </div>
            </ul>
          </div>
          <div className="w-2/5 nav-item-list">
            <Image
              className="mb-2 cursor-pointer w-full "
              src={movideReview}
              height={400}
              width={400}
              alt="Fatafat"
            />
            <p className="text-white font-bold card-span-latest">
              कैसी है शंकर शनमुगन की 'गेम चेंजर'?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
