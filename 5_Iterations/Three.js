// These are array specific loops

// 1. for of
// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hey Aman!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
}

const myObject = {
    'game1': 'BGMI',
    'game2': 'SPIDERMAN'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// }