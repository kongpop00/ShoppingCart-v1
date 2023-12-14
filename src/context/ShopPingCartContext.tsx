import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";

import ShopingTabCart from "../component/shopping/ShopingTabCart";
import { CheckOut } from "../component/checkOut/checkOut"



  
  type ShoppingCrtProviderShop = {
    children: ReactNode;
  };
  type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    checkPrompay: () => void;
    checkThank: () => void;
    checkCash: () => void;
    cartQeantity: number;
    cartItems: CartItem[];
    getQeantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    remove: (id: number) => void;
    checkOutOpen: () => void;
    checkOutClose: () => void;
  };
  
  type CartItem = {
    id: number;
    quantity: number;
  };
  const ShoppingCartContext = createContext({} as ShoppingCartContext);
  
  export function useShoppingCart() {
    return useContext(ShoppingCartContext);
  }
  
  export function ShoppingCartProvider({ children }: ShoppingCrtProviderShop) {
    
    const cartfromLoclstrage = JSON.parse(localStorage.getItem("cart") || "null");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);
    const [promPay, setPrompay] = useState(false);
    const [thank, setThank] = useState(false);
    const [Cash, setCash] = useState(false);
    
      /**open close tab Cart */
    
     useEffect(()=>{
      setCartItems(cartfromLoclstrage)
     },[])
  
    
    const openCart = () => {
      setOpen(true);
    };
    const closeCart = () => {
      setOpen(false);
    };
  
    {
    }
  
    const getQeantity = (id: number) => {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    };
    console.log("cartItem", cartItems);
  
    {
    }
  
    const increaseCartQuantity = (id: number) => {
      setCartItems((CurrentCart) => {
        if (CurrentCart.find((item) => item.id === id) == null) {
          return [...CurrentCart, { id, quantity: 1 }];
        } else {
          return CurrentCart.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return { ...item };
            }
          });
        }
      });
    };
    {
      /* decreaseCartQuantity
  1 ตรวจสอบ ปรมาน มันเท่ากับ 1 ไหม 
  2. กรอง  */
    }
    const decreaseCartQuantity = (id: number) => {
      setCartItems((CurrentCart) => {
        if (CurrentCart.find((item) => item.id === id)?.quantity === 1) {
          return CurrentCart.filter((item) => item.id !== id);
        } else {
          return CurrentCart.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    };
  
    /**remove */
  
    const remove = (id: number) => {
      setCartItems((CurrentCart) => {
        return CurrentCart.filter((item) => item.id !== id);
      });
    };
  
    {
      /**Check out */
    }
    const checkOutOpen = () => {
      setCheck(true);
      setOpen(false);
      setThank(false);
      setCash(false);
      setPrompay(false);
    };
    const checkOutClose = () => {
      setCheck(false);
    };
    const checkPrompay = () => {
      setPrompay(true);
      setCash(false);
    };
    const checkThank = () => {
      setThank(true);
      setPrompay(false);
      setCash(false);
      const colse = setInterval(() => {
        setCheck(false);
        clearInterval(colse);
        setCartItems([]);
      }, 5000);
    };
  
    const checkCash = () => {
      setCash(true);
      setPrompay(false);
    };
    {
      /* cartQeantity  ทำ ยอด รวม ของ ปริทมาณทั้ง หมด ที่รับ เข้ามา */
    }
    const cartQeantity = cartItems.reduce(
      (qeantity, item) => item.quantity + qeantity,
      0
    );
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
  
    return (
      <ShoppingCartContext.Provider
        value={{
          checkOutOpen,
          checkOutClose,
          checkPrompay,
          checkThank,
          checkCash,
          getQeantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          remove,
          cartQeantity,
          cartItems,
          openCart,
          closeCart,
        }}
      >
        {children}
        <CheckOut check={check} thank={thank} promPay={promPay} Cash={Cash} />
        <ShopingTabCart open={open} />
      </ShoppingCartContext.Provider>
    );
  }
  