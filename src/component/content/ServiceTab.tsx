

const ServiceTab = () => {
  return (
    <div className='max-w-7xl  px-[20px]  grid  grid-cols-4  md:grid-cols-4 md:m-[auto] md:mt-[40px] gap-[20px]'>
        {/**item 1 */}
        <div className='flex flex-col justify-center items-center text-center py-[30px]  md:bg-transparent  md:border-r-2'>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="currentColor" className=" w-[25px] sm:w-[30px]  md:w-[45px] md:text-teal-900 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            </div>
            <div >
                <h1 className=' text-[12px] sm:text-[16px] md:text-[20px] md:font-[300] '>FREE DELIVERY</h1>
                <h2 className='  hidden sm:block sm:text-[12px] md:text-[16px]'>Delivered to your door step</h2>
            </div>
        </div>
          {/**item 2 */}
          <div className='flex flex-col justify-center items-center text-center py-[30px]  md:bg-transparent  md:border-r-2 '>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="currentColor" className=" w-[25px] sm:w-[30px]  md:w-[45px] md:text-teal-900">
         <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        
            <div >
                <h1 className='text-[12px] sm:text-[16px] md:text-[20px] md:font-[300]'>WORK SHOP</h1>
                <h2 className='hidden sm:block sm:text-[12px] md:text-[16px]'>Teaching in groups </h2>
            </div>
        </div>
          {/**item 3 */}
          <div className='flex flex-col justify-center items-center text-center py-[30px]  md:bg-transparent  md:border-r-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="currentColor" className="w-[25px] sm:w-[30px] md:w-[45px] md:text-teal-900">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>

            <div >
                <h1 className='text-[12px] sm:text-[16px] md:text-[20px] md:font-[300]'>SPECIAL GIFT WRAPS</h1>
                <h2 className='hidden sm:block sm:text-[12px] md:text-[16px]'>Send a sweet surprise</h2>
            </div>
        </div>
          {/**item 4 */}
          <div className='flex flex-col justify-center items-center text-center py-[30px]  md:bg-transparent '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="currentColor" className=" w-[25px] sm:w-[30px]  md:w-[45px] md:text-teal-900">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
         </svg>

            <div >
                <h1 className='text-[12px] sm:text-[16px] md:text-[20px] md:font-[300] '>NEW PICK UP SERVICE</h1>
                <h2 className='hidden  sm:block sm:text-[12px] md:text-[16px]'>Get it fresh</h2>
            </div>
        </div>

    </div>
  )
}

export default ServiceTab