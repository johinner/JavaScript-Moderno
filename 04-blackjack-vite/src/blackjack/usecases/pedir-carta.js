/**
 * Esta funcion permite tomar una carta
 * @param {Array} arrayDeCartas
 * @returns {Array} Retorna el ultimo elemento del arreglo
 */

export const pedirCarta = (arrayDeCartas) => {

    if (arrayDeCartas.length === 0) throw "No hay cartas en el deck"
    return arrayDeCartas.pop()

    /* let aleatorio = Math.floor(Math.random() * (deck.length +1)); 
    deck.splice(aleatorio, 1);*/
}