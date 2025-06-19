import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header-container">
            <div className="banner"></div>
            <header>
                <div className="logo">
                    <Link className="style-link" to="/">
                       <img src="/img/BoolBike.svg" alt="logo" />
                    </Link>
                    
                </div>
                
                <div className="header-actions">
                    <div className="wishList">
                        <Link className="style-link" to="/wishlist"> 
                             <i className="fa-solid fa-heart icon"></i>  
                        </Link>
                       
                    </div>
                    <div className="account">
                         <i className="fa-solid fa-user icon"></i>   
                    </div>
                    <div className="cart">
                        <Link className="style-link" to="/compare">
                        <i className="fa-solid fa-code-compare icon"></i>
                        </Link>
                    </div>


                </div>
            </header>

        </div>
    )
}