// JSON.stringify()
// JSON.parse()

const friends = ['john', 'peter', 'bob'];



/* 
    Cuidado: quando se guarda valores no Local Storage as arrays, porque são convertidos em strings....
*/
localStorage.setItem('friends', friends);

const values = localStorage.getItem('friends');
console.log(values[0]);

const valuesAsArray = values.split(',');
console.log(valuesAsArray[0]);



/* 
    JSON: usando json
*/
localStorage.setItem('friends2', JSON.stringify(friends));

const newValues = localStorage.getItem('friends2');

// this here is not a array
console.log(newValues);
console.log(newValues[0]);


const correctValues = JSON.parse(localStorage.getItem('friends2'));

// this here is a array
console.log(correctValues);
console.log(correctValues[0]);




let fruits;
if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = [];
}

console.log(fruits);


// fruits.push('apple');
fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits));


  

