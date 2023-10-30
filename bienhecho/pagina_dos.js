alert('Bienvenidos a la pagina de historia');
const imagencuatro= document.getElementById('uno');
const imagenuno= document.getElementById('imagen_dos');
const imagendos= document.getElementById('imagen_cinco');
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

document.querySelectorAll('.pagina_dos_cajaonce img').forEach(image=>{
    image.onclick=()=>{
        document.querySelector('.popug-imgae').style.display="block"
        document.querySelector('.popug-imgae img').src=image.getAttribute('src')
    }
})

document.querySelector('.popug-imgae span').onclick=()=>{
    document.querySelector('.popug-imgae').style.display="none"
}

document.querySelectorAll('.pagina_dos_cajadoce img').forEach(image=>{
    image.onclick=()=>{
        document.querySelector('.popug-imgae').style.display="block"
        document.querySelector('.popug-imgae img').src=image.getAttribute('src')
    }
})

document.querySelector('.popug-imgae span').onclick=()=>{
    document.querySelector('.popug-imgae').style.display="none"
}
