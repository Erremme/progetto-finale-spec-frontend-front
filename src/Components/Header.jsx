export default function Header(){
    return(
        <div className="header-container">
            <div className="banner"></div>
            <header>
                <div className="logo">
                    <img src="img/BoolBike.svg" alt="logo" />
                </div>
                <div className="search-bar">
                    <input 
                    type="text" 
                    placeholder="Cerca un articolo.."
                    />
                </div>
                <div className="header-actions">
                    <div className="whishList">
                       <i className="fa-solid fa-heart"></i>  
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