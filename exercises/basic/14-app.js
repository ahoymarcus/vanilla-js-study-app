// Foreach, Map, Filter, Find, Reduce
const people = [
    { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
    { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
    { name: 'anna', age: 35, position: 'tester', id: 4, salary: 500 }
];

// Reduce - more powerful and can replace Map and Filter 
// Reduces to a single value
// Params
// ('acc') total of all calculations
// ('curr') - current iteration/value

const totalTest = people.reduce((acc, cur) => {
    console.log(acc);
    console.log(cur);

    return acc;
}, 0);


const total = people.reduce((acc, cur) => {
    console.log(`total ${acc}`);
    console.log(`current money: ${cur.salary}`);
    acc += cur.salary;

    return acc;
}, 0);

console.log(total);






