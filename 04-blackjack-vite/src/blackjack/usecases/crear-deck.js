import _ from 'underscore';

/**
 * Esta funcion crea una nueva baraja
 * @param {array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {array<String>} tiposEspeciales Ejemplo: ["J", "K", "Q", "A"]
 * @returns {array} Retorna un arreglo de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || !tiposEspeciales ||tiposDeCarta === 0) throw new Error('Tipos de carta y tipos Especioales son obligatorios')
    
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }
    return _.shuffle(deck);
}