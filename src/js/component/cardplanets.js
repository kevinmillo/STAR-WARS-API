import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardplanets = (props) => {
  const { store, actions } = useContext(Context);
  const [corazon, setCorazon] = useState(false);
  useEffect(() => {
    let resultado = store.favoritos.find((favorito) => {
      return favorito == props.name;
    });
    setCorazon(resultado);
  }, [store.favoritos]);
  const hacerclick = ()=>{
    if (corazon) {actions.eliminarFavoritos(props.name)      
    } else {actions.agregarFavoritos(props.name)      
    }
  }
  return (
    <div className="cardv m-2 border" style={{ width: "18rem" }}>
      <img
        src={images[props.name]}
        className="card-img-top"
        alt="foto planets"
        height="150px"
        object-fit="cover"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">diameter: {props.diameter} </p>
        <p className="card-text">climate: {props.climate} </p>
        <p className="card-text">population: {props.population} </p>
        <div className="d-flex justify-content-between">
          <a href={`/detailsplanets/${props.id}`} className="btn btn-primary">
            Go somewhere
          </a>
          <i className="far fa-heart" style={{
								fontWeight: corazon ? "bold" : "",
								color: corazon ? "rgb(185, 19, 19)" : "Black"
							}} onClick={() => hacerclick()}></i>
        </div>
      </div>
    </div>
  );
};
