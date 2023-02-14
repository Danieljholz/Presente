var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSideBar = false;

function toggleSideBar(){
    showSideBar = !showSideBar;
    if(showSideBar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSideBar';
        content.style.filter = 'blur(2px)'
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = ''
    }
}

function closeSideBar(){
    if(showSideBar){
        toggleSideBar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSideBar){
        toggleSideBar();
    }
});

// CORPO

class cartinhas{
    constructor(nome, texto){
        this.nome = nome
        this.texto = texto
    }

    render(){
        let div = document.createElement("div")
        let nome = document.createElement("texto")
        let linha = document.createElement("hr")
        let texto = document.createElement("texto")

        nome.innerHTML = this.nome
        texto.innerHTML = this.texto

        nome.setAttribute("class", "nomeCard")
        texto.setAttribute("class", "textoCard")

        div.appendChild(texto)
        div.appendChild(linha)
        div.appendChild(nome)
        document.getElementById("cartinhas").appendChild(div)
    }
}


var cards = []
cards.push(new cartinhas("pedro", "blasmavmksanvosajbfwoafww"))
cards.push(new cartinhas("pedro", "blasmavmksanvosajbfwoafww"))
cards.push(new cartinhas("pedro", "blasmavmksanvosajbfwoafww"))
cards.push(new cartinhas("pedro", "blasmavmksanvosajbfwoafww"))
cards.push(new cartinhas("pedro", "blasmavmksanvosajbfwoafww"))

function criaCartas() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].render()
    }
} 

addEventListener("load", criaCartas)