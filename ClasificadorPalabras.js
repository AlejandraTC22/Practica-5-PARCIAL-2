export default class ClasificadorDePalabras 
{
    constructor() 
    {
        this.listasDePalabras = {};
    }

    clasificarPalabra(palabra) 
    {
        const primeraLetra = palabra.charAt(0).toUpperCase();

        if (!this.listasDePalabras[primeraLetra]) 
        {
            this.listasDePalabras[primeraLetra] = [];
        }

        this.listasDePalabras[primeraLetra].push(palabra);
    }

    obtenerListasDePalabras() 
    {
        return this.listasDePalabras;
    }
}
