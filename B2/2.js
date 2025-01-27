function numerosMultiplos() 
{
    let numero=8

    for (numero>=0; numero<=500; numero=numero+8) 
    {
        document.write(numero)
        if (numero<496) 
        {
            document.write(" - ")
        } 
        else 
        {
            document.write("<br><br>")
        }
    }
    return "Los multiplos llegaron hasta no superar 500."
}
resultado=numerosMultiplos()
document.write(resultado)