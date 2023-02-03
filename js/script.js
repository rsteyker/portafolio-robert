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

//Función que aplica las animaciones de las habildades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("powerbi");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("sqlserver");
        habilidades[7].classList.add("photoshop");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajoequipo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("innovacion");
        habilidades[13].classList.add("liderazgoequipo");
        habilidades[14].classList.add("disciplina");
        habilidades[15].classList.add("resolucionproblema");
    }
}
//Detecto el strolling pra aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
