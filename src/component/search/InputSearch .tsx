
import { useSearchContext } from "../../context/SearchContext";

const InputSearch = (props:any) => {
  const { setSearchName } = useSearchContext();
  return (
    <div className="flex w-[320px] bg-white rounded-[30px] border-2  mt-[20px]">
      <input 
        type="text"
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search Menu"
        className=" ml-[20px]   text-[#8e6646]  focus:outline-none focus-within:border-none font-[500] text-[18px] bg-white input w-full"
      />
      
        <button
          onClick={props.handleisHemberger}
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
      
    </div>
  );
};

export default InputSearch;
