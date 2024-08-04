import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			// VARIABLES GENERALES
			personajes: [], // Esto es FLUX
			planetas: [],
			vehiculos: [],

			// VARIABLES ESPECÍFICAS:
			personaje: [],
			planeta: [],
			vehiculo: [],

		},
		actions: {

			// FUNCIONES GENERALES

			getPersonajes: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/people/")
					if (response.data){
						console.log(response.data)
						console.log(response.data.results)
						setStore({personajes: response.data.results})
					}
				}catch(error){
					console.log("Ha habido un error con los personajes" + error)	
				}
			},

			
			getPlanetas: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/planets/")
					if (response.data){
						console.log(response.data)
						setStore({planetas: response.data.results})

					}
				}catch(error){
					console.log("Ha habido un error con los personajes" + error)	
				}
			},

			getVehiculos: async () => {
				try {
					const response = await axios.get("https://www.swapi.tech/api/vehicles/")
					if (response.data){
						console.log(response.data)
						setStore({vehiculos: response.data.results})

					}
				}catch(error){
					console.log("Ha habido un error con los personajes" + error)	
				}
			},


			// FUNCIONES ESPECÍFICAS:
			getPersonaje: async (uid) => {
				try {
					const response = await axios.get(`https://www.swapi.tech/api/people/${uid}`)
					if (response.data){
						console.log(response.data)
						setStore({personaje: response.data.result.properties})
					}
				}catch(error){	
					console.log("Ha habido un error con los personajes" + error)	
				}
			}


		}
	};
};

export default getState;
