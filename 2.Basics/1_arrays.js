// array 

const myArr = [0, 1, 2, 8, 4, 5];

const myIdols = ["vajpayee", "Putin"];

const myArr2 = new Array(1, 2, 6, 4, 5);
// console.log(myArr[3]);

// array methods

// myArr.push(9); // it adds the new value
// myArr.push(10); // it adds the new value
// myArr.push(7); // it adds the new value

// myArr.pop() // it removes the last value

//myArr.unshift(9) // it adds the value in the beginning 

// myArr.shift() // it removes the value from the beginning


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // converts values into string

// console.log(myArr);
// console.log(newArr);

// slice, splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);

console.log(myn2);

//slice() does not manupulate main array.
//splice() manupulate original array.