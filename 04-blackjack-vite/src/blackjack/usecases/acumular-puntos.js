  import { valorCarta } from "./index";
  import { $puntosTotales } from "./contantes";
  
  //Turno: 0 = primer jugador y el ultimo sera la computadora
 export const acumularPuntos = (carta, turno, puntosJugadores) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

    $puntosTotales[turno].textContent = puntosJugadores[turno];
    return puntosJugadores[turno]
}