import Footer from "./component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Contct from "./view/Contct";
import About from "./view/About";
import Shop from "./view/Shop";


import { SearchbarProvider } from "./context/SearchContext";
import { ShoppingCartProvider } from "./context/ShopPingCartContext";
import { CheckOut } from "./component/checkOut/checkOut";
import Login from "./view/Login";
import { LineProvider } from "./context/LineContext";


function App() {
  return (
    <LineProvider>
    <SearchbarProvider>
      <ShoppingCartProvider>
        <CheckOut />
        <div className="relative">
          <Routes>
         
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contct />} />
            <Route path="/Shop" element={<Shop />} />
           
          </Routes>
          <div className="mt-[50px]">
            <Footer />
          </div>
        </div>
      </ShoppingCartProvider>
    </SearchbarProvider>
    </LineProvider>
  );
}

export default App;
