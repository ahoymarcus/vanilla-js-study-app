// Foreach, Map, Filter, Find, Reduce
const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 20, position: 'designer' },
    { name: 'sysy', age: 20, position: 'the boss' }
];

// callback Fn
function showPerson(person) {
    console.log(person.position.toUpperCase());
}

// Foreach - não retorna array
people.forEach(showPerson);


// Foreach - não retorna array
console.log(people);


