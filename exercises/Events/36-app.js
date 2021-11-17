// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById('name');



// nameInput.addEventListener('keypress', () => {
//     console.log('you pressed a key');
// });


// nameInput.addEventListener('keydown', () => {
//     console.log('you pressed a key');
// });


nameInput.addEventListener('keyup', () => {
    //console.dir(nameInput);
    console.log(nameInput.value);
});








