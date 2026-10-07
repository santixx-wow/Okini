function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

const botonReservar = document.querySelector('#boton-reservar');
const contadorTazas = document.querySelector('#contador-tazas');


function puedeReservar(tazas) {
  return tazas > 0;
}

botonReservar.addEventListener('click', function() {
  const tazasActuales = Number(contadorTazas.textContent);
  
  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
  } else {
    botonReservar.textContent = 'Sin cupos';
    botonReservar.disabled = true;
  }
});

