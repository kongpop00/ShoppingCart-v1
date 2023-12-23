import { useState, useEffect } from "react";

const urlimg = ["/slider/1.gif", "/slider/2.gif", "/slider/3.gif"];

const Slider = () => {
  const [changeimg, setChangeImg] = useState(0);
  if (changeimg > urlimg.slice(0, -1).length || changeimg < 0) {
    setChangeImg(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeImg((changeimg) => changeimg + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" max-w-7xl bg-amber-300 mt-[1px] m-[auto] relative ">
      <img className="" src={urlimg[changeimg]} alt="" />

      <button
        className="absolute inset-y-0 left-2 "
        onClick={() => setChangeImg(changeimg - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className=" absolute inset-y-0 right-2 "
        onClick={() => setChangeImg(changeimg + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
