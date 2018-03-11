/*
const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
  console.log(`Its ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { title, author } = book;
const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);


const adress = ['1299 S Juniper Street', 'Philadophia', 'Pennsylvania', '19147'];

const [, city, state = 'NY'] = adress;

console.log(`You're in ${city}, ${state}.`);

*/

const item = ['Coffe (hot)', '$2', '$2.50', '$2.75'];

const [coffe, , medium] = item;

console.log(`a medium ${coffe} costs ${medium}`);
