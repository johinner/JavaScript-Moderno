const miModulo = (() => {
    "use strict"

    let deck = [];
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
        deck = crearDeck()
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            $puntosTotales[i].textContent = 0;
            $divCartasJugadores[i].innerHTML = ""
        }

        $btnPedir.disabled = false
        $btnDetener.disabled = false
    }

    // Esta funcion crea una nueva baraja
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo)
            }
        }
        return _.shuffle(deck);
    }

    //Esta funcion permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0) throw "No hay cartas en el deck"
        return deck.pop()

        /* let aleatorio = Math.floor(Math.random() * (deck.length +1)); 
        deck.splice(aleatorio, 1);*/
    }

    //Esta funcion determina el valor de cada carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1)
        return isNaN(valor) ? (valor === "A") ? 11 : 10 : valor * 1;
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
            const carta = pedirCarta()
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);


            crearCarta(carta, puntosJugadores.length - 1)

            // mientras los puntos de la computadora sea menor a los puntos minimos el siclo se ejecutara
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanadaor();
    }

    //Eventos
    $btnPedir.addEventListener('click', () => {
        const carta = pedirCarta()
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

