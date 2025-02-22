// script.js
const imagens = [
    'assets/imgs/celular.jpg',
    'assets/imgs/ajeitando-pc.jpg',
    'assets/imgs/games.jpg',
];

const minhaImagem = document.getElementById('minha-imagem');
let indiceImagem = 0;

function mudarImagem() {
    // Suaviza a saída
    minhaImagem.style.transition = 'opacity 1s ease-in-out';
    minhaImagem.style.opacity = 0;

    setTimeout(() => {
        indiceImagem = (indiceImagem + 1) % imagens.length;
        minhaImagem.src = imagens[indiceImagem];

        // Garante que a imagem carregou antes de exibir
        minhaImagem.onload = () => {
            minhaImagem.style.opacity = 1;
        };
    }, 1000);
}

// Inicia a troca de imagens
setInterval(mudarImagem, 5000);

