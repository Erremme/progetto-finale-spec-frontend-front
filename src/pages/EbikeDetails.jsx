import { Link, useParams } from "react-router-dom"
import { useState , useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function EbikeDetails() {
  const { id } = useParams();
  const [bikeDetails, setBikeDetails] = useState([]);

  const { addToCompare, addToWishList  } = useGlobalContext();

  // Qui puoi fare una fetch per i dettagli della bici usando l'id
    useEffect(() => {
    fetch(`http://localhost:3001/ebikes/${id}`) 
    .then(res => res.json())
    .then(data => setBikeDetails(data.ebike)) 

    .catch(error => console.error("Errore nel recupero dei dettagli della bici:", error));}

    , [id]);
  
   

  
  return (
    <div>
        
    <div  className="ebike-details-container">
       <div className="ebike-header">
        <h1>{bikeDetails?.title?.toUpperCase()}</h1>
        <p>{bikeDetails?.description }</p>
        <p className="price">da: {bikeDetails?.price},00 €</p>
        <button onClick={() => addToWishList(bikeDetails)}>Aggiungi ai preferiti</button>
        </div>  
        <div className="ebike-img">
            <img src={bikeDetails.image} alt={bikeDetails.image} />
        </div>

       
    </div>
     <div className="bike-characteristics ">
            <div className="bike-characteristics-header">
                <h2>CARATTERISTICHE DELLA BICI</h2>
            </div>

            <div className="frame_variants">
               <div className="caracteristics-header">
                <div className="caracteristics-header-img-container">
                    <img src="https://www.velo-de-ville.com/themes/custom/vdv2022/sources/img/icons/frame.svg" alt="forme" />
                </div>
                <h2>Forme del telaio</h2>
               </div>

                <div className="frame-variants-content">
                    <ul className="frame-list">
                        {bikeDetails?.frame_variants?.map((variant, index) => (
                            <li className="frame-items" key={index}>
                                <img src={variant.frame_image} alt={variant.name} />
                                <h5>{variant.name}</h5>
                                <ul className="sizes-list" >
                                {variant.sizes?.map((size, sizeIndex) => {

                                    return (
                                        
                                            <li key={sizeIndex}>{size}</li>
                                       

                                    );
                                })}
                                 </ul>
                                </li>
                        ))}
                    </ul>
                    <div  className="frame-variants-content-buttons">
                           <button onClick={() => addToCompare(bikeDetails)}> Compara la bici</button>
                            <Link className="style-link link" to="/compare" >Vai alla pagina di comparazione  </Link>
                       </div>
                    </div>
 
            </div>

            <div className="other-carcteristics">
                 <div className="gear-caracteristics ">
                        <div className="caracteristics-header ">
                            <div className="caracteristics-content-img-container">
                                <img src="https://www.velo-de-ville.com/themes/custom/vdv2022/sources/img/icons/gear.svg" alt="cambi" />
                            </div>
                            <div className="caracteristics-title">
                                 <h2>Cambio</h2>
                                 <p>{bikeDetails.gear}</p>
                            </div>
                            
                        </div>
                        
                </div>

                <div className="engine-caracteristics ">
                        <div className="caracteristics-header ">
                            <div className="caracteristics-content-img-container">
                                <img src="https://www.velo-de-ville.com/themes/custom/vdv2022/sources/img/icons/engine.svg" alt="Motore" />
                            </div>
                            <div className="caracteristics-title">
                                 <h2>Motore</h2>
                                 <p>{bikeDetails.engine}</p>
                            </div>
                        </div>
                       
                </div>

                <div className="weight-caracteristics ">
                        <div className="caracteristics-header ">
                            <div className="caracteristics-content-img-container">
                                <img src="https://www.velo-de-ville.com/themes/custom/vdv2022/sources/img/icons/bike.svg" alt="cambi" />
                            </div>
                            <div className="caracteristics-title">
                                 <h2>Peso</h2>
                                 <p>  Kg: {bikeDetails.weight} (Attrezzatura di base)</p>
                            </div>
                            
                        </div>
                        
                </div>

                 <div className="weight-capacity-caracteristics ">
                        <div className="caracteristics-header ">
                            <div className="caracteristics-content-img-container">
                                <img src="https://www.velo-de-ville.com/themes/custom/vdv2022/sources/img/icons/weight.svg" alt="cambi" />
                            </div>
                           
                            <div className="caracteristics-title">
                                 <h2>Capacità</h2>
                                 <p> Kg: {bikeDetails.weight_capacity} </p>
                            </div>
                            
                        </div>
                         

                </div>

                
                 

                

        </div>
    </div>

    </div>
    
  );
}