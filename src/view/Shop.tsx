import Storeitems from "../items.json";
import SearchBar from "../component/search/Search";
import { useSearchContext } from "../context/SearchContext";
import InputSearch from "../component/search/InputSearch ";
import { StoreItem } from "../component/shopping/stoeItems";


const Shop = () => {
  const { searchTypeBar, searchNameAndType, searchName } = useSearchContext();
  const TypeorderCartall = Storeitems.filter((e) =>
    e["types "].includes(searchTypeBar)
  ); //เปี่ยนคำ ตรงนี้แทร หา ตัวมาเปี่ยนคำ

  const NameorderCartall = Storeitems.filter(
    (e) => e.name.toLowerCase().slice(0).includes(searchName) //เปลี่ยนค่ากงนี้
  );

 
  let searchFliter = [];

  if (searchNameAndType === false) {
    searchFliter = TypeorderCartall;
  } else {
    searchFliter = NameorderCartall;
  }
  return (
    <div>
      <div className="my-[40px]">
        <SearchBar />
      </div>
      <div className="flex w-full justify-center md:hidden">
        <InputSearch />
      </div>
      <div className=" flex flex-wrap gap-6 items-center mt-[40px] xl:max-w-7xl xl:justify-start xl:m-[auto] justify-center ">
        {searchName.length > 0 && NameorderCartall.length===0 && searchNameAndType === true ?<>
         
          <h1 className="text-[70px] font-[500] text-[#8e6646]">No Items</h1>
        </> : <>
        {searchFliter.map((item) => (
          <div className="" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
        </>}
      
      


      </div>
    </div>
  );
};

export default Shop;
