function calcularelPrecio() 
{
    let pizza = document.getElementById("pizza");
    let cantidad = document.getElementById("cantidad");
    let resultado = document.getElementById("resultado");
    
    switch (pizza.value) 
    {
        case "queso":
            resultado.value = cantidad.value * 4 + "€";
            break;
        case "jamon":
            resultado.value = cantidad.value * 6 + "€";
            break;
        case "especial":
            resultado.value = cantidad.value * 10 + "€";
            break;
    }
}