import { useShoppingCart } from "../../context/ShopPingCartContext";
import { FormatCurrency } from "./FormatCurrency";

type Shopingitemprops = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: Shopingitemprops) {
  const { getQeantity, increaseCartQuantity, decreaseCartQuantity, remove } =
    useShoppingCart();

  const quantity = getQeantity(id);
  return (
    <>
   
    <div className=" w-[290px] h-[420px]  ">
      <div className=" w-full h-[250px]  border-2 rounded-lg hover:bg-[#ece3d6]">
        <img className="w-90% m-[auto] h-[93%] " src={imgUrl} alt="" />
      </div>
      <div className="flex justify-between px-[20px] mb-[10px] items-center mt-[10px]">
        <h1 className="text-[22px] font-[500] ">{name}</h1>
        <h1 className="text-[18px]">{FormatCurrency(price)}</h1>
      </div>
      {quantity === 0 ? (
        <button
          onClick={() => increaseCartQuantity(id)}
          className="btn bg-[#8e6646] text-white  w-full"
        >
          + Add To Cart
        </button>
      ) : (
        <>
          <div className=" flex justify-between items-center px-[20px] py-[3px] w-full  ">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="  h-[40px]  rounded-[10px]  bg-[#8e6646] hover:bg-[#e6bb5c] text-white w-[25%] text-[30px]"
            >
              -
            </button>
            <h1 className="font-[500] text-[18px]">{quantity} in Cart</h1>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="h-[40px] rounded-[10px] bg-[#8e6646] hover:bg-[#e6bb5c] text-white  w-[25%] text-[20px]"
            >
              +
            </button>
          </div>
          <div className="flex justify-center mt-[3px] w-full">
            <button
              onClick={() => remove(id)}
              className=" bg-[#ece3d6] h-[45px] w-full rounded-[10px] text-[18px] font-[500] hover:bg-[#e6bb5c]"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
}
