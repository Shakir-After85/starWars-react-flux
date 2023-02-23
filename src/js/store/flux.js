const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://swapi.dev/api/";
	return {
		store: {
			
			baseImgUrl: "https://starwars-visualguide.com/assets/img/",
			characters: [], 
			favorites: [],
			singleCharacter: {},
			planets: [],
			singlePlanet: {},
			starships: [],
			singleStarship: {}
		},
		actions: {
			getCharacters: () => {
				fetch(baseUrl + 'people/')
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({characters:data.results})})
					.catch(error => console.log(error));
			},
			addFavorites: (favorite) => {
				const newFavorites = getStore().favorites
				newFavorites.push(favorite)
				setStore({favorites: newFavorites})
			},
			getSingleCharacter: (characterUrl) => {
				fetch(characterUrl)
				.then(resp => resp.json())
				.then(data => setStore({singleCharacter: data.result}))
			},
			deleteSingleCharacter: (favoriteIndex) => {
				setStore({
					favorites: getStore().favorites.filter(
						(favorite, index) => index !== favoriteIndex
					),
				});

				
			},
			
			getPlanets: () => {
				fetch(baseUrl + 'planets/')
					.then(resp => resp.json())
					.then(data => {
						console.log(data.results)
						setStore({planets:data.results})})
					.catch(error => console.log(error));
			},
			// addFavorites: (favorite) => {
			// 	const newFavorites = getStore().favorites
			// 	newFavorites.push(favorite)
			// 	setStore({favorites: newFavorites})
			// },
			getSinglePlanet: (planetUrl) => {
				fetch(planetUrl)
				.then(resp => resp.json())
				.then(data => setStore({singlePlanet: data.result}))
			},
			deleteSinglePlanet: (favoriteIndex) => {
				setStore({
					favorites: getStore().favorites.filter(
						(favorite, index) => index !== favoriteIndex
					),
				});

				
			},

			getStarships: () => {
				fetch(baseUrl + 'starships/')
					.then(resp => resp.json())
					.then(data => {
						console.log(data.results)
						setStore({starships:data.results})})
					.catch(error => console.log(error));
			},
			// addFavorites: (favorite) => {
			// 	const newFavorites = getStore().favorites
			// 	newFavorites.push(favorite)
			// 	setStore({favorites: newFavorites})
			// },
			getSingleStarship: (starshipUrl) => {
				fetch(starshipUrl)
				.then(resp => resp.json())
				.then(data => setStore({singleStarship: data.result}))
			},
			deleteSingleStarship: (favoriteIndex) => {
				setStore({
					favorites: getStore().favorites.filter(
						(favorite, index) => index !== favoriteIndex
					),
				});

				
			}
		}
	};
};

export default getState;
