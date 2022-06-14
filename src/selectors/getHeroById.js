import { heroes } from "../Data/Heroes"

export const getHeroByid = function( id  = " ") {
    console.log('Hero called')
    return heroes.find(hero => hero.id === id)
}