import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
  
  
  
  type TypeProviderSearch = {
    children: ReactNode;
  };
  type searchTypecontext = {
    All: () => void;
    Coffee: () => void;
    Tea: () => void;
    Chocolate: () => void;
    searchTypeBar: string;
    searchNameAndType: boolean;
    handelSearchName : () => void;
    setSearchName : string  | any
    searchName :string 
  };
  
  const useSearchsContext = createContext({} as searchTypecontext);
  export function useSearchContext() {
    return useContext(useSearchsContext);
  }
  
  export function SearchbarProvider({ children }: TypeProviderSearch) {
  
  
  
  
    {
      /**State start */
    }
    const [searchTypeBar, setSearchTypeBar] = useState<string>("all");
    const [searchName, setSearchName] = useState("");
    const [  , setgetinput]=useState<string>('')
    const [searchNameAndType, setSearchNameAndType] = useState(false);
    {
      /**State end */
    }
  
    const All = () => {
      setSearchTypeBar("all");
      setSearchNameAndType(false)
    };
  
    const Coffee = () => {
      setSearchTypeBar("coffee");
      setSearchNameAndType(false)
    };
    const Tea = () => {
      setSearchTypeBar("tea");
      setSearchNameAndType(false)
    };
    const Chocolate = () => {
      setSearchTypeBar("chocolate");
      setSearchNameAndType(false)
    };
  
    const handelSearchName = () => {
      setgetinput(searchName)
      setSearchNameAndType(true)
     
  
    };
  
    useEffect(()=>{
      console.log('SearchNameAndType' ,searchNameAndType);
      
    },[searchNameAndType])
    
    return (
      <useSearchsContext.Provider
        value={{
          All,
          Coffee,
          Tea,
          Chocolate,
          searchTypeBar,
          searchNameAndType,
          setSearchName,
          searchName,
          handelSearchName 
        }}
      >
        {children}
      </useSearchsContext.Provider>
    );
  }
  