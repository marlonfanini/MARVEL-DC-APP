import { heroes } from "../Data/Heroes"

export const getHeroesByName  = (name = '') => {
     
console.log('Se llamo eta vaina')

    if (name === '') {
        return [];
    }

    name = name.toLowerCase(); 

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))

  

}