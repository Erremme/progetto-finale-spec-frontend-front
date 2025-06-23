import { createContext } from "react";
import { useContext } from "react";
import useEbike from "../CustomHooks/useEbike";

// Creazione del contesto globale per gestire lo stato delle ebike
const GlobalContext = createContext();



function GlobalContextProvider({ children }) {
    
    //destrutturazione delle funzioni e degli stati da useEbike
    const { addToCompare, removeFromCompare, compareList , addToWishList , removeFromWishList , wishList } = useEbike();

   
    // Il provider fornisce le funzioni e gli stati a tutte le componenti figlie
    return (
        //Passo le funzioni e gli stati al provider del contesto globale
        <GlobalContext.Provider value={{ addToCompare, removeFromCompare, compareList , addToWishList , removeFromWishList , wishList }}>
            {children}
        </GlobalContext.Provider>
    );


}

// Utilizzo del contesto globale per accedere alle funzioni e agli stati
function useGlobalContext() {
    const context = useContext(GlobalContext);
    
    return context;
}

export { GlobalContextProvider, useGlobalContext };