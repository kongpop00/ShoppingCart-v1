import BasicRating from "./Rating";
import { DataReview } from "./dataReview";

const Review = () => {
  return (
    <div className=" w-[320px]  m-[auto]   sm:w-[100%] h-[400px] lg:h-[100%] overflow-scroll grid lg:grid-cols-1 sm:grid-cols-2">
      {DataReview.map((e) => {
        return (
          <div key={e.id}>
           <div className="flex h-[170px] w-[100%] sm:w-[90%] sm:h-[200px] lg:h-[180px] m-[auto] p-[20px] border-2 flex-col mt-3">
            <div className="top flex">
            <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 bg-slate-600">
                <span>{e.img}</span>
                </div>
            </div>
             <div className="flex flex-col ml-5">
                <span className="font-[500] text-[18px]">{e.name}</span>
                <span className="text-gray-400">{e.date}</span>
             </div>
            </div>
            <div className="butom">
              <div className="rating"><BasicRating data ={e.rating}/></div>
              <div className="tetx">{e.text}</div>
            </div>
           </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
