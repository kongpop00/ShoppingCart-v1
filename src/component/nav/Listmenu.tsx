import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import InputSearch from "../search/InputSearch ";
import Close from "./Close";
import Hemberger from "./Hemberger";


//  button swit  on-off - today chang id  = with Heemberger  button --

const Listmenu = () => {
  const [show_list, setShow_List] = useState(false);

  const on_of_Hemberger = () => {
    setShow_List(!show_list);
  };
  const handle = () => {
    setShow_List(false);
  };

  useEffect(() => {
    console.log("show_list", show_list);
  }, [show_list]);

  return (
    <>
      {show_list ? (
        <div className=" sticky z-30 text-center  md:hidden">
          <Close on_of_Hemberger={on_of_Hemberger} />
        </div>
      ) : (
        <div className=" absolute top-2 right-3  md:hidden">
          <Hemberger on_of_Hemberger={on_of_Hemberger} />
        </div>
      )}

      <div className="hidden w-full  h-[100vh]  max-w-7xl   md:m-[auto]  md:py-[40px] md:px-[20px] md:h-[100px] md:flex  md:justify-between ">
        <div className="flex justify-between w-[300px] text-[18px]">
          <NavLink to="/" className="hover:text-[#9f5500] font-sans">
            HOME
          </NavLink>
          <NavLink to="/Shop" className="hover:text-[#9f5500]">
            SHOP
          </NavLink>
          <NavLink to="/About" className="hover:text-[#9f5500]">
            ABOUT
          </NavLink>
          <NavLink to="/Contact" className="hover:text-[#9f5500]">
            CONTACT
          </NavLink>
        </div>
        <div className="flex justify-between w-[300px]">
          <a href="#">INSTAGRAM</a>
          <a href="#"> FACEBOOK</a>
          <a href="#"> YOUTUBE</a>
        </div>
      </div>
      {/**--------------------------------------------- */}
      {/** ถ้าเป็น false จะเปิด  */}
      {show_list && (
        <div className=" text-[18px] z-10 absolute top-0 w-full m-[auto] bg-[#8e6646] flex justify-center h-[100vh] leading-[50px] md:hidden">
          <div className="flex flex-col items-center w-[300px] mt-[70px] p-[50px] text-[20px] text-white  ">
           
            < InputSearch/>
          
            <div className="flex mt-[20px] w-[260px] bg-white"></div>
            <button
              className="hover:bg-slate-400 w-full rounded-lg"
              onClick={handle}
            >
              <Link to="/">Home</Link>{" "}
            </button>
            <button
              className="hover:bg-slate-400 w-full rounded-lg"
              onClick={handle}
            >
              {" "}
              <Link to="/Shop">SHOP </Link>
            </button>
            <button
              className="hover:bg-slate-400 w-full rounded-lg"
              onClick={handle}
            >
              {" "}
              <Link to="/About">ABOUT</Link>
            </button>
            <button
              className="hover:bg-slate-400 w-full rounded-lg"
              onClick={handle}
            >
              <Link to="/Contact">CONTACT</Link>{" "}
            </button>

            <a
              className="hover:bg-pink-700 w-full text-center rounded-lg hover:text-white"
              href="#"
            >
              INSTAGRAM
            </a>
            <a
              className="hover:bg-blue-400  w-full text-center rounded-lg hover:text-white"
              href="#"
            >
              {" "}
              FACEBOOK
            </a>
            <a
              className="hover:bg-red-600 w-full text-center rounded-lg  hover:text-white"
              href="#"
            >
              {" "}
              YOUTUBE
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Listmenu;
