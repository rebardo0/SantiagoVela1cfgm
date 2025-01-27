function onFocus(contraseña)
{
    if(contraseña.value.length<7 || contraseña.value.length>20)
    {
        alert("la clave debe tener entre 7 a 20 caracteres");
        control.focus();    
    }
}