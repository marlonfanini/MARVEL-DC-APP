import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroByid } from '../../selectors/getHeroById';


export const Hero = () => {

  const navigate = useNavigate()

  const handelreturn = () => {
    if (publisher === 'DC Comics') {
      navigate('/dc', { 
        replace: true,
      })
    } else {  navigate('/marvel', { 
      replace: true,
    }) }
  }



  const {id} = useParams();
  const hero  = useMemo(() => getHeroByid(id),[id]);



  

  if (!hero) {
    return <Navigate to='/'/>
  }

  const imgPath = `/assets/${hero.id}.jpg`

  const {
    id:dw1, 
    superhero, 
    publisher, 
    alter_ego,
    first_appearance, 
    characters
  } = hero;


  return (
    <div className ="row mt-5 mb-5">
      <div className ="col-4">

      <img className= "animate__animated animate__fadeIn animate__repeat-1 img-thumbnail" src={imgPath} alt={superhero} ></img>

      </div>
    
    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <b>Alter ego:</b> {alter_ego}
        </li>
        <li className="list-group-item">
          <b>Publisher:</b> {publisher}
        </li>
        <li className="list-group-item">
          <b>First appearance:</b> {first_appearance}
        </li>
      
    
      </ul>

    <br/>
    
    <h5>{characters}</h5>


    <button 
      className="btn btn-outline-info"
      onClick={handelreturn}
      >
        Logout
      
      </button>

    </div>
    
    </div>
  )
}
