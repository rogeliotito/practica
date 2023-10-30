alert('Bienvenido a la pagina de ingreso')
const btnSignIn = document.getElementById("sing-in"),
btnSignUp=document.getElementById("sing-up"),

formRegister=document.querySelector(".register"),
formLogin=document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
});
const formulario_dos=document.getElementById('formulario_dos');
const inputs_dos = document.querySelectorAll('#formulario_dos input');
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}
const camposDos = {
	usuariodos: false,
	passworddos:false,
	correoa: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
        
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono&&terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
const validadFormularioDos=(e)=>{
switch(e.target.name){
    case "usuaria":
        validarCampe(expresiones.usuario, e.target, 'usuariodos');
		break;
    case 'correoa':
        validarCampe(expresiones.correo, e.target, 'correoa');
    break;
    case 'passworddos':
        validarCampe(expresiones.password, e.target, 'passworddos');
        validarPassword();
    break;
    case 'passwordtres':
        validarCampe(expresiones.password, e.target, 'passwordtres');
        validarPassword();
    break;

    
       
    
     
}
}

const validarPassword=()=>{
    const Passworduno=document.getElementById('passworddos')
    const Passworddos=document.getElementById('passwordtres')

    if(Passworduno.value!==Passworddos.value){
        document.getElementById(`grupo__passwordtres`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__passwordtres`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__passwordtres i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__passwordtres i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__passwordtres .formulario__input-error`).classList.add('formulario__input-error-activo');
            camposDos['passworddos']=false;
    }else{
        document.getElementById(`grupo__passwordtres`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__passwordtres`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__passwordtres i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__passwordtres i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__passwordtres .formulario__input-error`).classList.remove('formulario__input-error-activo');
            camposDos['passworddos']=true;
    }

}


    const validarCampe = (expresion, input, campe) => {
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campe}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campe}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campe} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campe} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campe} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            camposDos[campe] = true;
        } else {
            document.getElementById(`grupo__${campe}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campe}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campe} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campe} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campe} .formulario__input-error`).classList.add('formulario__input-error-activo');
            camposDos[campe] = false;
        }
}

inputs_dos.forEach((input)=>{
    input.addEventListener('keyup', validadFormularioDos)
    input.addEventListener('blur', validadFormularioDos);
});

formulario_dos.addEventListener('submit', (e)=>{
    e.preventDefault();
    const terminosdos = document.getElementById('terminosdos');
    if(camposDos.usuariodos&&camposDos.correoa&&camposDos.passworddos&&terminosdos.checked){
       formulario_dos.reset();
       document.getElementById('formulario__mensaje-exitoo').classList.add('formulario__mensaje-exitoo-activo');
       document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
        icono.classList.remove('formulario__grupo-correcto');
        document.getElementById('enviar').onclick(direccionamiento())
    });
    }else{
        document.getElementById('formulario__mensajee').classList.add('formulario__mensajee-activo');
    }
   
    

} );

function direccionamiento(){
    location.href="pagina_dos.html"
}
