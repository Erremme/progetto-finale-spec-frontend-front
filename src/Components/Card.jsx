
import { NavLink } from "react-router-dom"
export default function Card({image , category , firstParagraf , secondParagraf  ,listTitle , firstItem , secondItem ,thirdItem }){
  return(
    <div className="card-container">
       <div className="image-card-container">
            <img src={image} alt={image} />
       </div>

       <div>
        <h2>{category}</h2>
        <p>{firstParagraf}</p>
        <p>{secondParagraf}</p>
        <strong>{listTitle}</strong>
        <ul>
            <li>{firstItem}</li>
            <li>{secondItem}</li>
            <li>{thirdItem}</li>
        </ul>

         <NavLink to={"/"}/>
       </div>

    </div>
  )
}