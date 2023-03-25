import {crearDeck} from "./usecases/crear-deck"
import pedirCarta from "./usecases/pedir-carta"
import valorCarta from "./usecases/valor-carta"

const miModulo = (() => {
  "use strict"

  let deck = []
  const tipos = ["C", "D", "H", "S"],
      especiales = ["J", "K", "Q", "A"];

  let puntosJugadores = [];

  //Referencia del html
  const d = document,
      $btnPedir = d.querySelector("#btnPedir"),
      $btnDetener = d.querySelector("#btnDetener"),
      $btnNuevo = d.querySelector('#btnNuevo'),

      $puntosTotales = d.querySelectorAll('small'),
      $divCartasJugadores = d.querySelectorAll('.divCartas');

  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales)
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
          $puntosTotales[i].textContent = 0;
          $divCartasJugadores[i].innerHTML = ""
      }

      $btnPedir.disabled = false
      $btnDetener.disabled = false
  }

  //Turno: 0 = primer jugador y el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);

      $puntosTotales[turno].textContent = puntosJugadores[turno];
      return puntosJugadores[turno];
  }

  const crearCarta = (carta, turno) => {
      const imgCarta = d.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`
      imgCarta.classList.add("carta")

      $divCartasJugadores[turno].append(imgCarta)
  }

  const determinarGanadaor = () => {
      const [puntosMinimos, puntosComputadora] = puntosJugadores;

      setTimeout(() => {
          const mensaje = (puntosComputadora === puntosMinimos) ? "Empate" : (puntosMinimos > 21) ? "Computadora Gana" : (puntosComputadora > 21) ? "Jugador Ganaste" : "Computadora Gana";
          alert(mensaje)
      }, 500)
  }

  //Funcion Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
      let puntosComputadora = 0;
      do {
          const carta = pedirCarta(deck)
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);


          crearCarta(carta, puntosJugadores.length - 1)

          // mientras los puntos de la computadora sea menor a los puntos minimos el siclo se ejecutara
      } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

      determinarGanadaor();
  }

  //Eventos
  $btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck)
      const puntosJugador = acumularPuntos(carta, 0)

      crearCarta(carta, 0)

      if (puntosJugador > 21) {
          $btnPedir.disabled = true
          $btnDetener.disabled = true
          turnoComputadora(puntosJugador)
      } else if (puntosJugador === 21) {
          $btnPedir.disabled = true
          $btnDetener.disabled = true
          turnoComputadora(puntosJugador)
      }
  })

  $btnDetener.addEventListener('click', () => {
      $btnPedir.disabled = true
      $btnDetener.disabled = true
      turnoComputadora(puntosJugadores[0])
  })

  $btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  })

  return {
      nuevoJuego: inicializarJuego
  }
})()


