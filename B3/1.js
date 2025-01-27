function pidaelNumero(numero) 
{
    for (let acumulador = 0; acumulador < numero.length; acumulador++) 
        {
        numero[acumulador] = parseInt(prompt("Introduzca un numero por teclado"));
        }
    return numero;
}

function sumadelNumero(numero) 
{
    let numeroTotal = 0;
    for (let acumulador = 0; acumulador < numero.length; acumulador++) 
        {
        numeroTotal += numero[acumulador];
        }
    return numeroTotal;
}

function acumuladomayordelNumero(numero) 
{
    let numeroTotalMayor = 0;
    for (let acumulador = 0; acumulador < numero.length; acumulador++) 
        {
        if (numero[acumulador] > 36) 
        {
        numeroTotalMayor += numero[acumulador];
        }
        }
    return numeroTotalMayor;
}

function mayorNumeros(numero) 
{
    let contarMayor = 0;
    for (let acumulador = 0; acumulador < numero.length; acumulador++) 
        {
        if (numero[acumulador] > 50) 
        {
        contarMayor++;
        }
        }
    return contarMayor;
}

function verResultado(numero) 
{
    numero = pidaelNumero(numero);
    let suma = sumadelNumero(numero);
    let acumulado = acumuladomayordelNumero(numero);
    let mayores = mayorNumeros(numero);
    return "El numero acumulado de los elementos del vector es:" + suma +
           "<br>" + "El numero acumulado de los elementos del vector mayores a 36 son:" + acumulado +
           "<br>" + "El numero de Numeros que son mayores a 50 son:" + mayores;
}


let numero = new Array(8);
let resultado = verResultado(numero);
document.write(resultado);
