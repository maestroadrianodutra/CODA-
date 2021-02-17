var nome = "Adriano";
var nomeHtml = document.getElementById("nome-no-html");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome; 
}

function logarNome() {
    console.log(nome);
}

colocarNomeNoHtml(nome);
