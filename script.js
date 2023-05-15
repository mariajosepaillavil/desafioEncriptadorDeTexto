//a - ai;
//e - enter;
//i - imes;
//o - ober;
//u - ufat;

/*
Orden lógico si reemplazara en el mismo orden de las vocales: a --> e --> i --> o --> u

Quedando de la siguiente manera si ponemos el ejemplo de la palabra amarillo:

amarillo --> aimairillo
aimairillo --> aimesmaimesrimesllo
aimesmaimesrimesllo --> aimesmaimesrimesllober

aimesmaimesrimesllober =! aimairimesllober */


//secuencia optima de las vocales a reemplazar, con la finalidad de no impactar el flujo.


//e --> enter;
//o --> ober;
//i --> imes;
//a --> ai;
//u --> ufat;


//Comienzo de las funciones que permitan darle dinamismo al desafío.

function encrypt() {
    var text=document.getElementById("inputText").value.toLowerCase();

    //la letra "i" sirve parq que aplique la condición tanto a mayúsculas, como a minúsculas.
    //la letra "g" es para que afecte a toda la línea u oración.
    // la letra "m" es para que afecte a multiples líneas o párrafos.
    var engravedText= text.replace(/e/igm,"enter");
    //se trabaja sobre la variable de engravedText porque es quien contiene el nuevo texto, recién reemplazado.
    var engravedText= engravedText.replace(/o/igm,"ober"); 
    var engravedText= engravedText.replace(/i/igm,"imes");
    var engravedText= engravedText.replace(/a/igm,"ai");
    var engravedText= engravedText.replace(/u/igm,"ufat");

    //Para que cuando presione el botón desaparezca la imagen.
    document.getElementById("imgRight").style.display="none";
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").innerHTML=engravedText;
    document.getElementById("btn-copy").style.display="show";
    document.getElementById("btn-copy").style.display="inherit";

}
   
function decrypt() {
    
    var text=document.getElementById("inputText").value.toLowerCase();

    //la letra "i" sirve parq que aplique la condición tanto a mayúsculas, como a minúsculas.
    //la letra "g" es para que afecte a toda la línea u oración.
    // la letra "m" es para que afecte a multiples líneas o párrafos.
    var engravedText= text.replace(/enter/igm,"e");
    //se trabaja sobre la variable de engravedText porque es quien contiene el nuevo texto, recién reemplazado.
    var engravedText= engravedText.replace(/ober/igm,"o"); 
    var engravedText= engravedText.replace(/imes/igm,"i");
    var engravedText= engravedText.replace(/ai/igm,"a");
    var engravedText= engravedText.replace(/ufat/igm,"u");

    //Para que cuando presione el botón desaparezca la imagen.
    document.getElementById("imgRight").style.display="none";
    document.getElementById("text1").style.display="none";
    document.getElementById("text2").innerHTML= engravedText;
    document.getElementById("btn-copy").style.display="show";
    document.getElementById("btn-copy").style.display="inherit";

}


function copy (){
    var content=document.querySelector("#text2")
    content.select();
    document.execCommand("copy");
    alert("¡Se ha copiado el texto ingresado!");
}

//******* Pasos para crear efecto matrix *******

//Creo un canvas, le doy un tamaño y un identificador:

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

//Para escoger la paleta de colores del efecto matrix:
ctx.fillStyle="#000";
ctx.fillRect(0,0,w,h);

//Indicamos que comience a utilizar el efecto desde arriba:
const cols = Math.floor(w/20)+1;
const position_y = Array(cols).fill(0);

//Creamos la función matrix como tal:

function matrix() {

    //Para el background negro:
    ctx.fillStyle= "#0001";
    ctx.fillRect(0,0,w,h);
    //Para la letra color fucsia:
    ctx.fillStyle="#ff00ff";
    ctx.font="15pt monospace";
  
    const text = String.fromCharCode(Math.random()*128);

    //Para determinar la posición de las letras:
    position_y.forEach((y,index) => {
        const x = index * 20;
        //Aquí se pondrá el texto:
        ctx.fillText(text, x, y);
        //Si la posición y supera 100,que vuelva arriba: 

        if (y > 100 + Math.random() * 10000){
            position_y[index] = 0;
        }

        //En caso contrario,incrementar la cantidad de la columna en 20 unidades.
        else {
            position_y[index] = y + 20;
        }
    });
}

setInterval(matrix,50);
