import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../data.json'


const Header = () => {
  const [counter, setCounter] = useState(0)
  const {images} = data
 
  const [img, setImg] = useState(images[counter])

  useEffect(() => {
    if(counter > images.length -1) {
      setCounter(0)
    }
  }, [counter])

 useEffect(() => {
 let slider = setInterval(() => {
   setCounter(counter + 1)
  setImg(images[counter])
  }, 3000);
  return ()=> clearInterval(slider)
 }, [counter])
 
   console.log(images);
  console.log(counter);
  return (
    <header className="header">
      <div className="header__wrapper">
        <article className="introduction ">
          <h1>Hemera</h1>
          <p>
            MEsto gde mozete naci sve popularne brendove koji nude sirok
            asortiman kozmetickih preparata
          </p>
          <button><Link to="/contact">Kontaktiraj nas</Link></button>
        </article>
        <article className="slider">
          <img src={img.img} alt={img.alt} />
        </article>
      </div>

      <svg
        className="svg-header"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
      >
        <path
          fill="#3064a7"
          fillOpacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,74.7C672,64,768,96,864,122.7C960,149,1056,171,1152,154.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
        fill="#FFF"
        fillOpacity="1"
        d="M0,96L60,90.7C120,85,240,75,360,101.3C480,128,600,192,720,213.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> 
    </header>
  );
};

export default Header;
