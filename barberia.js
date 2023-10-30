alert('Bienvenido a la pagina de tipos de corte')
const nombre = document.getElementById("name")
const numero = document.getElementById("numero")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    if(nombre.nodeValue.length<2){
    }
})

form.addEventListener("submit", e=>{
    if(numero.nodeValue.length<14){
    }
})

form.addEventListener("submit", e=>{
    if(correo.nodeValue.length<30){
    }
})

form.addEventListener("submit", e=>{
    if(mensaje.nodeValue.length<100){
    }
})




function validar() {
    console.log("Se envio la informacion correctamente")
    alert ("Se envio correctamente la informacion")
}

function enviar() {
    console.log("Se envio la informacion correctamente")
    alert ("Se envio correctamente la informacion")
}

train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 5000) clearInterval(timer);

    }, 20);
  }