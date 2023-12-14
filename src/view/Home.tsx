import TabReview from "../component/content/TabReview";
import ShowmenuAndReview from "../component/content/ShowmenuAndReview";

import Nav from "../component/nav/Nav";
import Slider from "../component/slider/Slider";
import Video from "../component/videos/Video";


function Home() {
  return (
    <div className="">
      <Nav />
      <Slider />
      <TabReview />
      <ShowmenuAndReview />
      <Video />
    </div>
  );
}

export default Home;
