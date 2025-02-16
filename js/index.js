const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = 1;
    }
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}