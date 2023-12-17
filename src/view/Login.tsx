
import { useLineContext } from '../context/LineContext'


const Login = () => {
    const {mainLine } = useLineContext()
    const { handleCheckvisit} =useLineContext()
  
  
  return (
    <div className='fixed w-full z-[20]'>
      <div className="hero min-h-screen bg-center bg-no-repeat" style={{backgroundImage: 'url(/checkout/bg-login.png)'}}>
 
  <div className="hero-content text-center text-neutral-content">
    <div className=" w-[350px] sm:w-[600px] lg:w-[700px] h-[75vh] mt-[-40px] bg-[#e7e6ee79]  flex justify-center items-center rounded-[30px] ">
      <div className=' w-full justify-center items-center  '>
    <h1 className= ' text-[50px] md:text-[72px] lg:text-[100px] font-[600] text-[#8e6646]'>Welcome to </h1>
     <img  className=" m-[auto] md:w-[250px]"src="/logo.png" alt="" />
      <div className='p-[20px] bg-yellow-50 m-[auto] md:w-[250px] mt-[10px]'>
      <img className='m-[auto] md:w-[250px] mt-[10px]' src="/checkout/qrcode.png" alt="" />
      </div>
      <p className=' w-[200px] md:w-[250px] m-[auto]  font-[400] md:text-[20px] '>scan QR code by App Line</p>
      <div className='mt-[20px] w-[200px] md:w-[250px] m-[auto]'>
        
      <button onClick={mainLine} className="btn bg-[#00b900]  text-white text-[20px] w-full">Login Line</button>
      <button onClick={handleCheckvisit} className="btn bg-[#8e6646] text-white text-[20px] w-full mt-[10px] ">เยี่ยมชมเว็บไซต์</button>
      </div>
      </div>
      
     
    
      
     
    </div>
  </div>
</div>
</div>
   
  )
}

export default Login