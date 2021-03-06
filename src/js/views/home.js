import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Cardpeople } from "../component/cardpeople";
import { Cardvehicles } from "../component/cardvehicles";
import { Cardplanets } from "../component/cardplanets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//ACA PUEDO ESCRIBIR CODIGO DE JS
	// let num = 0;
	// console.log("mi numero es ", num)
	return (
	//SIEMPRE VA A SER HTML (Boostrap) + Algo de JS
		<div className="container ">
			<div className="row flex-row flex-nowrap overflow-auto row-cols-1 row-cols-md-3 g-4">
				{store.people.map((item, index) => {
					return (
						<Cardpeople id={item.uid} name={item.name} hair_color={item.hair_color} gender={item.gender} eye_color={item.eye_color}/>
						);
					})}

					</div>
					
			<br />
		</div>
	);
};
