import Footer from "./component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Contct from "./view/Contct";
import About from "./view/About";
import Shop from "./view/Shop";

import { SearchbarProvider } from "./context/SearchContext";
import { ShoppingCartProvider } from "./context/ShopPingCartContext";
import { CheckOut } from "./component/checkOut/checkOut";

import { LineProvider } from "./context/LineContext";
import Nav from "./component/nav/Nav";

function App() {
  return (
    <LineProvider>
      <SearchbarProvider>
        <ShoppingCartProvider>
          <Nav />
          <CheckOut />
          <div className="relative bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contct />} />
              <Route path="/shop" element={<Shop />} />
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
