import { useShoppingCart } from "../../context/ShopPingCartContext";
import items from "../../items.json";
import { FormatCurrency } from "./FormatCurrency";
type CartItemsType = {
  id: number;
  quantity: number;
};

export function CartItems({ id, quantity }: CartItemsType) {
  const { remove } = useShoppingCart();
  const itemjs = items.find((i) => i.id === id);

  if (itemjs == null) return null;
  return (
    <div className="flex items-center justify-between  py-3 bg-[#ece3d6]     w-full ">
      <div className="flex items-center ">
        <img className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" src={itemjs.imgUrl} alt="" />
        <div className="flex flex-col flex-wrap  py-[40px] mt-[20px]">
          <h1 className="text-[16px] sm:text-[20px] font-[500] ">
            {itemjs.name}{" "}
            <label className="font-[200]  text-[14px]  sm:text-[18px] ml-[10px]">
              {quantity > 1 && <span>{quantity}X</span>}
            </label>
          </h1>
          <span className="text-[14px] sm:text-[18px]">{FormatCurrency(itemjs.price)}</span>
          
        </div>

      </div>

      <div className="flex ml-[10px] sm:text-[18px]  ">
        <span>{FormatCurrency(itemjs.price * quantity)}</span>
        <button>
          {" "}
          <svg
            className="fill-current ml-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={() => remove(id)}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>
    </div>
  );
}
