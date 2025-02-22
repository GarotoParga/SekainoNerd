// script.js
const imagens = [
    'assets/imgs/celular.jpg',
    'assets/imgs/ajeitando-pc.jpg',
    'assets/imgs/games.jpg',
];

const minhaImagem = document.getElementById('minha-imagem');
let indiceImagem = 0;

function mudarImagem() {
    minhaImagem.style.opacity = 0;

    setTimeout(() => {
        indiceImagem = (indiceImagem + 1) % imagens.length;
        minhaImagem.src = imagens[indiceImagem];
        minhaImagem.style.opacity = 1;
    }, 1000); 
}

setInterval(mudarImagem, 5000);
