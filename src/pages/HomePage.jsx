import { Link } from "react-router-dom";
import Carosell from "../Components/Carosell"
import { useEffect, useState , useCallback} from "react"

  

export default function HomePage() {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState({ field: "title", order: "asc" });

  function debounce (callback , delay){
        let timer;
        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
     }

   const debounceSearchQuery = useCallback( debounce(setSearch, 500),[])

  useEffect(() => {
    fetch("http://localhost:3001/ebikes")
      .then(res => res.json())
      .then(data => setRecord(data))
      .catch(error => console.error(error))
  }, []);

  // Ricava le categorie uniche
  const categories = record.reduce((acc, bike) => {
    if (!acc.includes(bike.category)) { 
      acc.push(bike.category);
    }
    return acc;
  }, []);

  // Filtra e ordina i record
  const filteredRecords = record
    .filter(bike =>
      bike.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || bike.category === category)
    )
    .sort((a, b) => {
      const fieldA = a[sort.field].toLowerCase();
      const fieldB = b[sort.field].toLowerCase();
      if (fieldA < fieldB) return sort.order === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sort.order === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div>
      <Carosell />
      <div className="container">
        <div className="ebike-list-header">
          <h1>Le nostre E-Bike</h1>
          <p>Non solo bici dotate di motore: la scelta comprende anche telai di forme diverse e motori potenti.</p>
        </div>

        
          {/* FILTRI */}
          <div className="ebike-filters" >
            <input
              type="text"
              placeholder="Cerca per titolo..."
              onChange={(e) => debounceSearchQuery(e.target.value) }
            />
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Tutte le categorie</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={sort.field + "-" + sort.order}
              onChange={e => {
                const [field, order] = e.target.value.split("-");
                setSort({ field, order });
              }}
            >
              <option value="title-asc">Titolo A-Z</option>
              <option value="title-desc">Titolo Z-A</option>
              <option value="category-asc">Categoria A-Z</option>
              <option value="category-desc">Categoria Z-A</option>
            </select>
          </div>

          {/* CARD LIST */}
          <div className="ebike-records">
            {filteredRecords.length === 0 && (
              <p style={{ color: "#888", textAlign: "center" }}>Nessuna bici trovata.</p>
            )}
            {filteredRecords.map(bike => (
              <Link to={`ebikes/${bike.id}`} >
              <div key={bike.id} className="ebike-card">
                <h2>{bike.title.toUpperCase()}</h2>
                <span>{bike.category}</span>
              </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="section-category">
           <img src="/img/guida-all-acquisto.jpg" alt="/img/guida-all-acquisto.jpg" />
           <div className="banner-foto">
            <h2>GUIDA ALL' ACQUISTO</h2>
            <p>Perché la scelta non diventi un grattacapo, ti spieghiamo i vantaggi di tutti i componenti e a che cosa dovresti prestare attenzione durante l’acquisto.</p>
    
             <Link  to="/" className="btn-link ">SCOPRI DI PIU'</Link>
          
           </div>
        </div>
      
    </div>
  );
}