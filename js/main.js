

alert("Ten precaución, Homero puede morir")

//Variable let porque necesito que varie

console.log ("¿Podrá Homero sobrevivir a sus vicios?");

let vidaHomero = 50;

/* Constante para la variable VICIO */

const VICIO = 15;

let nuevoDia = 0

//Función para calcular la cantidad de vicio

function calcularVicio () {
    return Math.ceil(Math.random()*VICIO)
}

//Utilizo un ciclo y un condicional

while (vidaHomero>0 && vidaHomero<100) {

    nuevoDia +=1

    console.log("-------- Día " +nuevoDia + " --------")

    let cerveza = calcularVicio()
    console.log ("Redujo su vida por una cerveza: " + cerveza)

    let dona = calcularVicio()
    console.log ("Redujo su vida por una dona: " + dona)

    let ejercicio = Math.ceil(Math.random()*30);
    console.log ("Aumento su vida por hacer ejercicio: " + ejercicio)
        
        if (cerveza+dona == ejercicio); {
            vidaHomero = vidaHomero - cerveza - dona + ejercicio
            console.log("La vida de Homero es de " + vidaHomero)
    }
}

/* Dependiendo el puntaje que haya obtenido, determina si queda internado, ha muerto o se ha recuperado.
Para esto utilizo un condicional*/

console.log("-----------------------------------------")

if (vidaHomero <= 0 && vidaHomero >= -10){
    console.log ("Homero permanece internado :/")
    document.write('Homero está internado :/ <div class="homero"><img src="../img/homeroencoma.webp"></div>')
    }

    else if (vidaHomero <= -11){
        console.log("Homero ha muerto :(")
        document.write('Homero ha muerto :(<div class="homero"><img src="../img/homeromuerto.webp"></div>')
    }   
    else {
        console.log ("Homero se ha recuperado gracias a tí :)")
        document.write('Homero ha sobrevivido gracias a Tí :) <div class="homero"><img src="../img/Homero.webp"></div>')
    }


