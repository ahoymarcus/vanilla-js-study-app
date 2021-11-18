// submit event listener
// prevent default 
// how to get a value


const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
console.log('testing element ', name);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submited');

    console.log(name.value + " :: " + password.value);
});











