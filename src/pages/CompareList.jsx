 
 import { useGlobalContext } from "../contexts/GlobalContext";

export default function CompareList() {
  // Destrutturo compareList e removeFromCompare dal contesto globale
  const { compareList, removeFromCompare } = useGlobalContext();

  return (
    <div  className="compare-list-page">
        <h1>Confronta le tue bici</h1>
        {compareList.length === 0 ? (
          <p>Nessuna bici da confrontare.</p>
        ): (
      <div className="compare-list-container">
      
        <ul className="compare-list">
          {compareList.map((bike) => (
            <li key={bike.id} className="compare-item">
              <img src={bike.image} alt={bike.title} />
              <h2>{bike.title.toUpperCase()}</h2>
              <p><strong>Cambio:</strong>  {bike.gear}</p>
              <p><strong>Motore :</strong> {bike.engine}</p>
              <p><strong>Peso :</strong> {bike.weight} Kg</p>
              <p><strong>Capacità di peso :</strong> {bike.weight_capacity} Kg</p>
              <p><strong>Prezzo :</strong> {bike.price},00€ </p>
              <p><strong>Forma del telaio :</strong></p>
              <div className="compare-sizes" >
                  {bike.frame_variants && 
                     bike.frame_variants.map((variant,index) => {
                        return (
                          <div key={index}>
                            
                            <img src={variant.frame_image} alt={variant.name} />
                            <h3>{variant.name}</h3>
                            
                          </div>
                        );
                     })           
              }
              </div>

              <button onClick={() => removeFromCompare(bike)}>Rimuovi</button>
            </li>
          ))}
        </ul>
      
    </div>
    )}
  </div>
  );
}