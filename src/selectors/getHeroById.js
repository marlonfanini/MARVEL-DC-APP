import { heroes } from "../Data/Heroes"

export const getHeroByid = function( id  = " ") {
    return heroes.find(hero => hero.id.toLowerCase() === id)
}