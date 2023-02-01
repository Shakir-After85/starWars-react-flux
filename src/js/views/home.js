import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useHistory} from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const history = useHistory()
	return(
		<> 
		<h1>Characters</h1>

		<div className="card-group">
	     {store.characters.map((character) => {
			return (
				<div className="card m-3" key={character.uid} style={{"width": "40rem"}}> 
		  			<img src={store.baseImgUrl + 'characters/' + character.uid + '.jpg'} className="card-img-top" alt="..."/>
		  			<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<div className="card-text">
							<p>
							Gender: {character.gender}
							<br/>
							Eye Color: {character.eye_color}
							<br/>
							Hair Color: {character.hair_color}
							</p>
						</div>
					</div>

					<div className="d-flex justify-content-between"> 
						
						
							<button className="btn btn-primary" onClick={() => {
								actions.getSingleCharacter(character.url)
								console.log(character.url)
								history.push('/singleCharacter')
							}}> Learn More!</button>
						

							<button className="btn btn-warning" onClick= {()=>
								actions.addFavorites(character)}> 
						
								<i className="far fa-heart"></i> 
							</button>
					
					</div>

				</div>
	
				)
			})}
		</div>
	   </>	
		
	)}
