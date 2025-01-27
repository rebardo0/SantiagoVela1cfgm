document.getElementById("abreWindows").addEventListener("click", function() 
{
    let ancho = window.screen.width;
    let alto = window.screen.height / 2;
    window.open("", "", `width=${ancho},height=${alto}`);
});