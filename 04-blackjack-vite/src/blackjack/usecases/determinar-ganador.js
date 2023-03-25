

export const determinarGanadaor = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        const mensaje = (puntosComputadora === puntosMinimos) ? "Empate" : (puntosMinimos > 21) ? "Computadora Gana" : (puntosComputadora > 21) ? "Jugador Ganaste" : "Computadora Gana";
        alert(mensaje)
    }, 500)
}