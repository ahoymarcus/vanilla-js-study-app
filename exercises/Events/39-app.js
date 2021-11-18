// allows select dynamic elements
// that is, to select elements without even targeting them 
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target


const container = document.querySelector('.container');
const list = document.querySelector('.list-items');


function showBubbling(e) {
    console.log('e.currentTarget ', e.currentTarget);
    console.log('e.target ', e.target);
    
    if (e.target.classList.contains('link')) {
        console.log('you clicked on the link');
    }
}

function stopPropagation(e) {
    console.log('you clicked on the list');
    e.stopPropagation();
}



/* experimente passar o obj com capture: true para inverte a propagação */
list.addEventListener('click', stopPropagation, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });


// now the Windon e Document objs
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });







