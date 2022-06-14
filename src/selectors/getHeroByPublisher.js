import { heroes } from "../Data/Heroes"


export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher}Invalid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}