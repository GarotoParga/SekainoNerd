// script.js
const imagens = [
    'assets/imgs/celular.jpg',
    'assets/imgs/ajeitando-pc.jpg',
    'assets/imgs/games.jpg',
];

const minhaImagem = document.getElementById('minha-imagem');
let indiceImagem = 0;

function mudarImagem() {
    const proximaImagem = new Image(); // Pré-carrega a próxima imagem
    indiceImagem = (indiceImagem + 1) % imagens.length;
    proximaImagem.src = imagens[indiceImagem];

    proximaImagem.onload = () => {
        minhaImagem.style.opacity = 0; // Suaviza a saída
        setTimeout(() => {
            minhaImagem.src = proximaImagem.src;
            minhaImagem.style.opacity = 1; // Suaviza a entrada
        }, 500); // Pequeno delay para evitar flickering
    };
}

// Inicia a troca de imagens
setInterval(mudarImagem, 5000);
