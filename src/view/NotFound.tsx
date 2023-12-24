

const NotFound = () => {
  return (
    <div className="w-[100%] h-[100vh] fixed bg-white z-20 top-0 flex justify-center items-center bg-[url('/checkout/BG-404.png')]" >
       <div className=" max-w-7xl w-full h-[90%] flex flex-col justify-center items-center ">
          <img  className="w-[300px] h-[150px]" src="/checkout/logoblack.png" alt="" />
          <h1 className=" text-[100px] font-[600] text-[#8e6646]">404 NOT FOUND</h1>
       </div>
    </div>
  )
}

export default NotFound