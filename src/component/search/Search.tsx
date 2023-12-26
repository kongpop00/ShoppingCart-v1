import { useSearchContext } from '../../context/SearchContext'



const SearchBar = () => {
  const {
   
   
    findTypeOrder
   } = useSearchContext()
  return (
    <div className=' lg:mb-[20px] mt-[30px] lg:max-w-7xl px-[20px] xl:px-0 flex justify-center xl:justify-start md:m-[auto] h-[45px] text-[14px] font-[500]'>
       <button onClick={()=> findTypeOrder('all')} className="px-[20px] mx-[5px] rounded-[20px] bg-[#ece3d6] hover:bg-[#e6bb5c] hover:text-white ">ALL</button>
       <button onClick={ ()=> findTypeOrder('coffee')}  className="px-[20px] mx-[5px] bg-[#ece3d6] rounded-[20px] hover:bg-[#e6bb5c] hover:text-white">COFFEE</button>
       <button onClick={ ()=> findTypeOrder('chocolate')}  className="px-[20px] mx-[5px] bg-[#ece3d6] rounded-[20px] hover:bg-[#e6bb5c] hover:text-white">CHOCOLEAT</button>
       <button onClick={()=> findTypeOrder('tea')}  className="px-[20px] bg-[#ece3d6] rounded-[20px] mx-[5px] hover:bg-[#e6bb5c] hover:text-white">TEA</button>
    </div>
  )
}

export default SearchBar