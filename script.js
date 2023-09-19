let numeroVerdadero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
alert(numeroVerdadero)
let contadorIntentos = 0


function comprobarNumero() {
   let num = document.getElementById("numeroIngresado").value
   contadorIntentos++
   if (parseInt(num) == numeroVerdadero) {
      alert("¡¡ADIVINASTE EL NÚMERO!! Cantidad de intentos: " +  contadorIntentos)
   }
   else {
      alert("No es el número :( Cantidad de intentos: " + contadorIntentos)
   }
}
