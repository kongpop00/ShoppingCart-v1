import liff from "@line/liff";
import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setdata] = useState<any>('');
    const [text , setText]=useState<string>('')
 
    const navigate = useNavigate();

    const main = async () => {
      await liff
        .init({
          liffId: "2002021317-2Bymmev1", // Use own liffId
        })
        .then(() => {
          if (liff.isLoggedIn()) {
            getProfile();
            console.log('login แล้วนะจ้ะ');
            navigate('/shop')
            
          } else {
            liff.login();
            console.log(' ยังไม่ได้แล้วนะจ้ะ');
          }
        });
    };
  
    const getProfile = async () => {
      const profile = await liff.getProfile();
      setdata(profile);
    };
  
    const logout = async () => {
      liff.logout();
      
    };
  
  
   
    useEffect(() => {
     main();

    }, []);
   
   
  
   
    const sendMessage = async()=>{
     
      const userids = data.userId 
      console.log(userids);
      
      try {
        
        const respone = await axios.post('http://localhost:8000/send-message',{
          userId : userids,
          messages: text

        })
       
        console.log(userids , text);
        console.log('respones ' , respone.data);
        
        
      }catch (error) {
        console.log('errorasdasasdasd', error)
      }
      
     
      
    }
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="flex">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.pictureUrl} />
            </div>
          </div>
        </div>
        <div>name : {data.displayName}</div>
        <div>name : {data.userId}</div>
        <button onClick={logout} className="btn btn-error text-white">LogOut</button>
        <div>
        <input type="text" onChange={((e)=>setText(e.target.value))}></input>
        <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    );
  }

export default Login