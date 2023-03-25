import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from "./usecases/index";
import { tipos, especiales, $puntosTotales,
     $divCartasJugadores, $btnDetener,$btnPedir, $btnNuevo} from "./usecases/contantes";
      
const miModulo = (() => {
 // "use strict"
  let deck = []
  let puntosJugadores = [];

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

  //Eventos
  $btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck)
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores)

      crearCarta(carta, 0)

      if (puntosJugador > 21) {
          $btnPedir.disabled = true
          $btnDetener.disabled = true
          turnoComputadora(puntosJugador, deck, puntosJugadores)
      } else if (puntosJugador === 21) {
          $btnPedir.disabled = true
          $btnDetener.disabled = true
          turnoComputadora(puntosJugador, deck, puntosJugadores)
      }
  })

  $btnDetener.addEventListener('click', () => {
      $btnPedir.disabled = true
      $btnDetener.disabled = true
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores)
  })

  $btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  })

  return {
      nuevoJuego: inicializarJuego
  }
})()


