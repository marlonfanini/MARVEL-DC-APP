import React from 'react'
import { HeroList } from './Hero/HeroList'
import './Hero/Styles.css'

export const Dcscreen = () => {
  return (
    <div>
        <ul>
        <li >
           <a href="#" data-text="Dcscreen">Dcscreen</a>
        </li>
        </ul>
        
        <hr/>
          
        <HeroList publisher='DC Comics' />

    </div>
  )
}
