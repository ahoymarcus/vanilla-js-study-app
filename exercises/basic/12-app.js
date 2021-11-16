// Foreach, Map, Filter, Find, Reduce
const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'tester' }
];

// Filter - retorna array
const youngPeople = people.filter((person) => {
    return person.age <= 25;
});

const developers = people.filter((person) => person.position === 'developer');

console.log(youngPeople);
console.log(developers);



