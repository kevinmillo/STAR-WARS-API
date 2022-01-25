import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardvehicles = (props) => {
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
        alt="foto vehicles"
        height="150px"
        object-fit="cover"
      />
      "model": "Digger Crawler",
	"manufacturer": "Corellia Mining Corporation",
	"cost_in_credits": "150000",
	"length": "36.8 ",
	"max_atmosphering_speed": "30",
	"crew": "46",
	"passengers": "30",
	"cargo_capacity": "50000",
	"consumables": "2 months",
	"vehicle_class": "wheeled",
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">model: {props.model} </p>
        <p className="card-text">cost_in_credits: {props.cost_in_credits} </p>
        <p className="card-text">passengers: {props.passengers} </p>
        <p className="card-text">vehicle_class: {props.vehicle_class} </p>
        <div className="d-flex justify-content-between">
          <a href={`/detailsvehicles/${props.id}`} className="btn btn-primary">
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