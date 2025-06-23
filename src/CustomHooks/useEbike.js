import { useEffect, useState } from "react";

function useEbike() {

    //Valore iniziale per la wishList
    const getInitialValue = () => {
        const saved = localStorage.getItem("wishList") || [];
        return saved ? JSON.parse(saved) : [];
    }

    //Stati di wishList e  compareList

    const [compareList, setCompareList] = useState([]);
    const [wishList, setWishList] = useState(getInitialValue);

    //funzione per salvare la wishList in localStorage utilizzando useEffect per monitorare i cambiamenti
    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);


    // Funzione per aggiungere le ebike alla compareList
    function addToCompare(bike) {
        // Controlla se l'oggetto bike è già presente nella compareList 
        if (compareList.some(item => item.id === bike.id)) {
            return
        }
        // Se non è presente, alo aggiungio alla compareList
        setCompareList((prev) => [...prev, bike]);

    }

    // Funzione per rimuovere le ebike dalla compareList
    function removeFromCompare(bike) {
        // Controlla se l'oggetto bike è presente nella compareList e lo rimuovo
        setCompareList((prev) => prev.filter(item => item.id !== bike.id));
    }
    
    // Funzioni per aggiungere ebike  alla wishList
    function addToWishList(bike) {
        // Controlla se l'oggetto bike è già presente nella wishList
        if (wishList.some(item => item.id === bike.id)) {
            return;
        }
        // Se non è presente, lo aggiungo alla wishList
        setWishList((prev) =>
            [...prev, bike]);


    }
     
    // Funzione per rimuovere le ebike dalla wishList
    function removeFromWishList(bike) {
        // Controlla se l'oggetto bike è presente nella wishList e lo rimuovo
        setWishList((prev) => prev.filter(item => item.id !== bike.id));
    }
     
    // Ritorno degli stati e delle funzioni per l'utilizzo nell 'applicazione
    return { addToCompare, removeFromCompare, compareList, addToWishList, removeFromWishList, wishList };

}

export default useEbike;