function censoProvisional() 
{
let dni, edad, sexo, contador=0, nhombre=0, nmujer=0, nedad=0;
do 
{
    dni=parseInt(prompt("Introduzca su DNI sin la letra y ponga 0 para acabar el recuento."));
    if (dni!=0) 
    {
        edad=parseInt(prompt("Introduzca su edad."));
        sexo=parseInt(prompt("Introduzca su sexo (0 para masculino y 1 para femenino)."));
        contador++;
        if (sexo==0) 
        {
            nhombre++
        } 
        else 
        {
            if (sexo==1) 
            {
                nmujer++;
            } 
            else 
            {
                do 
                {
                alert("Solo masculino y femenino (0 para masculino y 1 para femenino).");
                sexo=parseInt(prompt("Introduzca su sexo (0 para masculino y 1 para femenino)."));
                
                if (sexo==0)
                {
                    nhombre++;
                }
                else
                {
                    if(sexo==1)
                    {
                        nmujer++;
                    }
                }
                } while (sexo<0 || sexo>=2)
            }
        }
        if (edad>=16 && edad<=65) 
        {
            nedad++;
        }
    }
}while (dni!=0)
return ("Total de personas: "+contador+".<br>Total de hombres: "+nhombre+".<br>Total de mujeres: "+nmujer+".<br>Total de hombres con edad entre 16 y 65 años: "+nedad+".");
}

let resultado=censoProvisional();
document.write(resultado);