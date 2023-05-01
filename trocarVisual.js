var botaoVisual = document.querySelector(".modo-visual");
var visual = "claro";
var principal = document.querySelector(".principal");
var imgVisual = document.querySelector(".imagem__trocar--fundo");
var imgGit = document.querySelector(".img--github");
var imgTwitter = document.querySelector(".img--twitter");
var imgLinkedin = document.querySelector(".img--linkedin");
var imgInstagram = document.querySelector(".img--instagram");



botaoVisual.addEventListener("click",()=>{
    if(visual == "claro"){
        principal.classList.add("modo--escuro");
        imgVisual.src = "./assets/img__Escuro/sun-solid (2) 1.png";
        imgGit.src = "./assets/img__Escuro/Untitled-removebg-preview.png";
        imgTwitter.src = "./assets/img__Escuro/twitter 1.png";
        imgInstagram.src = "./assets/img__Escuro/square-instagram (2) 1.png";
        imgLinkedin.src = "./assets/img__Escuro/linkedin (1) 1.png";
        visual = "escuro";
    }else if(visual == "escuro"){
        principal.classList.remove("modo--escuro");
        imgVisual.src = "./assets/img/moon-solid.svg";
        imgGit.src = "./assets/img/square-github (1).svg";
        imgTwitter.src = "./assets/img/twitter (1).svg";
        imgInstagram.src ="./assets/img/square-instagram (3).svg";
        imgLinkedin.src ="./assets/img/linkedin (2).svg";
        visual = "claro";
    }
})