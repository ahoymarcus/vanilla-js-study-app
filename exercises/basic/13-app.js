// Foreach, Map, Filter, Find, Reduce
const people = [
    { name: 'bob', age: 20, position: 'developer', id: 1 },
    { name: 'peter', age: 25, position: 'designer', id: 2 },
    { name: 'susy', age: 30, position: 'the boss', id: 3 },
    { name: 'anna', age: 35, position: 'tester', id: 4 }
];

// Find - retorna o 1º value/object encontrado 
/* great for getting a unique value */

const person = people.find((person) => person.id === 3);

console.log(person.name);

/* Trying the same effect above with Filter */
const anotherPerson = people.filter((person) => {
    return person.id === 3;
});

console.log(anotherPerson[0].name);



