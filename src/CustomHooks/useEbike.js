import { useEffect, useState } from "react";

function useEbike() {
      
    const getInitialValue = () =>{
        const saved = localStorage.getItem("wishList") || [];
        return saved ? JSON.parse(saved) : [];
    }
    
     const [compareList, setCompareList] = useState([]);
     const [wishList, setWishList] = useState(getInitialValue);

      useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
     
      function addToCompare(bike){
        

         if (compareList.some(item => item.id === bike.id)) {
            return
            
        }  

        setCompareList((prev) => [...prev, bike]);

    }

    function removeFromCompare(bike) {
        setCompareList((prev) => prev.filter(item => item.id !== bike.id));
    }

    function addToWishList(bike) {
        if (wishList.some(item => item.id === bike.id)) {
            return;
        }
        else{
            
        }
        setWishList((prev) => 
            [...prev, bike] );
        
       
    }

    function removeFromWishList(bike) {
        setWishList((prev) => prev.filter(item => item.id !== bike.id));
    }

    return{addToCompare, removeFromCompare, compareList, addToWishList, removeFromWishList, wishList};

}

export default useEbike;