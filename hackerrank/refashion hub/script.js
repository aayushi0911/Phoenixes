
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        const items = carousel.querySelector('.carousel-items');
        
        leftArrow.addEventListener('click', () => {
            items.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', () => {
            items.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    });
});

