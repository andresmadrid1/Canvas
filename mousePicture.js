var color_Button = document.getElementById("line_Color");
var canvasW = document.getElementById("width");
var canvasH = document.getElementById("height");
var boton = document.getElementById("button_Canvas");
var d = document.getElementById("image");
var lienzo = d.getContext("2d");
boton.addEventListener("click",crearCanvas);

function crearCanvas()
{
    d.width = canvasW.value;
    d.height = canvasH.value;
    d.color = "blue";
    var ancho = d.width;
    var alto = d.height;
    var color_Linea = d.color;
    console.log(d.width);
    console.log(d.height);
    console.log(color_Linea);
    dibujarLinea(color_Linea,0,0,ancho,0); 
    dibujarLinea(color_Linea,0,0,0,alto); 
    dibujarLinea(color_Linea,0,alto,ancho,alto);
    dibujarLinea(color_Linea,ancho,0,ancho,alto);
    //inicio();

}

    var estado 
    var x 
    var y 
    document.getElementById('image').addEventListener('mousedown',getMousePosition);
    document.getElementById('image').addEventListener('mousemove',dibujarMouse);
    document.getElementById('image').addEventListener('mouseup',getMousePositionFinal);


function dibujarMouse(event)
{
    if (estado == 1) 
    {
        d.color =  color_Button.value;
        var colorLinea = d.color;
        var coor2 = "X coordinada " + x + " Y coordinada " + y; 
        console.log(coor2);
        dibujarLinea(colorLinea,x,y,event.layerX,event.layerY);
    }
    else
    {
        x = event.layerX;
        y = event.layerY;
    }

}

function getMousePosition(event)
{
    var rect = d.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    var coor = "X coordinada " + x + " Y coordinada " + y; 
    console.log(coor);
    console.log('Se presiona mouse');
    estado = 1;
}

function getMousePositionFinal(event)
{
    var rect = d.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    var coor = "X coordinada " + x + " Y coordinada " + y; 
    console.log(coor);
    console.log('Se deja de presionar mouse');
    estado = 0;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
