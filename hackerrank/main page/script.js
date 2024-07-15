const genz_section = document.querySelector('.genz');
const sustfashion_section = document.querySelector('.sustfashion');
const groupshop_section = document.querySelector('.groupshop');

const genz_section_items = document.querySelector('.genz-section-items');
const sustfashion_section_items = document.querySelector('.sustfashion-section-items');
const groupshop_section_items = document.querySelector('.groupshop-section-items');

genz_section.addEventListener('click', () => {
    genz_section_items.classList.toggle('visibility');
});

sustfashion_section.addEventListener('click', () => {
    sustfashion_section_items.classList.toggle('visibility');
});

groupshop_section.addEventListener('click', () => {
    groupshop_section_items.classList.toggle('visibility');
});
