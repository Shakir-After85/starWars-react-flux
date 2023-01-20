const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: "https://www.swapi.tech/api/",
			baseImgUrl: "https://starwars-visualguide.com/assets/img/",
			characters: [], 
			favorites: [],
			singleCharacter: {}
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseUrl + 'people')
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
			}

		}
	};
};

export default getState;
