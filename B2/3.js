function sueldos() 
{
    let sueldo=0, mas=0, menos=0, total=0;

    for (contador=0; contador<5; contador++) 
    {
        sueldo=parseInt(prompt("Ingrese 5 sueldos de 5 empleados."));
        
        if (sueldo<=300) 
        {
            menos++;
        } 
        else 
        {
            mas++;
        }
        total=total+sueldo;
    }return ("Empleados que cobran 300 o menos: "+menos+"<br>Empleados que cobran más de 300: "+mas+"<br>Sueldos a pagar por la empresa: "+total);
}

let resultado=sueldos()
document.write(resultado);