alert('Bienvenido a la pagina de estilos')
const imagencuatro= document.getElementById('uno');
const imagenuno= document.getElementById('imagen_dos');
const imagendos= document.getElementById('imagen_cinco');
const texto=document.getElementById('maquina')
const textouno=document.getElementById('maquinauno')
const cargarImagen=(entradas, vista)=>{

   entradas.forEach((entrada)=>{
    if(entrada.isIntersecting){
        entrada.target.classList.add('visible')
    }
   })
}

const vista= new IntersectionObserver(cargarImagen, {
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

vista.observe(imagencuatro)
vista.observe(imagendos)
vista.observe(imagenuno)
vista.observe(texto)
vista.observe(textouno)

document.addEventListener('DOMContentLoaded', ()=>{
    const elementos=document.querySelectorAll('.carousel')
    M.Carousel.init(elementos,{
        duration:400
    })
})