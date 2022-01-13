const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			favoritos: [],
			detailspeople: {}
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async() => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then(response => response.json())
					.then(async result => 
						{
							let personajes = result.results;
							let listaPersonajes = [];
							for (let i=0;i<personajes.length;i++)
							{
								let personaje = {
									uid: personajes[i].uid,
									name: personajes[i].name,
									hair_color:personajes[i].hair_color,
									eye_color: personajes[i].eye_color,
								}
								var requestOptions = {
									method: 'GET',
									redirect: 'follow'
								};
								
								
								await fetch(personajes[i].url, requestOptions)
									.then(response => response.json())
									.then(result => {
										personaje.hair_color = result.result.properties.hair_color;
										personaje.eye_color = result.result.properties.eye_color;
										personaje.gender = result.result.properties.gender;
										console.log("Armando el personaje",personaje)
										listaPersonajes.push(personaje)
										// setStore({ people: [...people,personaje] })
									})
									.catch(error => console.log('error', error));
								}
								console.log("LISTA",listaPersonajes)
								setStore({people:listaPersonajes});
							})
					.catch(error => console.log('error', error));
			},
			loadplanets: async() => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/planets", requestOptions)
					.then(response => response.json())
					.then(async result => 
						{
							let planets = result.results;
							let listaPlanets = [];
							for (let i=0;i<planets.length;i++)
							{
								let planets = {
									uid: planets[i].uid,
									name: personajes[i].name,
									hair_color:"",
									eye_color: ""
								}
								var requestOptions = {
									method: 'GET',
									redirect: 'follow'
								};
								
								
								await fetch(personajes[i].url, requestOptions)
									.then(response => response.json())
									.then(result => {
										personaje.hair_color = result.result.properties.hair_color;
										personaje.eye_color = result.result.properties.eye_color;
										personaje.gender = result.result.properties.gender;
										console.log("Armando el personaje",personaje)
										listaPersonajes.push(personaje)
										// setStore({ people: [...people,personaje] })
									})
									.catch(error => console.log('error', error));
								}
								console.log("LISTA",listaPersonajes)
								setStore({people:listaPersonajes});
							})
					.catch(error => console.log('error', error));
			},
			agregarFavoritos: (name)=>{
				const store = getStore()
				setStore({favoritos:[...store.favoritos, name]})
			},
			eliminarFavoritos: (name)=>{
				const store = getStore()
				const favoritoseliminados = store.favoritos.filter((favorito)=>{
					return name!==favorito
				})
				setStore({favoritos:favoritoseliminados})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			detailspeople: (id)=>{
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				
				
				fetch("https://www.swapi.tech/api/people/"+id, requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						setStore({ detailspeople: result.result.properties })
					})
					.catch(error => console.log('error', error));
				}
			},
		}
	};

export default getState;
