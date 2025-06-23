
export default function WishListCard({image , category, price, title , onClick}){
  return(
    <div className="wishlist-card-container">
       <div className="image-wishlist-card-container">
            <img src={image} alt={image} />
       </div>

       <div className="wishlist-card-content">
        <h2>{title.toUpperCase()}</h2>
        <h4>Categoria : {category}</h4>
        <p>Da : {price},00€</p>
        <button onClick={onClick}>Rimuovi</button>
       </div>

    </div>
  )
}