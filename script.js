import ClasificadorDePalabras from './ClasificadorPalabras.js';

const clasificador = new ClasificadorDePalabras();
const inputPalabra = document.getElementById('inputPalabra');
const btnAgregarPalabra = document.getElementById('btnAgregarPalabra');
const divListasPalabras = document.getElementById('divListasPalabras');

btnAgregarPalabra.addEventListener('click', () => 
{
    const palabra = inputPalabra.value.trim();
    if (palabra) 
    {
        clasificador.clasificarPalabra(palabra);
        inputPalabra.value = '';
        inputPalabra.focus();
        actualizarInterfaz();
    }
});

function actualizarInterfaz() 
{
    divListasPalabras.innerHTML = '';

    const listasDePalabras = clasificador.obtenerListasDePalabras();

    for (const letra in listasDePalabras) 
    {
        const lista = document.createElement('div');
        lista.className = 'lista';
        lista.innerHTML = `<strong>Lista ${letra}:</strong> ${listasDePalabras[letra].join(', ')}`;
        divListasPalabras.appendChild(lista);
    }
}
