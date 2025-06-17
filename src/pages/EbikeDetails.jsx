import { useParams } from "react-router-dom"
import { useState , useEffect } from "react";

export default function EbikeDetails() {
  const { id } = useParams();
  const [bikeDetails, setBikeDetails] = useState([]);
  // Qui puoi fare una fetch per i dettagli della bici usando l'id
    useEffect(() => {
    fetch(`http://localhost:3001/ebikes/${id}`) 
    .then(res => res.json())
    .then(data => setBikeDetails(data.ebike)) 

    .catch(error => console.error("Errore nel recupero dei dettagli della bici:", error));}

    , [id]);
  
    console.log(bikeDetails);

  
  return (
    <div>
    <div  className="ebike-details-container">
       <div className="ebike-header">
        <h1>{bikeDetails?.title?.toUpperCase()}</h1>
        <p>{bikeDetails?.description }</p>
        <p className="price">da: {bikeDetails?.price},00 €</p>
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
               <div className="frame-variants-header">
                <div>
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
                       </div>

                       
            </div>
    </div>

    </div>
    
  );
}