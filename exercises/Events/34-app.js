// select the element
// addEventListener()
// paras -> what event, what to do

const btn = document.querySelector('.btn');
const heading2 = document.querySelector('h2');


function changeColors() {
    //console.log('hello');
    const hasClass =heading2.classList.contains('red');
    
    if (hasClass) {
        heading2.classList.remove('red');
    } else {
        heading2.classList.add('red');
    }
}



btn.addEventListener('click', changeColors);


// the Callback version
// btn.addEventListener('click', () => {
//     //console.log('hey you clicked me');
//     heading2.classList.add('red');
// });


















