import React from "react";
import Image from "next/image";
import calld from "../../../../public/images/calld.webp";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import croppedpexels from "../../../../public/images/croppedpexels.avif";
import croppedpexels2 from "../../../../public/images/croppedpexels2.avif";

function VisualStudies() {
  const cardDataList = [
    {
      cardImg: croppedpexels,
      cardTitle: "बच्चों के लिए तैयार किया गया सबसे बड़ा ",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "खेल मेला, हर उम्र के लिए मजेदार गतिविधियां",
    },
    {
      cardImg: croppedpexels,
      cardTitle: "'सिकंदर समय पर पूरी हो पाएगी फिल्म?",
    },
    {
      cardImg: croppedpexels,
      cardTitle: "दी सिनेमा शो: सलमान खान मंदन्न",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "नल, जानें इसकी कीमत और खासियत",
    },
    {
      cardImg: croppedpexels2,
      cardTitle: "नई टेक्नोलॉजी से बना पहला फ्लाइंग कार मॉडल",
    },
    {
      cardImg: croppedpexels,
      cardTitle:
        "दुनिया का सबसे ऊंचा पुल तैयार, यहां से दिखता है पूरा शहर, देखें तस्वीरें",
    },
    {
      cardImg: croppedpexels2,
      cardTitle:
        "खुशखबरी! अब इस ऐप से करें फ्री में डॉक्टर से बात, जानें कैसे मिलेगा फायदा",
    }
  ];

  return (
    <div>
      <div className="bg-slate-500 p-14">
        <div>
          <ul className="flex justify-between p-2 mb-2">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardDataList.map((item, index) => (
            <div
              className="bg-pink-300 rounded shadow-md overflow-hidden"
              key={index}
            >
              <Image
                src={item.cardImg}
                alt={item.cardTitle}
                className="w-full h-40 object-cover"
                layout="responsive"
                height={100}
                width={100}
              />
              <div className="p-2">
                <p className="text-pink-600 text-xs">हेल्थ</p>
                <p className="font-bold text-sm">{item.cardTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisualStudies;
