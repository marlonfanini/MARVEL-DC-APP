import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useForm } from '../../hooks/setForms'
import {useNavigate,  useLocation} from "react-router-dom";
import { getHeroesByName } from '../../selectors/getHeroesByname'
import { Herocard } from '../Hero/Herocard'

export const SearchScreen = () => {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const {q = ' '}= queryString.parse(location.search);
  

  const [values, handleInputChange] = useForm({
    searchtext: q,
  })

  const {searchtext} = values

  function handleSearch(e) {
    e.preventDefault()
 
    navigate(`?q=${searchtext}`)
  }

  const heroesFilteres = useMemo(() => getHeroesByName(q), [q])  
  


  return (
    <>
    <h1> Searches </h1>
    <hr/>

    <div className='row'>


    <div className='col-5'>
        <h4>Search</h4>
        <hr/>

        <form onSubmit={handleSearch}>
          <input 
          type="text" 
          value={searchtext}
          placeholder='Search a hero'
          className='form-control'
          name="searchtext"
          autoComplete='off'
          onChange={handleInputChange}
          />
          <br></br>

          <button type='submit' className='btn btn-outline-primary'>Sarch...</button>
        </form>

    </div>
    
    <div className='col-7'>
      <h4>Results</h4>
      <hr></hr>

      {
        (q === '') ? <div className="alert alert-info">Search</div> 
        : (heroesFilteres.length === 0) 
        && <div className="alert alert-danger">No results with:  {q} </div>
      }


      {
        heroesFilteres.map(heroes => <Herocard key={heroes.id} {...heroes} />  )
      }

    </div>


    </div>
    </>
  )
}
