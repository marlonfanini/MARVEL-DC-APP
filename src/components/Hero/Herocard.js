import React from 'react'
import {Link, link} from 'react-router-dom'
import './Styles.css'

export const Herocard = ({
    id, 
    superhero, 
    publisher, 
    alter_ego,
    first_appearance, 
    characters
}) => {

  return (
    <div className="col">
    <div className ="card">


        <div className ="row no-gutters">
            <div className ="col-4">
            <img key={id} src = {`./assets/${id}.jpg`} className="animate__animated animate__fadeIn card-img-top" alt={superhero}></img>
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
            <div className="card-body animate__animated animate__fadeIn">

            <h5 className="card-title animate__animated animate__fadeIn">{superhero}</h5>
            <p className="card-text animate__animated animate__fadeIn">{alter_ego}</p>
            
            {
                (alter_ego !== characters )
                && <p className="text-muted">{characters}</p>
            }

            <p className="card-text animate__animated animate__fadeIn">
                <small className="text-muted">{first_appearance}</small>
            </p>
            
            <Link to={`/Hero/${id}`}>
                More...
            </Link>

        </div>


    </div>
    </div>
    </div>
    </div>
  )
}
