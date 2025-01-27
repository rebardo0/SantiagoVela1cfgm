let palabra, Cuenta=0, intentos=0;

do 
{while (Cuenta==0) 
    {
        if (intentos==5) 
        {
            document.write("Excediste el número de intentos permitidos.");
            Cuenta=1;
        }
        else 
        {
            palabra=prompt("Introduce una palabra para traducir entre Gato, Perro, Mesa o Casa:");
            intentos++;
            Cuenta=fin;
            let resultado=traductor(palabra);
            document.write(resultado);
        }
    }
}while (Cuenta==0)

function fin() {return "1"}
function traductor(word) 

{switch (word) 
    {
        case ("Gato"):
            return "Cat";
            fin;
            break;
        case ("Perro"):
            return "Dog";
            fin;
            break;
        case ("Mesa"):
            return "Table";
            fin;
            break;
        case ("Casa"):
            return "House";
            fin;
            break;
        default:
            alert("Tiene que ser una palabra a traducir entre Gato, Perro, lápiz y Casa.");
            return " ";
    }
}