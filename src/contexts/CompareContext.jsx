import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const CompareContext = createContext();

function CompareProvider({ children }) {

    const [compareList, setCompareList] = useState([]);

    function addToCompare(bike){
        if(compareList.length >=2) {
            return
        }

         else if (compareList.some(item => item.id === bike.id)) {
            return
            
        }  

        setCompareList((prev) => [...prev, bike]);
        console.log("Aggiunta alla lista di confronto:", bike);
        console.log("Lista di confronto aggiornata:", [...compareList, bike]);

    }

    function removeFromCompare(bike) {
        setCompareList((prev) => prev.filter(item => item.id !== bike.id));
    }

    return (
        <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
            {children}
        </CompareContext.Provider>
    );


}

function useCompare() {
    const context = useContext(CompareContext);
    
    return context;
}

export { CompareProvider, useCompare };