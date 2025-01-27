let palabraIntroducida = prompt("Introduzca una palabra de varios caracteres");

function mostrarprimeraMitad(palabra) 
{
    let primeras = palabra.substring(0, palabra.length / 2);
    return primeras;
}

function mostrarultimoCaracter(palabra) 
{
    let ultima = palabra.charAt(palabra.length - 1);
    return ultima;
}

function mostrarformaInversa(palabra) 
{
    let inverso = "";
    for (let acumulador = 0; acumulador < palabra.length; acumulador++)
    {
        let pedirInverso = palabra.charAt(palabra.length - 1 - acumulador);
        inverso += pedirInverso;
    }
    return inverso;
}

function mostrarcaracterconGuion(palabra)
{
    let resultadoGuion = "";
    for (let acumulador = 0; acumulador < palabra.length; acumulador++) 
    {
        let guion = palabra.charAt(acumulador);
        let caracter = (acumulador + 1 !== palabra.length) ? "-" : "";
        resultadoGuion += guion + caracter;
    }
    return resultadoGuion;
}

function mostrarcantidadVocales(palabra) 
{
    let contarVocales = 0;
    palabra = palabra.toLowerCase();
    for (let acumulador = 0; acumulador < palabra.length; acumulador++) 
    {
        let i = palabra.charAt(acumulador);
        if ("aeiou".includes(i)) 
        {
        contarVocales++;
        }
    }
    return contarVocales;
}

function mostrarResultado(palabra) 
{
    let primeras = mostrarprimeraMitad(palabra);
    let ultimo = mostrarultimoCaracter(palabra);
    let inverso = mostrarformaInversa(palabra);
    let guion = mostrarcaracterconGuion(palabra);
    let vocales = mostrarcantidadVocales(palabra);
    return "La primera mitad de la palabra es: " + primeras +
           "<br>" + "El último carácter de la palabra es: " + ultimo +
           "<br>" + "La palabra a la inversa es: " + inverso +
           "<br>" + "La palabra separada por guiones es: " + guion +
           "<br>" + "El número de vocales de la palabra es: " + vocales;
}

let resultado = mostrarResultado(palabraIntroducida);
document.write(resultado);