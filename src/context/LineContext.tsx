import {
    ReactNode,
    createContext,
    useContext,

    useEffect,

    useState
  } from "react";
  import liff from "@line/liff";
import {  useNavigate } from "react-router-dom";
 
type TypeProviderLine = {
    children: ReactNode;
  };

  type LineTypecontext = {
    mainLine: () => void;
    getProfile: ()=>void
    logout :()=>void
    dataLine : any
  };  

  type dataLine ={

    pictureUrl:string
    displayName : string
   
  }
  const useLinesContext = createContext({} as LineTypecontext); 

  export function useLineContext() {
    return useContext(useLinesContext);
  }

  export function LineProvider({ children }: TypeProviderLine) {
  
    const [dataLine, setdataLine] = useState<dataLine[] >();
    const navigate = useNavigate();

    const mainLine = async () => {
        await liff
          .init({
            liffId: "2002021317-2Bymmev1", // Use own liffId
          })
          useEffect(()=>{
            if (liff.isLoggedIn()) {
              getProfile();
              console.log('login แล้วนะจ้ะ');
              navigate('/home')
              
            } else {
              liff.login();
              console.log(' ยังไม่ได้แล้วนะจ้ะ');

            }
          },[])
           
        
      };

      const getProfile = async () => {
        const profile:any = await liff.getProfile();
        setdataLine(profile);
        navigate('/home')
      };
    
      const logout = async () => {
        liff.logout();
        window.location.reload()
        navigate('/')
        
      };
    
    
     
      
     
     
  
  
    
    return (
      <useLinesContext.Provider
        value={{
            mainLine,
            getProfile,
            logout,
            dataLine
        }}
      >
        {children}
      </useLinesContext.Provider>
    );
  }
  