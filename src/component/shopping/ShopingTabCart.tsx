import { useShoppingCart } from "../../context/ShopPingCartContext";
import items from "../../items.json";
import { CartItems } from "./CartItems";

import { FormatCurrency } from "./FormatCurrency";

const ShopingTabCart = (props:any) => {
  const { closeCart, cartItems, checkOutOpen } = useShoppingCart();

  return (
    <div className="">
      {props.open && (
        <div className=" z-50  absolute  top-20 right-0 bg-[#ece3d6] w-full border-2 h-[auto] sm:w-[80%] md:w-[70%] md:p-[20px] lg:w-[50%] xl:w-[40%]">
          <div className="Header flex justify-between p-[40px]">
            <span className="text-[50px] text-[#8e6646]">Cart</span>
            <button className="" onClick={closeCart}>
              <svg
                className="fill-current bg-[#8e6646] text-white hover:bg-[#e6bb5c] rounded-full "
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="42"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </button>
          </div>
          <div className=" bg-white m-[10px] ">
            <div className="">
              {cartItems.map((item) => (
                <CartItems key={item.id} {...item} />
              ))}
              {cartItems.length > 0 ? (
                <div className="w-full p-[40px] text-[30px] font-[500] text-end bg-[#ece3d6]">
                  <span className="mr-[20px]">Total</span>
                  {FormatCurrency(
                    cartItems.reduce((accumulator, cartItems) => {
                      const itemjs = items.find(
                        (item) => item.id === cartItems.id
                      );
                      return (
                        accumulator + (itemjs?.price || 0) * cartItems.quantity
                      );
                    }, 0)
                  )}

                  <button
                    onClick={checkOutOpen}
                    className=" ml-[20px] text-[14px] xl:text-[18px] bg-[#8e6646]  text-white h-[45px] rounded-[10px] w-[100px] hover:bg-[#e6bb5c]"
                  >
                    Check out
                  </button>
                </div>
              ) : (
                <h1 className="text-black w-full p-[40px] text-[30px] font-[500] text-end bg-[#ece3d6] ">
                  No Items
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopingTabCart;
