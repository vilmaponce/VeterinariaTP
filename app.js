

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const paso1 = document.querySelector("#paso-1");
const paso2 = document.querySelector("#paso-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;
  let mensaje = document.querySelector("#mensaje").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${nombre}<br>Email: ${email}<br>Telefono: ${telefono}<br>Mensaje: ${mensaje}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  paso1.style.display = "none";
  paso2.style.display = "block";


   // mostrar mensaje de alerta
   alert("¡GRACIAS POR VISITAR NUESTRA PAGINA Y CONTACTARNOS");
});


