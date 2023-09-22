let numeroVerdadero
let num
let botonEnviar
let contadorIntentos = 0

botonEnviar = document.getElementById("botonEnviar").disabled = true

function comenzar() {
   numeroVerdadero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
   // alert(numeroVerdadero)
   botonEnviar = document.getElementById("botonEnviar").disabled = false
   contadorIntentos = 0
   document.getElementById("parrafoIntentos").innerHTML = "Cantidad de intentos: " + contadorIntentos
   num = document.getElementById("numeroIngresado").value = " "
}

function comprobarNumero() {
   for (i = 1; i <= 5; i++) {
      num = document.getElementById("numeroIngresado").value
      let p = document.getElementById("parrafoIntentos")
      contadorIntentos++
      if (num == numeroVerdadero) {
         alert("¡¡ADIVINASTE EL NÚMERO!!")
         botonEnviar = document.getElementById("botonEnviar").disabled = true
         p.innerHTML = "Cantidad de intentos: " + contadorIntentos
         break
      }
      else if (contadorIntentos == 4) {
         alert("GAME OVER")
         botonEnviar = document.getElementById("botonEnviar").disabled = true
         p.innerHTML = "Cantidad de intentos: " + contadorIntentos
         break
      }
      else if (num < numeroVerdadero) {
         alert("No es el número, el número secreto es mas alto")
         break
      }
      else {
         alert("No es el número, el número secreto es mas bajo")
         break
      }
   }
}




