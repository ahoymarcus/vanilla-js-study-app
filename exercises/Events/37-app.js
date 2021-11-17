// event object argumen - e or evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour


const heading1 = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');



heading1.addEventListener('click', function (event) {
  //console.log(event);
    console.log(event.currentTarget);

    // this -> aqui é do obj heading1
    // CUIDADO, aqui, o uso de Arrow 
    // Func  muda o CONTEXTO para o
    // objeto Window
    console.log(this);
});


btn.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    console.log(event.type);

    event.currentTarget.classList.add('blue');
});



function someFunc(e) {
    e.preventDefault();
}

link.addEventListener('click', someFunc);






