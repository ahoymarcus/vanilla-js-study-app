// Math - built-in object

const number = 4.56789;
let result;


console.log(Math.floor(number));
console.log(Math.ceil(number));


console.log(Math.sqrt(number));
console.log(Math.PI);

console.log(Math.min(5, 4, 1, -10, 50));
console.log(Math.max(5, 4, 1, -10, 50, 30));

// from 0 to 0.999999
const randomNumber = Math.random();

console.log(
    `Duas formas diferentes de se gerar números randômicos até 10:
    (Math.floor(Math.random() * 10) +1),
    (Math.ceil(Math.random() *10))`
);
// console.log(Math.floor(randomNumber * 10) + 1);
// console.log(Math.ceil(randomNumber * 10));
console.log(Math.floor(Math.random() * 10) +1);
console.log(Math.ceil(Math.random() *10));








