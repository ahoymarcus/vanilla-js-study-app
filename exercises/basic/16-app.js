// Date - built-in object
const months = ['January', 'Fevruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const date = new Date();

console.log(date);


months.map((month, idx) => {
    let counter = idx;
    console.log(`${month} id in Javascript is ${idx}`);
});
console.log(`Veja que em JS a referência de getMonth() e de getDay() são de array, de modo que retornam indexes começando em 0. Assim, é preciso usar o índice em um nova referência de array com meses!!!`)
const month = date.getMonth();
console.log(months[month]);


const day = date.getDay();
console.log(days[day]);


console.log(`No caso de getDate() que traz o dia do mês, não é preciso de uma segunda referência, pois já traz o valor desejado.`);
console.log(date.getDate());

console.log(date.getFullYear());

// Data completa
const dateSentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

console.log(dateSentence);

document.body.innerHTML = dateSentence;







