function Deportes()
{
    const deportes=document.getElementsByName("deporte");
    let mensaje="Los deportes que practicas son: ";

    for (let i=0;i<deportes.length;i++) 
    {
        if (deportes[i].checked) 
        {
            mensaje+=deportes[i].value +", ";
        }
    }
    alert(mensaje);
}