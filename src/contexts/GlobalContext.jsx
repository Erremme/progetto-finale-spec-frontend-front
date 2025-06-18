import { createContext } from "react";
import { useContext } from "react";
import useEbike from "../CustomHooks/useEbike";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const { addToCompare, removeFromCompare, compareList , addToWishList , removeFromWishList , wishList } = useEbike();

   

    return (
        <GlobalContext.Provider value={{ addToCompare, removeFromCompare, compareList , addToWishList , removeFromWishList , wishList }}>
            {children}
        </GlobalContext.Provider>
    );


}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    
    return context;
}

export { GlobalContextProvider, useGlobalContext };