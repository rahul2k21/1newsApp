import React from "react";
import Image from "next/image";
import BannerImg from "../../../../public/images/BannerImg.webp";
import Fatafatjpg from "../../../../public/images/fatafatjpg.webp";
import calld from "../../../../public/images/calld.webp";
import './Banner.css';

function Banner() {
  const cardDataList = [
    {
      cardImg: calld,
      cardTitle:
        "तेज बारिश से शहर जलमग्न में जुटी टीम, तस्वीरें देखकर दिल दहल जाएगा",
    },
    {
      cardImg: calld,
      cardTitle:
        "सदियों पुराना मंदिर ध्वस्त, जानें क्या है घटना के पीछे का कारण",
    },
    {
      cardImg: calld,
      cardTitle:
        "नई टेक्नोलॉजी से बना पहला फ्लाइंग कार मॉडल,  कीमत और खासियत",
    },
    {
      cardImg: calld,
      cardTitle:
        "बच्चों के लिए तैयार किया गया सबसे  हर उम्र के लिए मजेदार गतिविधियां",
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
    <div className=" bg-white flex justify-around p-6">
      <div className="w-96 smalldevicewidth">
        <Image
          className="rounded-t-md mb-4 cursor-pointer smalldevicewidth"
          src={BannerImg}
          height={100}
          width={400}
          alt="BannerImg"
        />
        <ul>
          <div className="flex flex-col gap-4 cursor-pointer">
            {cardDataList.slice(0, 4).map((item, index) => (
              <div key={index} className="flex gap-1  items-start bg-white">
                <Image
                  className="rounded-md"
                  src={item.cardImg}
                  height={10}
                  width={220}
                  alt={item.cardTitle}
                />
                <li className="text-sm text-center font-bold card-title-banner">
                  {item.cardTitle}
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>

      <div className="w-96 nav-item-hide">
        <ul>
          <div className="flex flex-col gap-2 cursor-pointer">
            {cardDataList.map((item, index) => (
              <div key={index} className="flex gap-1  items-start bg-white">
                <Image
                  className="rounded-md"
                  src={item.cardImg}
                  height={10}
                  width={220}
                  alt={item.cardTitle}
                />
                <li className="text-sm font-bold">{item.cardTitle}</li>
              </div>
            ))}
          </div>
        </ul>
      </div>

      <div className="w-96 nav-item-hide">
        <Image
          className="rounded-md cursor-pointer"
          src={Fatafatjpg}
          height={200}
          width={400}
          alt="Fatafat"
        />
      </div>
    </div>
  );
}

export default Banner;
