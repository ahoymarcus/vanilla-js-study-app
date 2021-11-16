// Foreach, Map, Filter, Find, Reduce
const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'tester' }
];


// Map - retorna array
const ages = people.map((person) => `${person.age} years`);
console.log(ages);


const newPeople = people.map((person) => {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20
    };
});

console.log(newPeople);

const names = people.map((person) => {
    return `<h1>${person.name}</h1>`;
});

console.log(names);

document.body.innerHTML = names.join('');


// Map - retorna array
console.log(people);




