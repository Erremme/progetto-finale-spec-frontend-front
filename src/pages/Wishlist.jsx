import WishListCard from "../Components/WishListCard";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Wishlist() {
    const { wishList , removeFromWishList} = useGlobalContext();
    return (
        <div className="wishlist-page ">
            <h1>La tua lista dei desideri</h1>
            { wishList.length === 0 ? (
                <p>Nessuna bici nella tua lista dei desideri.</p> )  : (
                <div className="wishlist-container">
                    <ul className="wishlist">
                        {wishList.map((bike) => (
                            <li key={bike.id} className="wishlist-item">
                                <WishListCard
                                    image={bike.image}
                                    category={bike.category}
                                    price={bike.price}
                                    title={bike.title}
                                    onClick={() => removeFromWishList(bike)}

                                    />
                               
                                
                            </li>
                        ))}
                    </ul>

                   
            
        </div>
        )  }  

                </div>        
          

    );
}