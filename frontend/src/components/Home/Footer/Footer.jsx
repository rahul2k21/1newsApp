import React from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full pb-12 pt-10 bg-white">
      <div style={{ background: "#016369" }} className="p-7 flex w-full">
        <div className="p-4 ">
          <div className="flex w-full mb-2 justify-center ">
            <Image src={Logo} alt="logofooter" width={140} />
          </div>
          <div className="flex w-full mb-6 flex-col justify-center items-center ">
            <span className="text-white font-bold mb-2 text-xl">
              Social Media
            </span>

            <ul className="flex gap-2">
              <li className="bg-white text-2xl">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="bg-white text-2xl">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li className="bg-white text-2xl">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram />
                </a>
              </li>
              <li className="bg-white text-2xl">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col justify-center items-center ">
            <span className="text-white font-bold mb-2 text-xl ">
              Download Apps
            </span>
            <ul className="flex gap-2">
              <li className="bg-white text-2xl">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrAndroid />
                </a>
              </li>
              <li className="bg-white text-2xl">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple />
                </a>
              </li>
            </ul>

            <span className="text-white mt-10 text-sm">
              @ 2025 LALLANTOP. All rights reserved.
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="p-2 flex gap-2 w-full justify-around ">
            <div>
              <ul className="mb-4 text-slate-300 text-sm leading-normal cursor-pointer ">
                <h2 className="text-white text-xl font-semibold mb-2">
                  LallanKhas News
                </h2>
                <li className="">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
                <li className="hover:text-white">Latest Political News</li>
                <li className="hover:text-white">Top Literature News</li>
                <li className="hover:text-white"> Top Persons News</li>
                <li className="hover:text-white">Top Profiles</li>
                <li className="hover:text-white">Viral News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Education News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Fact News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer ">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Election News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className=" text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Odadnaari News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
          </div>

          <div className="p-2 flex gap-2 w-full justify-around ">
            <div>
              <ul className="mb-4 text-slate-300 text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Election News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Entertainment News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg mb-2 font-semibold">
                  Business News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className="mb-4 text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg  font-semibold mb-2">
                  Technology News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
            <div>
              <ul className=" text-slate-300  text-sm leading-normal cursor-pointer">
                <h2 className="text-white text-lg font-semibold mb-2">
                  Top News
                </h2>
                <li className="hover:text-white">Hindi Satire & Humor</li>
                <li className="hover:text-white">Lallankhas Specials </li>
                <li className="hover:text-white">Breaking News</li>
                <li className="hover:text-white">Top Political News Hindi</li>
                <li className="hover:text-white">Top History News</li>
                <li className="hover:text-white">Real Stories News</li>
              </ul>
            </div>
          </div>

          <div className="p-2 flex gap-2 w-full justify-start">
            <div className="pl-4 text-slate-300 text-sm leading-normal ">
              <h2 className="text-white text-lg mb-2 font-semibold ">
                Quick Links
              </h2>
              <div className="flex justify-between gap-28">
                <ul className="cursor-pointer">
                  <li className="hover:text-white"> Quiz </li>
                  <li className="hover:text-white">Bookmarks</li>
                  <li className="hover:text-white">Visual Stories</li>
                  <li className="hover:text-white">Hashtags </li>
                  <li className="hover:text-white">Login</li>
                </ul>
                <ul className="cursor-pointer">
                  <li className="hover:text-white"> About Us </li>
                  <li className="hover:text-white">Privacy Policy </li>
                  <li className="hover:text-white">Terms of Use</li>
                  <li className="hover:text-white">Contact Us </li>
                  <li className="hover:text-white">Feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
