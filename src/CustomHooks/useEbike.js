import { useEffect, useState } from "react";

function useEbike() {
     const [compareList, setCompareList] = useState([]);
     const [wishList, setWishList] = useState([]);
     
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

    function addToWishList(bike) {
        if (wishList.some(item => item.id === bike.id)) {
            return;
        }
        setWishList((prev) => [...prev, bike]);
        console.log("Aggiunta alla lista dei desideri:", bike);
    }

    function removeFromWishList(bike) {
        setWishList((prev) => prev.filter(item => item.id !== bike.id));
    }

    return{addToCompare, removeFromCompare, compareList, addToWishList, removeFromWishList, wishList};

}

export default useEbike;