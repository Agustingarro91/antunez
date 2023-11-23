import { NavLink, useNavigate } from "react-router-dom";
import style from "./Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  const [styles, setStyles] = useState();

  const handleButton = (event) => {
    setMenu(!menu);
  };

  return (
    <section className={`${style.container} `}>
      <div className={style.image} onClick={() => navigate("/")}></div>
      <div className={style.menuBtn} value="boton" onClick={handleButton}>
        {menu ? (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <title>interface, application, menu, settings, user</title>
            <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" />
            <path d="M17,7.25H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
            <path d="M17,11H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
            <path d="M17,14.75H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
          </svg>
        )}
      </div>
      <nav className={`${style.menu} ${!menu && `${style.menuActive}`}`}>
        <NavLink to="/" onClick={handleButton} className={style.linknav}>
          {" "}
          Inicio
        </NavLink>

        <NavLink to="/contact" onClick={handleButton} className={style.linknav}>
          Contacto
        </NavLink>

        <NavLink to="/about" onClick={handleButton} className={style.linknav}>
          Nosotros
        </NavLink>

        <NavLink
          to="/partners"
          onClick={handleButton}
          className={style.linknav}
        >
          Abogados
        </NavLink>

        <NavLink to="/jobs" onClick={handleButton} className={style.linknav}>
          Trabajos
        </NavLink>
      </nav>
    </section>
  );
};

export default Nav;
