// para elementos "aparecerem" na tela
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.invisible');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});



// slideshow
document.addEventListener("DOMContentLoaded", function () {
    // Array de URLs de imagens
    const images = [
        './images/pinheiros.jpg',
        './images/contap-logo.png',
    ];

    // Seleciona o elemento que receberá o slideshow
    const hero = document.querySelector('.hero');

    // Índice inicial da imagem
    let currentImageIndex = 0;

    // Tempo de exibição por imagem em milissegundos (5 segundos)
    const slideshowInterval = 5000;

    // Função para mudar o background
    function changeBackgroundImage() {
        // Muda a imagem de fundo do elemento .hero
        hero.style.backgroundImage = `url(${images[currentImageIndex]})`;

        // Atualiza o índice da próxima imagem
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Inicializa o slideshow
    setInterval(changeBackgroundImage, slideshowInterval);

    // Inicializa com a primeira imagem
    changeBackgroundImage();
});



// cards
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os cards com as classes especificadas
    const cards = document.querySelectorAll('.card-open, .card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Alterna a classe .is-flipped no card clicado
            if (card.classList.contains('card')) {
                card.querySelector('.card-inner').classList.toggle('is-flipped');
            } else if (card.classList.contains('card-open')) {
                card.querySelector('.card-inner-open').classList.toggle('is-flipped');
            }
        });
    });
});