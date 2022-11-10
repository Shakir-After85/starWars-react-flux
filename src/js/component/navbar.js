import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext (Context) 
	const history = useHistory();
	console.log(store.singleCharacter)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			
			<div className="ml-auto">
				<div className="dropdown">
  					<button 
						className="btn btn-secondary dropdown-toggle" 
						type="button" id="dropdownMenuButton1" 
						data-bs-toggle="dropdown" 
						aria-expanded="false">
    					Favorite
  					</button>
  					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((favorite, index) => {
							return (
								<li key={index} className="d-flex justify-content-between">
									
									<p className="dropdown-item"
									onClick={() => {
										actions.getSingleCharacter(favorite.url);
										history.push("/singleCharacter")
									}}>
										{favorite.name}
									</p>
									<button className= "btn btn-danger" 
									onClick={() => actions.deleteSingleCharacter(index)}> <i className="fa-solid fa-trash-can"> </i>
									<i className="fas fa-trash"></i>
									</button>
						
								</li>
							
							)}
						)}
						
  					</ul>
				</div>

				
			</div>
		</nav>
	);
};
