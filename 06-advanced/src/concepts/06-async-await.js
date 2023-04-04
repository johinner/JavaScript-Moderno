/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const asyncAwaitComponent = async (element) => {

    const id1 = "5d86371f97c29d021e1f6d",
        id2 = "5d86371f9f80b591f499df32"

        try {
            const hero1 = await findHero(id1),
            hero2 = await findHero(id2);
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`
            
        } catch (error) {
        element.innerHTML = `${error}`
        }



}

/**
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero)
        throw `id nuemro ${id} no encontrado`


    return hero;
}