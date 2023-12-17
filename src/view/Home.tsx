import TabReview from "../component/content/TabReview";
import ShowmenuAndReview from "../component/content/ShowmenuAndReview";

import Nav from "../component/nav/Nav";
import Slider from "../component/slider/Slider";
import Video from "../component/videos/Video";
import { useLineContext } from "../context/LineContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
 const {mainLine ,visit }=useLineContext()
  const navigate = useNavigate();
  useEffect(()=>{
    if (visit === true){
      navigate("/home");
      console.log('visit', visit);
      
    }else{
      mainLine()
      console.log('-------------------------');
    }
  },[])
  

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
