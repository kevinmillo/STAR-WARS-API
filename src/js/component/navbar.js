import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
            style={{ width: "70px", padding: "4px" }}
          />
        </span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FAVORITOS
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favoritos.lenght > 0 ? (
              store.favoritos.map((favorito,i) => {
                return (
                  <li key={i}>
                    <a className="dropdown-item" href="#">
                      {favorito}
                    </a>
                  </li>
                );
              })
            ) : (
              <li>
                <a className="dropdown-item" href="#">
                  No hay favoritos.
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
