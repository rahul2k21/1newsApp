import React, { useState, useEffect } from "react";
import Image from "next/image";
import applogo from "../../../../public/images/applogo.webp";
import Logo from "../../../../public/images/logo.png";
import { RxHome } from "react-icons/rx";
import { IoReaderOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { BiVideoRecording } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

const Index = () => {


const navItems = [
  { navTitle: "स्पोर्ट्स" },
  { navTitle: "पढ़िए" },
  { navTitle: "ऑडियोज़" },
  { navTitle: "विज़ुअल स्टोरीज़" },
  { navTitle: "सेहत" },
  { navTitle: "शोज़" },
  { navTitle: "साइंसकारी" },
  { navTitle: "न्यूज़" },
  { navTitle: "एंटरटेनमेंट" },
  { navTitle: "मौसम" },
];


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* First Div */}
      <div className="shadow-lg justify-around items-center flex bg-slate-50 pl-4 pr-4 w-full z-20 top-0 left-0 right-0 h-22">
        <div>
          <Image src={Logo} height={100} width={95} alt="Logo" />
        </div>

        <div>
          <ul className="flex border border-slate-400 rounded-lg">
            <li className="flex items-center bg-pink-600 gap-6 border-r px-12 rounded-l-lg py-2 border-gray-600 text-white">
              <RxHome />
              <span>होम</span>
            </li>
            <li className="flex items-center gap-6 border-r px-12 py-3 border-gray-600 hover:bg-pink-600 hover:text-white">
              <IoReaderOutline />
              <span>पढ़िए</span>
            </li>
            <li className="flex items-center gap-6 border-r px-12 py-3 border-gray-600 hover:bg-pink-600 hover:text-white">
              <BiVideoRecording />
              <span>देखिए</span>
            </li>
            <li className="flex items-center gap-6 px-12 py-3 hover:bg-pink-600 hover:text-white rounded-r-lg">
              <IoHeadsetOutline />
              <span>ऑडियोज़</span>
            </li>
          </ul>
        </div>

        <div>
          <Image src={applogo} height={200} width={350} alt="App Logo" />
        </div>
      </div>

      {/* Second Div */}
      <div
        className={`shadow-lg bg-slate-50 px-4 w-full h-22 border border-slate-400 ${
          isScrolled ? "fixed top-0 z-50" : "relative"
        }`}
      >
        <div className="flex justify-center">
          <CgMenuLeftAlt className="text-pink-600 text-3xl" />
          <ul className="flex flex-wrap justify-around items-center gap-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="px-2">
                <span>
                  <span className="hover:text-pink-600 hover:font-bold">
                    {item.navTitle}
                  </span>
                </span>
              </li>
            ))}
            <li className="px-2">
              <span>
                <IoSearch className="text-pink-600 text-3xl" />
              </span>
            </li>
            <li className="px-2">
              <span className="text-pink-600 font-bold">हिंदी</span>
            </li>
            <li className="px-2">
              <span>
                <CiGlobe className="text-pink-600 text-3xl" />
              </span>
            </li>
            <li className="px-2">
              <span className="text-pink-600 font-bold">लॉगिन करें</span>
            </li>
          
            <li className="px-2">
              <span>
                <IoMdContact className="text-pink-600 text-3xl" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
