
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

//Submit event
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    //Validar formulario
    const {nombre, email, mensaje} = datos;

    if(nombre==='' || email === '' || mensaje === ''){
        mostrarAlerta("Todos los campos son obligatorios.", true);

        return; //Sale de la funcion.
    }else{
        mostrarAlerta("Enviado correctamente.");
    }

    console.log("Enviando Formulario...");
    console.log(datos);
})



function leerTexto(e){
    datos[e.target.id] = e.target.value; // Hace que lo que escriba en los campos se agregue al objeto datos en sus respectivas variables.
    //Datos[Nombre] = valor del target (por ejemplo)
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    }, 5000)
}

