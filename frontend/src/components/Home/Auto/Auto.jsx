import React from "react";
import Image from "next/image";
import donaldtrump from "../../../../public/images/donaldtrump.webp";
import { IoNewspaperOutline } from "react-icons/io5";
import calld from "../../../../public/images/calld.webp";
import { FaAngleRight } from "react-icons/fa6";
import "./Auto.css"

function Auto() {
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
  ];

  return (
    <div className="p-6 bg-white">
      <div>
        <div>
          <ul className="flex w-full justify-between p-2 mb-2 cursor-pointer">
            <li className="text-teal-800  text-2xl font-bold flex  gap-2 justify-center items-center">
              <span className="text-2xl">
                <IoNewspaperOutline />
              </span>
              ऑटो
            </li>
            <li className="text-slate-600 text-1xl font-bold flex gap-2 justify-center items-center">
              और देखेंं
              <span className="text-1xl">
                <FaAngleRight />
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col  ">
          <div className="w-2/6 flex gap-9 mb-4 card-content-auto ">
            <div>
              <Image
                className="mb-2 cursor-pointer w-full"
                src={donaldtrump}
                height={400}
                width={300}
                alt="Fatafat"
              />
              <p className="text-black font-bold card-span-auto">
                शपथ से ऐन पहले 'हश मनी' केस में ट्रंप को बड़ी राहत, दोषी साबित
                होने के बावजूद सजा से बच गए
              </p>
            </div>
          </div>

          <div className="w-2/6 card-content-auto ">
            <ul className=" gap-4 justify-start ">
              <li className="flex  gap-2  rounded-sm mb-4 ">
                <Image
                  src={calld}
                  height={100}
                  width={120}
                  className="rounded-md cursor-pointer card-img-auto"
                  alt="cardTitle"
                />
                <span className="text-sm font-bold text-black cursor-pointer card-title-auto">
                  बच्चों के लिए तैयार किया गया सबसे बड़ा खेल मेला, हर उम्र के
                  लिए मजेदार गतिविधियां
                </span>
              </li>
              <li className="flex  gap-2  rounded-sm  ">
                <Image
                  src={calld}
                  height={100}
                  width={120}
                  className="rounded-md cursor-pointer card-img-auto"
                  alt="cardTitle"
                />
                <span className="text-sm font-bold text-black cursor-pointer card-title-auto">
                  बच्चों के लिए तैयार किया गया सबसे बड़ा खेल मेला, हर उम्र के
                  लिए मजेदार गतिविधियां
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auto;
