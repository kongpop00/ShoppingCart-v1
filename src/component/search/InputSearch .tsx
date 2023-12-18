import { Link } from "react-router-dom";
import { useSearchContext } from "../../context/SearchContext";

const InputSearch = () => {
  const { setSearchName, handlesearchname } = useSearchContext();
  return (
    <div className="flex w-[320px] bg-white rounded-[30px] border-2  mt-[20px]">
      <input 
        type="text"
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search Menu"
        className=" ml-[20px] border-none focus: rounded-none text-[#8e6646] font-[500] text-[18px] bg-white input "
      />
      <Link to="/shop">
        <button
          onClick={handlesearchname}
          className=" bg-[#e6bb5c] flex items-center justify-center hover:bg-slate-400 p-[7px] h-[50px] w-[50px] rounded-full  text-[18px] font-[500] text-white"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default InputSearch;
