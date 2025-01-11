import Banner from "@/components/Home/Banner/Banner";
import Advertis from "@/components/Home/Advertis/Advertis";
import Navbar from "@/components/Home/Navbar/index";
import LatestVideo from "@/components/Home/LatestVideo/LatestVideo";
import VisualStudies from "@/components/Home/VisualStudies/VisualStudies";
import News from "@/components/Home/News/News";


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
    </div>
  );
}
