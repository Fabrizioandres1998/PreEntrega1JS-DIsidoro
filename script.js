let numeroVerdadero = Math.floor(Math.random() * (10 - 1 + 1) + 1)
alert(numeroVerdadero)
let contadorIntentos = 0

function comprobarNumero() {
   let num = document.getElementById("numeroIngresado").value
   let p = document.getElementById("parrafoIntentos")
   contadorIntentos++

   if (parseInt(num) == numeroVerdadero) {
      alert("¡¡ADIVINASTE EL NÚMERO!!")
      p.innerHTML = "Cantidad de intentos: " + contadorIntentos;
   }
   else {
      alert("No es el número :( ")
      p.innerHTML = "Cantidad de intentos: " + contadorIntentos;
   }
}
