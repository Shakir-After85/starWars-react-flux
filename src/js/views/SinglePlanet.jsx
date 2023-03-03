import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';


export const SinglePlanet = () => {
    const {store, actions} = useContext(Context)
    console.log(store.SinglePlanet)

    const params =useParams()
    let planet = store.planets.filter((item, index)=> index == params.index -1)[0]
    console.log(planet)
    
    return(
       
       <>
         
            {planet ? 
            <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={store.baseImgUrl + '/planets/' + (params.index) + '.jpg'} 
                    className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>

                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ipsum at eros commodo ullamcorper sit amet ac justo. Integer blandit, erat sollicitudin aliquet auctor, arcu ipsum dapibus eros, vel aliquet erat nibh sit amet dolor. Aenean eu commodo metus. Donec euismod orci ut hendrerit vehicula. Donec libero magna, condimentum eu magna eu, sagittis consectetur justo. Nunc pulvinar odio sed urna suscipit, ut varius sem pharetra. Aliquam nunc nulla, condimentum non arcu ut, fermentum efficitur eros.</p>
                </div>
                </div>
            </div>
            </div>
        :
        <Link to='/'>
            <p>Click here to go back to the first page</p>
        </Link>}
      </>
        
        
    );
};


