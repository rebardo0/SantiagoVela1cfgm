function contraseñas(Contraseña1, Contraseña2) 
{          
    if (Contraseña1==Contraseña2)
    {
        return "Las contraseñas son iguales.";
    }

    else
    {
        return "Las contraseñas no son iguales.";
    }
}
clave1=prompt("Introduce una contraseña.");
clave2=prompt("Vuelve a intrducir la contraseña.");

let resultado=contraseñas(clave1, clave2);
document.write(resultado);