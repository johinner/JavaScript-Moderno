  /**
   * Esta funcion determina el valor de cada carta
   * @param {*array} Resive la carta Seleccionada
   * @returns {number} Retorna el valor de la carta
   */

 export const valorCarta = (cartaSeleccionada) => {
    const valor = cartaSeleccionada.substring(0, cartaSeleccionada.length - 1)
    return isNaN(valor) ? (valor === "A") ? 11 : 10 : valor * 1;
}

