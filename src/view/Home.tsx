import ServiceTab from "../component/content/ServiceTab";
import ShowmenuAndReview from "../component/content/ShowmenuAndReview";
import Slider from "../component/slider/Slider";
import Video from "../component/videos/Video";
import { useLineContext } from "../context/LineContext";
import { useEffect } from "react";

function Home() {
  const { refaceHome } = useLineContext();

  useEffect(() => {
    refaceHome();
  }, []);

  return (
    <div className="">
      <Slider />
      <ServiceTab />
      <ShowmenuAndReview />
      <Video />
    </div>
  );
}

export default Home;
