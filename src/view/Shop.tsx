import Nav from "../component/nav/Nav";

import Storeitems from "../items.json";
import SearchBar from "../component/search/Search";
import { useSearchContext } from "../context/SearchContext";
import InputSearch from "../component/search/InputSearch ";
import { StoreItem } from "../component/shopping/stoeItems";







const Shop = () => {


  const { searchTypeBar, searchNameAndType, searchName } =
    useSearchContext();
  const TypeorderCartall = Storeitems.filter((e) =>
    e["types "].includes(searchTypeBar)
  ); //เปี่ยนคำ ตรงนี้แทร หา ตัวมาเปี่ยนคำ

  let NameorderCartall = Storeitems.filter(
    (e) => e.name.toLowerCase().slice(0).includes(searchName) //เปลี่ยนค่ากงนี้
  );

  let searchsFliter = [];

  if (searchNameAndType === false) {
    searchsFliter = TypeorderCartall;
  } else {
    searchsFliter = NameorderCartall;
  }
  return (
    <div>
      <div>
        <Nav />
      </div>
      <SearchBar />
      <div className="flex w-full justify-center md:hidden">
      <InputSearch/>
      </div>
      <div className=" flex flex-wrap gap-6 items-center mt-[40px] xl:max-w-7xl xl:justify-start xl:m-[auto] justify-center ">
        {searchsFliter.map((item) => (
          <div className="" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
