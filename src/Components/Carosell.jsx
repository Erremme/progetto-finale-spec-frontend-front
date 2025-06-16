import { useState } from "react"

const images = [
  "img/loady.webp",
  "img/loady-2.webp",
  "img/valori.webp"

];

const slides = [
    {
        image : "img/loady.webp",
      text : ["WINNING OF ", "DESIGN & INNOVATION AWARD 2025"],
      button : "DISPONIBILE ORA"
    },

     {
       image: "img/loady-2.webp",
      text : ["SCOPRI LA",  "COLLEZIONE 2025"],
      button : "GUARDA ORA"
    },

     {
      image :"img/valori.webp",
      text : ["I NOSTRI VALORI"],
      button : "MAGGIORI INFORMAZIONI"
    },

]

export default function Carosell(){
    const [currentSlide , setCurrentSlide] = useState(0)
    const [currentBanner , setCurrentBanner] = useState(0)
    const prevSlide= (() =>
         setCurrentSlide((prev) =>  prev === 0 ? slides.length - 1 : prev -1) )

    const nextSlide = () => {
        setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1) 
    }
    return(

        <div className="carosell-container">
           <div className="carosell-img-container">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].text.join(" ")} />
                <div className="carosell-overlay">
                <h1>
                    {slides[currentSlide].text.map((line , i ) => {
                        return(
                            
                        <span key={i}>
                            {line}
                            {i !== slides[currentSlide].text.length -1 && <br />}
                           
                        </span>
                        )
                    })}
                </h1>
                <button>{slides[currentSlide].button}</button>
                </div>
           </div> 
            <button onClick={prevSlide}  className="carosell-arrow carosell-arrow-left">&lt;</button>
            <button onClick={nextSlide} className="carosell-arrow carosell-arrow-right">&gt;</button>
        </div>
    )
}