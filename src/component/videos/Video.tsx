import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="grid grid-cols-1 p-[20px] gap-4 h-[650px] w-[80%] m-[auto] sm:h-[400px] sm:grid-cols-2 md:w-[90%] md:m-[auto] lg:max-w-7xl lg:grid-cols-4 lg:h-[250px]">
      <div className="   ">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=P-wnHu1zgp0?"
          width="100%"
          height="100%"
        />
      </div>
      <div className=" ">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=h-PfBxoMq_4?"
          width="100%"
          height="100%"
        />
      </div>
      <div className=" ">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=VLkHH9w1Ufc?"
          width="100%"
          height="100%"
        />
      </div>
      <div className=" ">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=xUoFhcQBiZY?"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Video;
