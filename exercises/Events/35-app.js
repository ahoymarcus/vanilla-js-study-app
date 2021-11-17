// click - fires after the full actions occurs
// mousedown - buttom is pressed
// mouseup - buttom is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading1 = document.querySelector('h1');
const btn = document.querySelector('.btn');


// observar a ordem das ações
// Observar que atomizando a ação 
// de click (mousedown e mouseup)
// temos mais controle
btn.addEventListener('click', () => {
    console.log('you clicked me');
});

btn.addEventListener('mousedown', () => {
    console.log('down');
});

btn.addEventListener('mouseup', () => {
    console.log('up');
});



heading1.addEventListener('mouseenter', () => {
    heading1.classList.add('blue');
});

heading1.addEventListener('mouseleave', () => {
    heading1.classList.remove('blue');
});








