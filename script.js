let numeroVerdadero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
alert(numeroVerdadero)

function comprobarNumero() {
   let num = document.getElementById("numeroIngresado").value
   if (parseInt(num) == numeroVerdadero) {
      alert("¡¡ADIVINASTE EL NÚMERO!!")
   }
   else {
      alert("No es el número :(")
   }

   let contadorIntentos = 0
   do {
      contadorIntentos ++
   } while (parseInt(num) != numeroVerdadero);
} 