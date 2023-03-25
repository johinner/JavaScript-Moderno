import { $divCartasJugadores, d } from "./contantes";

export const crearCarta = (carta, turno) => {
    const imgCarta = d.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add("carta")

    $divCartasJugadores[turno].append(imgCarta)
}