import StoreItem from "../../items.json";

import { Link } from "react-router-dom";
import Review from "../review/Review";
const ShowmenuAndReview = () => {
  const itemjs = StoreItem.slice(0, 6);
  console.log("items", itemjs);

  return (
    <div className="mt-[40px]">
      <div className="flex flex-col p-[20px] sm:p-[40px] lg:flex-row  lg:w-full xl:max-w-7xl xl:m-[auto] xl:p-0  ">
        <div className="exemple menu h-[750px] sm:h-[550px] lg:h-[580px] xl:h-[650px] gap-[10px]  grid grid-cols-2 sm:grid-cols-3 lg:w-[80%] relative ">
          <div className="absolute bottom-1  w-[100%] text-center ">
            <Link to="/Shop">
              {" "}
              <button  className="btn btn-outline border-[#8e6646] hover:bg-[#e6bb5c] w-[76%]  ">
                Shop Now
              </button>
            </Link>
          </div>
          {itemjs.map((e) => {
            return (
              <div
                className="h-[200px] relative sm:h-[220px] xl:h-[180px]  "
                key={e.id}
              >
                <div>
                  <img
                    className="w-[150px] h-[150px] m-[auto] sm:w-[170px] sm:h-[170px] xl:h-[220px] xl:w-[220px] relative hover:scale-125 hover:hover:-translate-y-6"
                    src={e.imgUrl}
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-1  m:grid-cols-2 text-center ">
                  <span className=" text-[18px] font-[700]  xl:text-[20px] flex flex-col w-full justify-center items-center mt-[10px]">
                    {e.name}
                  </span>
                  <span className=" z-0 absolute top-5 right-5 bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center text-white font-[500] items-center xl:text-[20px] xl:w-[45px] xl:h-[45px] xl:top-8 xl:right-12 ">
                    {e.price}฿
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex lg:w-[40%] lg:h-[640px] mt-[30px] lg:mt-0 ">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ShowmenuAndReview;
