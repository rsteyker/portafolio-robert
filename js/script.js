let menuVisible = false;

//Funcion que oculta o muestra el menú
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccinar(){
    //Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Formulario Contacto
    const formulario = document.querySelector('#form')
    const sendForm = document.querySelector('#mail')

    formulario.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    sendForm.setAttribute('href', `mailto:rmarchino95@gmail.com?subject=${form.get('name')} - ${form.get('subject')}&body=${form.get('message')}`)
    sendForm.click()
}