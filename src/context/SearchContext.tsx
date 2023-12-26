import { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type TypeProviderSearch = {
  children: ReactNode;
};
type searchTypecontext = {
 
  searchTypeBar: string;
  searchNameAndType: boolean;
  handelSearchName: () => void;
  setSearchName: string | any;
  searchName: string;
  getInput: string;
  findTypeOrder:(typeorder:string)=>void 
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
  const [getInput, setGetInput] = useState<string>("");
  const [searchNameAndType, setSearchNameAndType] = useState(false);

  {
    /**State end */
  }
  const navigate = useNavigate();

  const findTypeOrder = (typeorder:string)=>{
    setSearchTypeBar(typeorder);
    setSearchNameAndType(false);
  }
 

  const handelSearchName = () => {
    setGetInput(searchName);
    setSearchNameAndType(true);
    navigate("/shop");
  };

  return (
    <useSearchsContext.Provider
      value={{
       
        searchTypeBar,
        searchNameAndType,
        setSearchName,
        searchName,
        handelSearchName,
        getInput,
        findTypeOrder
      }}
    >
      {children}
    </useSearchsContext.Provider>
  );
}
