import Banner from "@/components/Home/Banner/Banner";
import Advertis from "@/components/Home/Advertis/Advertis";
import Navbar from "@/components/Home/Navbar/index";
import LatestVideo from "@/components/Home/LatestVideo/LatestVideo";
import VisualStudies from "@/components/Home/VisualStudies/VisualStudies";
import News from "@/components/Home/News/News";
import Chunav from "@/components/Home/Chunav/Chunav";
import Sports from "@/components/Home/Sports/Soprts";
import Technology from "@/components/Home/Technology/Technology";
import Entertainment from "@/components/Home/Entertainment/Entertainment";
import Auto from "@/components/Home/Auto/Auto";
import Business from "@/components/Home/Business/Business";
import ThumbBlock from "@/components/Home/ThumbBlock/ThumbBlock";
import Footer from "@/components/Home/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Advertis />
      <Banner />
      <LatestVideo />
      <VisualStudies />
      <Advertis />
      <News />
      <Chunav />
      <Sports />
      <Technology />
      <Entertainment />
      <Auto />
      <Business />
      <ThumbBlock />
      <Footer/>
    </div>
  );
}
