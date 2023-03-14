import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Characters</h1>

      <div className="card-group row">
        {store.characters.map((character, index) => {
          return (
            <div className="col-3">
              <div className="card m-3" key={index} style={{ width: "18rem" }}>
                <img
                  src={store.baseImgUrl + "characters/" + (index + 1) + ".jpg"}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <div className="card-text">
                    <p>
                      Gender: {character.gender}
                      <br />
                      Eye Color: {character.eye_color}
                      <br />
                      Hair Color: {character.hair_color}
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <Link to={"/character/" + (index + 1)}>
                    <button className="btn btn-primary"> Learn More!</button>
                  </Link>

                  <button
                    className="btn btn-warning"
                    onClick={() => actions.addFavorites(character)}
                  >
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>{" "}
            </div>
          );
        })}
      </div>

      <h1>Planets</h1>
      <div className="card-group row">
        {store.planets.map((planet, index) => {
          return (
            <div className="col-3">
            <div className="card m-3" key={index} style={{ width: "18rem" }}>
              <img
                src={store.baseImgUrl + "planets/" + (index + 1) + ".jpg"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="card-text">
                  <p>
                    Climate: {planet.climate}
                    <br />
                    Gravity: {planet.gravity}
                    <br />
                    Terrain: {planet.terrain}
                    <br />
                    Population: {planet.population}
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <Link to={"/planet/" + (index + 1)}>
                  <button className="btn btn-primary"> Learn More!</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => actions.addFavorites(planet)}
                >
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
            </div>
          );
        })}
      </div>

      <h1>Starships</h1>

      <div className="card-group row">
        {store.starships.map((starship, index) => {
          return (
            <div className="col-3">
            <div className="card m-3" key={index} style={{ width: "18rem" }}>
              <img
                src={store.baseImgUrl + "starships/" + (index + 1) + ".jpg"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <div className="card-text">
                  <p>
                    Name: {starship.name}
                    <br />
                    Model: {starship.model}
                    <br />
                    Manufacturer: {starship.manufacturer}
                    <br />
                    Starship Class: {starship.starship_class}
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <Link to={"/starship/" + index}>
                  <button className="btn btn-primary"> Learn More!</button>
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => actions.addFavorites(starship)}
                >
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
