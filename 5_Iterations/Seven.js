const myVal = [1, 2, 3, 4, 5, 6, 7, 8];

// //const newVal = myVal.map((num) => { return num + 10 });
// const newVal = myVal.map((num) => num + 10);
// console.log(newVal);
// // map function and forEach loop

// Chaining

const newVal = myVal
    .map((num) => { return num * 10 })
    .map((num) => num + 1)
    .map((num) => num * 4)
    .filter((num) => num >= 200);

console.log(newVal);