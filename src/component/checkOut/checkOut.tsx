import { useEffect } from "react";
import { useLineContext } from "../../context/LineContext";
import { useShoppingCart } from "../../context/ShopPingCartContext";

import items from "../../items.json";
import { FormatCurrency } from "../shopping/FormatCurrency";
import CheckOutCart from "./checkOutCart";
import axios from "axios";



export const CheckOut = (props: any) => {
  const { checkOutClose, cartItems, checkPrompay, checkThank, checkCash } =
    useShoppingCart();
  const {dataLine ,mainLine ,getProfile
  } = useLineContext()
  const date = new Date();
  const dates = String(date).split(" ");
  console.log("date ", dates);

  useEffect(()=>{
    getProfile()
    console.log('dataLine', dataLine);
    
    
  },[])

  const sendMessageLine = async () => {
    const userids = dataLine.userId;
    console.log(userids);
  
    try {
      const respone = await axios.post("http://localhost:8000/send-message", {
        userId: userids ,
        messages: "กรุณา ส่งสลิปการโอน ในไลน์ ด้วยครับ ",
      });
  
      console.log("respones ", respone.data);
    } catch (error) {
      console.log("errorasdasasdasd", error);
    }
  };
  const handlepush = ()=>{
   
    sendMessageLine()
    checkThank()
    
  }

  return (
    <div>
      {props.check && (
        <div className="w-full fixed overflow-scroll top-0 h-full z-40 py-[40px] bg-slate-500/75 flex">
          <div className="grid grid-cols-1 md:grid-cols-2 relative  bg-white w-[90%] py-[20px] h-[auto] m-[auto] items-center sm:h-[70%] xl:w-[70%] ">
            {/*  */}
            <div className="z-50  h-[100%]  px-[10px] border-r-4  md:grid md:grid-cols-1 md:items-center ">
              <div className="sm:px-[70px]">
                <img
                  className="w-[50%] sm:w-[40%] md:w-[70%] lg:w-[50%]"
                  src="/checkout/logoblack.png"
                  alt=""
                />
              </div>
              {cartItems.map((item) => (
                <CheckOutCart key={item.id} {...item} />
              ))}

              <div className="w-[70%] h-[60px]  flex items-center justify-center rounded-[15px]   text-[20px] font-[500] text-center mt-[30px] border-2 m-[auto] sm:w-[60%] lg:w-[55%]">
                <span className="mr-[20px]">Total</span>
                {FormatCurrency(
                  cartItems.reduce((total, cartItems) => {
                    const itemjs = items.find((i) => i.id === cartItems.id);
                    return total + (itemjs?.price || 0) * cartItems.quantity;
                  }, 0)
                )}
              </div>
              <div className="mt-[20px] w-full  text-[22px] font-[600]">
                <button
                  className="border-2  m-[auto] h-[50px] p-[25px] w-[60%] sm:w-[50%] lg:w-[45%] xl:w-[40%] rounded-[15px] hover:bg-[#ece3d6]  flex items-center justify-center"
                  onClick={checkPrompay}
                >
                  <img
                    className="w-[55%] md:w-[75%]"
                    src="/checkout/14.png"
                    alt=""
                  />
                </button>
                <button
                  className=" border-2 m-[auto] h-[45px]  w-[60%] sm:w-[50%] lg:w-[45%] xl:w-[40%] hover:bg-[#ece3d6] rounded-[15px]  flex items-center justify-center p-[25px] mt-[10px] "
                  onClick={checkCash}
                >
                  <img src="" alt="" /> Cash{" "}
                </button>
              </div>
            </div>
            {/**show ------------------------------------------------------------------------------------ grid 2  */}
            <div className=" mt-[40px] sm:w-full flex items-center justify-start flex-col sm:py-[20px]">
              {props.promPay && (
                //--------------------
                <div className="text-center  ">
                  {dataLine ? 
                   <><img
                      className="w-[70%] sm:w-[70%] m-[auto] xl:w-[100%]"
                      src="/checkout/Prompay.jpg "
                      alt="" /><button
                        className="btn btn-info mt-[20px]  "
                        onClick={handlepush}
                      >
                        ชำระเรียบร้อย
                      </button></> :
                    <>
                    <div>
                      <h1>กรุณา Login ก่อนทำการสั่งซื้อสินค้า</h1>
                      <button onClick={mainLine} className="btn bg-[#00b900] text-white text-[20px] w-full mt-[10px] ">Login line +</button>

                    </div>
                    </>  
                  
                    }
                  
                </div>
              )}







              {props.thank && (
                <div className="m-[auto] ">
                  <img
                    className="w-[40%] md:w-[70%] m-[auto] "
                    src="/checkout/suc.gif"
                    alt=""
                  />
                  <h1 className=" text-center text-[48px] font-[500]  bottom-[60px]">
                    Succeed
                  </h1>
                  <div className=" text-center text-[18px] font-[400]  bottom-[60px]">
                    <span>
                      {dates[2]} / {dates[1]} / {dates[1]} / {dates[4]}{" "}
                    </span>
                  </div>
                </div>
              )}

              {props.Cash && (
                <div className="text-center">
                  <div>
                    <img
                      className="w-[85%] m-[auto] xl:w-[100%]"
                      src="/checkout/wait.gif"
                      alt=""
                    />
                  </div>
                  <button
                    className="btn bg-[#8e6646] mt-[20px]  text-white "
                    onClick={checkThank}
                  >
                    ชำระเรียบร้อย
                  </button>
                </div>
              )}
              <div>
                <button
                  onClick={checkOutClose}
                  className="absolute top-0 right-0  z-50"
                >
                  <svg
                    className="fill-current  bg-[#9f5500] hover: rounded-full text-white  "
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
