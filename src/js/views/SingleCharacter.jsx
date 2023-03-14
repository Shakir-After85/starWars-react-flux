import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SingleCharacter = () => {
  const { store, actions } = useContext(Context);

  const params = useParams();
  let character = store.characters.filter(
    (item, index) => index == params.index - 1
  )[0];
  console.log(character);
  return (
    <>
      {store.singleCharacter ? (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={store.baseImgUrl + "/characters/" + params.index + ".jpg"}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>

                <p className="card-text">{character.hair_color}</p>
              </div>
            </div>
          </div>

          <div class="row">
          <div class="col border-end-2 border border-danger">
              
              <h6>Skin Color</h6>
              <p>{character.skin_color}</p>
            </div>

            <div class="col border-end-2 border border-danger">
              
              <h6>Gender</h6>
              <p>{character.gender}</p>
            </div>

            <div class="col border-end-2 border border-danger">
              
              <h6>Height</h6>
              <p>{character.height}</p>
            </div>
            <div class="col border-end-2 border border-danger">
             
              <h6>Mass</h6> 
              <p>{character.mass}</p>

            </div>
            <div class="col border-end-2 border border-danger">
              
              <h6>Birth Year </h6> 
              <p>{character.birth_year}</p>

            </div>
          </div>
        </div>
      ) : (
        <Link to="/">
          <p>Click here to go back to the first page</p>
        </Link>
      )}
    </>
  );
};
