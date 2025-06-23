import { Link } from "react-router-dom";
import Carosell from "../Components/Carosell"
import { useEffect, useState , useCallback , useMemo} from "react"

  

export default function HomePage() {
  // Stati per gestire i record, la ricerca, la categoria e l'ordinamento
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");
  const [sortOrder, setSortOrder] = useState(1);

  // Funzione di debounce per la ricerca
  function debounce (callback , delay){
        let timer;
        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
     }

  // Utilizzo di useCallback per memorizzare la funzione di debounce
   const debounceSearchQuery = useCallback( debounce(setSearch, 500),[])

   //Faccio il fetch dei dati delle ebike
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
    
  // Gestione dell'ordinamento
  const handleOrder =(opt) => {
    if(sortBy === opt) {
        setSortOrder((prev ) => prev * -1);
    }else {
        setSortBy(opt);
        setSortOrder(1);
    }

}

  // Filtraggio e ordinamento dei record utilizzando useMemo per ottimizzare le prestazioni
  const filteredRecords = useMemo(() => {
  return[...record]
    .filter(bike =>
      bike.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || bike.category === category)
    )
    .sort((a, b) => {
        let result = 0
        if(sortBy === "title-asc"){
            result = a.title.localeCompare(b.title);
        }
        if(sortBy === "title-desc"){
            result = b.title.localeCompare(a.title);
        }
        if(sortBy === "category-asc"){
            result = a.category.localeCompare(b.category);
        }
        if(sortBy === "category-desc"){
            result = b.category.localeCompare(a.category);
        }
  
      return result * sortOrder;
    });
}, [record, search, category, sortBy, sortOrder]);

  return (
    <div>
      <Carosell />
      <div className="container">
        <div className="ebike-list-header">
          <h1>Le nostre E-Bike</h1>
          <p>Non solo bici dotate di motore: la scelta comprende anche telai di forme diverse e motori potenti.</p>
        </div>

        
          
          <div className="ebike-filters" >
            <input
              type="text"
              placeholder="Cerca per titolo..."
              onChange={(e) => debounceSearchQuery(e.target.value) }
            />
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Tutte le categorie</option>
              {categories.map((cat , index )=> {
                return( <option key={index} value={cat}>{cat}</option>)
                 
              }
                
              )}
            </select>
            <select
              value={sortBy}
              onChange={e => 
                handleOrder(e.target.value)
              }
            >
              <option value="title-asc">Titolo A-Z</option>
              <option value="title-desc">Titolo Z-A</option>
              <option value="category-asc">Categoria A-Z</option>
              <option value="category-desc">Categoria Z-A</option>
            </select>
          </div>

         
          <div className="ebike-records">
            {filteredRecords.length === 0 && (
              <p style={{ color: "#888", textAlign: "center" }}>Nessuna bici trovata.</p>
            )}
            {filteredRecords.map(bike => (
              
              <div key={bike.id} className="ebike-card">
                <Link to={`ebikes/${bike.id}`} >
                <h2>{bike.title.toUpperCase()}</h2>
                <span>{bike.category}</span>
                </Link>
              </div>
              
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