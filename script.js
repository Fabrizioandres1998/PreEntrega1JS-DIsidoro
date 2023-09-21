// let numeroVerdadero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
// alert(numeroVerdadero)
// let contadorIntentos = 0

// function comprobarNumero() {
//    let num = document.getElementById("numeroIngresado").value
//    let p = document.getElementById("parrafoIntentos")
//    contadorIntentos++

//    if (parseInt(num) == numeroVerdadero) {
//       alert("¡¡ADIVINASTE EL NÚMERO!!")
//       p.innerHTML = "Cantidad de intentos: " + contadorIntentos;
//    }
//    else {
//       alert("No es el número :( ")
//       p.innerHTML = "Cantidad de intentos: " + contadorIntentos;
//    }
// }
let numeroVerdadero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
function comenzar(){
   alert(numeroVerdadero)
}

function comprobarNumero() {
   for (i = 1; i <= 5; i++) {
      let num = document.getElementById("numeroIngresado").value
      if (num == numeroVerdadero) {
         alert("¡¡ADIVINASTE EL NÚMERO!!")
         break;
      }
      else if (i == 5) {
         alert("GAME OVER")
         break;
      }
      else {
         alert("No es el número :( ")
         break;
      }
   }
}




