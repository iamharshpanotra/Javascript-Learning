//2 types of data types
// 1. Primitive // Call By Value
// 7 Types 
// String, Number, Boolean, Null, Undefined, Sybmol, BigInt
const score = 100 
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null 
let userEmail;
let userEmail1 = undefined

const id = Symbol('123')
const id1 = Symbol('123')

console.log(id === id1);

const bigNumber = 5084278954892789n


// 2. Non-Primitive // Call by Reference

// 3 Types
// Array, Objects, Functions

const heros = ["haribali", "kuttiman", "rishibali", "Aadiraj Bhutto"] 
let newObj = {
    name: "Harsh", 
    age: 21,
}

const newFunction = function(){
    console.log("Hello World");
}

console.log(typeof newFunction);