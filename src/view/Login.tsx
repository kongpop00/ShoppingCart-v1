import { Link } from 'react-router-dom'
import { useLineContext } from '../context/LineContext'

const Login = () => {
    const {mainLine ,dataLine} = useLineContext()
  return (
    <div className='fixed w-full z-[20]'>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" w-[350px] sm:w-[600px] lg:w-[700px] h-[80vh] bg-[#8e6646] flex justify-center items-center rounded-[30px] ">
      <div className=' w-full justify-center items-center  '>
    <h1 className= ' text-[50px] md:text-[72px] font-[600]'>Welcome To </h1>
     <img  className=" m-[auto] md:w-[250px]"src="/checkout/logoblack.png" alt="" />
     
      <img className='m-[auto] md:w-[250px] mt-[10px]' src="/checkout/qrcode.png" alt="" />
      <p className=' w-[200px] md:w-[250px] m-[auto] bg-green-500 font-[400] md:text-[20px] '>scan QR code by App Line</p>
      <div className='mt-[20px] w-[200px] md:w-[250px] m-[auto]'>
        
      <button onClick={mainLine} className="btn btn-green  w-full">{dataLine ? 'เข้าสู่ระบบ' : 'LoginLine' }</button>
      <Link to={'/Home'}><button className="btn btn-primary w-full mt-[10px] ">Get Started</button></Link>
      </div>
      </div>
      
     
    
      
     
    </div>
  </div>
</div>
</div>
   
  )
}

export default Login