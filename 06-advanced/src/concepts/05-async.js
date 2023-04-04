/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const asyncComponent = (element) => {

    const id1 = "5d86371f233f2425f16916"
    findHero(id1)
        .then(({name}) => element.innerHTML = name)
        .catch(error => element.innerHTML = error)
    
}

/**
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        throw `id nuemro ${id} no encontrado`
    } 

    return hero;
}