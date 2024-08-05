//if

// if (
//     //true -- code will be executed 
//     //false- code will not be executed
//     isUserLoggedIn) {

// }
// const temperature = 41;
// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <,> <=, >=, ==, != , ===(also typecheck), !==

const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User's Power: ${power}`);
}
// console.log(`User's Power: ${power}`);

// var follows global scope so use let or const inside scope.

// Implicit Scope

const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"),
//     console.log("test2"); commas can be used but do not use. 

//if-else if - else.

const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (UserLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to have fun");
}
//  || - pipe sign for multiple conditions