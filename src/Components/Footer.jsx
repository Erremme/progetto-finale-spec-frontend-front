import { NavLink } from "react-router-dom"
export default function(){
    return(
        <div className="footer-container">
            <footer>
                <div className="logo">
                    <img src="img/BoolBike.svg" alt="logo" />
                </div>

                 <div className="footer-actions">
                    <div className="imprint">
                        <NavLink to={"/"}>Impronta</NavLink>
                    </div>
                    <div className="privacy">
                        <NavLink to={"/"}>Privacy</NavLink>
                        
                    </div>
                    <div className="values">
                        <NavLink to={"/"}>Valori</NavLink>
                        
                    </div>


                </div>
            </footer>
        </div>
    )
}