import React from 'react'
import { HeroList } from './Hero/HeroList'
import './Hero/Styles.css'

export const Marvel = () => {
  return (
    <div>
      <ul>
      <li  data-text="Marvelscreen">
      <a href="#" data-text="Marvelscreen">Marvelscreen</a>
      </li>
      </ul>
      
    <hr/>
    <HeroList publisher='Marvel Comics' />
    
    </div>
  )
}

