function ConcatenarTexto() 
{
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;

    if (nombre === "" || apellido === "") 
    {
        alert("Complete ambos campos antes de continuar.");
        return;
    }
    let suma=nombre+" "+apellido;
    document.getElementById("resultado").value=suma;
}