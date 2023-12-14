import items from "../../items.json";
import { FormatCurrency } from '../shopping/FormatCurrency';

type CartItemsType = {
    id: number;
    quantity: number;
  };



const CheckOutCart = ({id, quantity}:CartItemsType) => {


    const itemjs:any = items.find((item) => item.id === id);
    
   
   
   
  return (
    <div>
        <div className='sm:px-[80px]  xl:px-[100px]'>
            <div className='flex px-[8px] justify-between items-center'>
                <div>
                    <span></span>
                    <span className='text-[18px] font-[500] '>{itemjs?.name}</span>
                    <span>  {quantity > 1 && <span>{quantity}X</span>}</span>
                </div>
                <span>{FormatCurrency(itemjs.price * quantity )}</span>
            </div>
            
        </div>
        <div className='hidden sm:block'></div>
    </div>
  )
}

export default CheckOutCart