import { pedirCarta , determinarGanadaor, acumularPuntos, crearCarta} from "./index";


//Funcion Turno de la computadora
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck)
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);


        crearCarta(carta, puntosJugadores.length - 1)

        // mientras los puntos de la computadora sea menor a los puntos minimos el siclo se ejecutara
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanadaor(puntosJugadores);
}