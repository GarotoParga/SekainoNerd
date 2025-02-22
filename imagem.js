// script.js
const imagens = [
    'assets/imgs/celular.jpg',
    'assets/imgs/ajeitando-pc.jpg',
    'assets/imgs/games.jpg',
];

const minhaImagem = document.getElementById('minha-imagem');
let indiceImagem = 0;

// Garante que a primeira imagem carregue instantaneamente
window.onload = () => {
    minhaImagem.src = imagens[indiceImagem];
    minhaImagem.style.opacity = 1; // Garante que a imagem apareça já carregada
};

function mudarImagem() {
    const proximaImagem = new Image(); // Pré-carrega a próxima imagem
    indiceImagem = (indiceImagem + 1) % imagens.length;
    proximaImagem.src = imagens[indiceImagem];

    proximaImagem.onload = () => {
        minhaImagem.style.transition = 'opacity 0.8s ease-in-out';
        minhaImagem.style.opacity = 0; // Faz a imagem desaparecer suavemente

        setTimeout(() => {
            minhaImagem.src = proximaImagem.src;
            minhaImagem.style.opacity = 1; // Faz a nova imagem aparecer suavemente
        }, 400); // Delay reduzido para transição mais fluida
    };
}

// Inicia a troca de imagens automaticamente
setInterval(mudarImagem, 5000);
