 
 import { useCompare } from "../contexts/CompareContext";

export default function CompareList() {
  const { compareList, removeFromCompare } = useCompare();

  return (
    <div className="compare-list-container">
      <h1>Confronta le tue bici</h1>
      {compareList.length === 0 ? (
        <p>Nessuna bici da confrontare.</p>
      ) : (
        <ul className="compare-list">
          {compareList.map((bike) => (
            <li key={bike.id} className="compare-item">
              <img src={bike.image} alt={bike.title} />
              <h2>{bike.title}</h2>
              <p>{bike.description}</p>
              <button onClick={() => removeFromCompare(bike)}>Rimuovi</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}