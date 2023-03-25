import _ from 'underscore';

// Esta funcion crea una nueva baraja
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
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