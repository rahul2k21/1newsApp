import React from "react";
import Image from "next/image";
import ola from "../../../../public/images/ola.webp";

function ThumbBlock() {
   
  return (
    <div className="p-6 bg-white w-full">
      <div>
        <div className="flex w-full ">
          <div className="w-full flex flex-col">
            <Image
              className="mb-2 cursor-pointer w-full"
              src={ola}
              height={400}
              width={500}
              alt="olaImage"
            />
            <span className="font-bold mb-2">
              मुझे अपनी पत्नी को निहारना पसंद... , 90 घंटे काम वाले विवाद पर
              आंनद महिंद्रा ने गजब मौज ले ली
            </span>
            <span>
              Border Gavaskar Trophy में अभी भी इंडिया टीम और खिलाड़ियों के
              प्रदर्शन को लेकर लगातार . कॉमेंटेटर Sanjay
              Manjrekar ने भी प्रदर्शन पर सवाल उठाया है. उन्होंने अंदर की बातें
              बताई हैं.
            </span>
            <span className="text-slate-700 text-sm">The Lallantop</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThumbBlock;
