import React from "react";
import Image from "next/image";
import donaldtrump from "../../../../public/images/donaldtrump.webp";
import { IoNewspaperOutline } from "react-icons/io5";
import calld from "../../../../public/images/calld.webp";
import { FaAngleRight } from "react-icons/fa6";
import familymurder from "../../../../public/images/familymurder.webp";
import './News.css';

function News() {
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
    {
      cardImg: calld,
      cardTitle:
        "बच्चों के लिए तैयार किया गया सबसे बड़ा खेल मेला, हर उम्र के लिए मजेदार गतिविधियां",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <div>
        <div>
          <ul className="nav-item-header  flex w-2/3 justify-between p-2 mb-2 cursor-pointer">
            <li className="text-teal-800  text-2xl font-bold flex  gap-2 justify-center items-center">
              <span className="text-2xl">
                <IoNewspaperOutline />
              </span>
              न्यूज़
            </li>
            <li className="text-slate-600 text-1xl font-bold flex gap-2 justify-center items-center">
              और देखेंं
              <span className="text-1xl">
                <FaAngleRight />
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <div className="w-2/3 flex gap-9 mb-4 nav-item-news-img">
            <div>
              <Image
                className="mb-2 cursor-pointer w-full "
                src={donaldtrump}
                height={400}
                width={300}
                alt="Fatafat"
              />
              <p className="text-black font-bold news-card-span">
                शपथ से ऐन पहले 'हश मनी' केस में ट्रंप को बड़ी राहत, दोषी साबित
                होने के बावजूद सजा से बच गए
              </p>
            </div>
            <div className="nav-item-img-hide">
              <Image
                className="mb-2 cursor-pointer w-full "
                src={familymurder}
                height={400}
                width={300}
                alt="Fatafat"
              />
              <p className="text-black font-bold cursor-pointer">
                शपथ से ऐन पहले 'हश मनी' केस में ट्रंप को बड़ी राहत, दोषी साबित
                होने के बावजूद सजा से बच गए
              </p>
            </div>
          </div>

          <div className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 nav-item-news-list">
              {cardDataList.map((item, index) => (
                <li key={index} className="flex flex-row gap-2  rounded-md">
                  <Image
                    src={item.cardImg}
                    height={100}
                    width={120}
                    className="rounded-md cursor-pointer news-card-img"
                    alt={item.cardTitle}
                  />
                  <span className="text-sm font-bold text-black cursor-pointer news-title-span">
                    {item.cardTitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
