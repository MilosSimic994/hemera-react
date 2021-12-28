import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <article className="introduction ">
          <h1>Hemera</h1>
          <p>
            MEsto gde mozete naci sve popularne brendove koji nude sirok
            asortiman kozmetickih preparata
          </p>
          <button><Link to="/contact">Kontaktiraj nas</Link></button>
        </article>
      </div>

      <svg
        className="svg-header-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          fill="#FFF"
          fillOpacity="1"
          d="M0,96L60,90.7C120,85,240,75,360,101.3C480,128,600,192,720,213.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="svg-header-blue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#3064a7"
          fillOpacity="1"
          d="M0,128L60,144C120,160,240,192,360,224C480,256,600,288,720,288C840,288,960,256,1080,202.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;