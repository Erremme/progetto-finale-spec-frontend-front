import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header-container">
            <div className="banner"></div>
            <header>
                <div className="logo">
                    <img src="img/BoolBike.svg" alt="logo" />
                </div>
                
                <div className="header-actions">
                    <div className="wishList">
                        <Link to="/wishlist"> 
                             <i className="fa-solid fa-heart"></i>  
                        </Link>
                       
                    </div>
                    <div className="account">
                         <i className="fa-solid fa-user"></i>   
                    </div>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i> 
                    </div>


                </div>
            </header>

        </div>
    )
}