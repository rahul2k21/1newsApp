import React, { useState, useEffect } from "react";
import Image from "next/image";
import applogo from "../../../../public/images/applogo.webp";
import Logo from "../../../../public/images/logo.png";
import { RxHome } from "react-icons/rx";
import { IoReaderOutline } from "react-icons/io5";
import { FaCheckCircle, FaCar, FaGlobe, FaUserFriends } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";
import { BiVideoRecording } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import "./Navbar.css";
import TabBar from "./TabBar";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { navTitle: "स्पोर्ट्स" },
    { navTitle: "पढ़िए" },
    { navTitle: "ऑडियोज़" },
    { navTitle: "विज़ुअल स्टोरीज़" },
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
      <div className="nav-container shadow-lg justify-around items-center flex bg-slate-50 pl-4 pr-4 w-full z-20 top-0 left-0 right-0 h-22">
        <div>
          <Image src={Logo} height={100} width={95} alt="Logo" />
        </div>

        <div className="nav-item-hide">
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

        <div className="nav-item-hide">
          <Image src={applogo} height={200} width={350} alt="App Logo" />
        </div>
      </div>




      {/* Second Div */}

      <div className={`shadow-lg bg-slate-50 px-4 w-full h-22 border border-slate-400 ${
          isScrolled ? "fixed top-0 z-50" : "relative"
        }`} >
        <div className="flex justify-center list-item-font">
          <button onClick={toggleSidebar} className="p-2">
            <CgMenuLeftAlt className="text-pink-600 text-3xl" />
          </button>

          <ul className="flex flex-wrap justify-around items-center gap-x-4 nav-list-items">
            {navItems.map((item, index) => (
              <li key={index} className="px-2">
                <span>
                  <span className="hover:text-pink-600 hover:font-bold">
                    {item.navTitle}
                  </span>
                </span>
              </li>
            ))}
            <li className="px-2 nav-item-hide">
              <span onClick={toggleList}>
                <HiDotsHorizontal className="text-pink-600 text-3xl" />
              </span>
              {isOpen && (
                <ul className="list mt-2 absolute bg-white ">
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2 hover:text-pink-600">
                    पड़ताल
                  </li>
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2 hover:text-pink-600">
                    रंगरूट
                  </li>
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2 hover:text-pink-600">
                    देश
                  </li>
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2">
                    ऑटो
                  </li>
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2 hover:text-pink-600">
                    बिज़नेस
                  </li>
                  <li className="text-sm leading-7 w-40 mb-2 p-1 border-b-2 hover:text-pink-600">
                    ऑडनारी
                  </li>
                </ul>
              )}
            </li>

            <li className="px-2 nav-item-hide ">
              <span>
                <IoSearch className="text-pink-600 text-3xl" />
              </span>
            </li>
            <li className="px-2 nav-item-hide">
              <span className="text-pink-600 font-bold">हिंदी</span>
            </li>
            <li className="px-2 nav-item-hide">
              <span>
                <CiGlobe className="text-pink-600 text-3xl" />
              </span>
            </li>
            <li className="px-2 nav-item-hide">
              <span className="text-pink-600 font-bold">लॉगिन करें</span>
            </li>

            <li className="px-2 nav-item-hide">
              <span>
                <IoMdContact className="text-pink-600 text-3xl" />
              </span>
            </li>
          </ul>

          {/* Sidebar */}
          <div
            className={`smalldevice fixed top-0 left-0 h-full bg-pink-600 text-white shadow-md transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "275px" }}
          >


            {/* Top Section */}
            <div className=" p-4 justify-center items-center flex flex-col">
              <button
                onClick={toggleSidebar}
                className="p-1 text-right w-full text-4xl text-white"
              >
                &times;
              </button>
              <div className="t-sm leading-7  p-1  hover:text-pink-600 justify-center items-center flex flex-col"></div>
              <span>
                <div className="bg-slate-300 rounded-full p-4 flex items-center justify-center">
                  <IoIosContact className="text-4xl" />
                </div>
                लॉगिन करें
              </span>

              <ul className="mt-5  flex gap-4">
                <li className="text-sm leading-7 mb-2 p-1  hover:text-pink-600 justify-center items-center flex flex-col">
                  <div className="bg-slate-300 rounded-full p-4 flex items-center justify-center">
                    <RiContactsLine className="text-4xl" />
                  </div>
                  बुकमार्क्स
                </li>
                <li className="text-sm leading-7 mb-2 p-1  hover:text-pink-600 justify-center items-center flex flex-col">
                  <div className="bg-slate-300 rounded-full p-4 flex items-center justify-center">
                    <RiContactsLine className="text-4xl" />
                  </div>
                  बुकमार्क्स
                </li>
                <li className="text-sm leading-7 mb-2 p-1  hover:text-pink-600 justify-center items-center flex flex-col">
                  <div className="bg-slate-300 rounded-full p-4 flex items-center justify-center">
                    <RiContactsLine className="text-4xl" />
                  </div>
                  बुकमार्क्स
                </li>
              </ul>
            </div>

            {/* Bottom Section */}
            <div className="text-md font-bold flex flex-col bg-white text-black p-1 mt-2">
              <ul className="w-full flex flex-col space-y-3">
                <li className="leading-7 p-2 border-b-2 w-full flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500 text-4xl" />
                  पड़ताल
                </li>
                <li className="leading-7 p-2 border-b-2 w-full flex items-center gap-3">
                  <FaUserFriends className="text-green-500 text-4xl" />
                  रंगरूट
                </li>
                <li className="leading-7 p-2 border-b-2 w-full flex items-center gap-3">
                  <FaGlobe className="text-red-500 text-4xl" />
                  देश
                </li>
                <li className="leading-7 p-2 border-b-2 w-full flex items-center gap-3">
                  <FaCar className="text-yellow-500 text-4xl" />
                  ऑटो
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <TabBar  />
    </>
  );
};

export default Index;
