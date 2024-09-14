const fondos = [
    'url("https://get.wallhere.com/photo/tofu-anime-girls-black-background-red-eyes-black-hair-minimalism-Chinese-Japanese-Art-Yuki-Aim-2125253.jpg")',
    'url("https://images6.alphacoders.com/135/1351258.png")',
    'url("https://images3.alphacoders.com/131/1313942.png")',
    'url("https://images.alphacoders.com/134/1347701.png")'
];

const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];
document.body.style.backgroundImage = fondoAleatorio;

const musica = document.getElementById('musica');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Reproducir música al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    musica.volume = volumeControl.value; // Establecer el volumen inicial
    musica.play().catch(error => {
        console.log('No se pudo reproducir automáticamente:', error);
    });
});

// Reproducir/Pausar música
playPauseBtn.addEventListener('click', () => {
    if (musica.paused) {
        musica.play().catch(error => {
            console.log('No se pudo reproducir:', error);
        });
        playPauseBtn.textContent = 'Pausar';
    } else {
        musica.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});

// Controlar volumen
volumeControl.addEventListener('input', (event) => {
    musica.volume = event.target.value;
});