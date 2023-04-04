/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const callbacksComponent = (element) => {

    const id = '5d86371f2343e37870b91ef1 ';
    findHero(id, (error, nombreResivido) => {
        
        console.log(nombreResivido)

        if(error){
            element.innerHTML = error;
            return
        }
        element.innerHTML = nombreResivido.name;
    })

}
/**
 * 
 * @param {String} id 
 * @param {(hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
   const hero = heroes.find(hero => hero.id === id);

   if(!hero) {
    callback(`Hero with id ${id} not found.`);
    return; //undefined
   }

    callback(null,hero)
}