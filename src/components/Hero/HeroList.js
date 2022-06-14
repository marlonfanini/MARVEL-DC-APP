import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import {Herocard }  from './Herocard'

export const HeroList = ({publisher}) => {

  const heroes = useMemo(()=> getHeroByPublisher(publisher), [publisher]);
    

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn animate__faster">
        {
            heroes.map(heroes => (
                <Herocard key={heroes.id} {...heroes} /> 
            ))
        } 

    </div>
  )
}
