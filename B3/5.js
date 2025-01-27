const resultado = document.getElementById("resultado");

function mostrarprecioPizza(pizza) 
{
    switch (pizza) 
    {
        case "jamon":
            resultado.value = "10€"
            break;
        case "Mexicana":
            resultado.value = "25€"
            break;
        case "Barbacoa":
            resultado.value = "5€"
            break;
        case "muzzarella":
            resultado.value = "20€"
            break;
        case "morrones":
            resultado.value = "30€"
            break;
    }
}