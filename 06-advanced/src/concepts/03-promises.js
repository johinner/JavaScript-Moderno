/**
 *
 * @param {HTMLDivElement} element
 */

import { heroes } from "../data/heroes";

export const promiseComponet = (element) => {
    const renderError = (error) => {
        element.innerHTML = `<h2>ERRROR</h2>
        <h3>${error}</h3>`
    }

    const renderHero = (hero) => {
        if (!hero.name) {
            element.innerHTML = `<h3>${hero}</h3>`;
            return;
        }
        element.innerHTML = hero.name;
    };

    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `<h3>${hero1.name}</h3>
                         <h3>${hero2.name}</h3>`;
    };

    //! Forma Recomendada =>ojo las promesas no depende de los resultado de las otras

    const id1 = "5d86371fd55e2e2a30fe1ccb1",
        id2 = "5d86371fd55e2e2a30fe1cc3";

    Promise.all([
        findHero(id1),
        findHero(id2), 
    ])
        .then(([hero1, hero2]) => {
            renderTwoHero(hero1, hero2)
        })
        .catch(renderError);

    //! forma 1
    /* let hero1
    findHero(id1)
      //.then(datoRetornado => renderHero(datoRetornado)) Mandar el dato como referencia
      .then(hero => {
          hero1 = hero;
          return findHero(id2);
      }).then(hero2 => {
          renderTwoHero(hero1, hero2)
      })
      //.catch(error => renderHero(error))
      .catch(renderHero); */
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find((hero) => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found.`);
    });
};
