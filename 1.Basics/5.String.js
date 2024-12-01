const name = "Harsh"
const repoCount = 10

//onsole.log(name + " " + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String Interpolation 

const gameName = new String('Harsh-JS');
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('r')); //go through all methods of string on MDN 
// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,2)
// console.log(anotherString);
// const StringOne = "      Hey Harsh     "
// console.log(StringOne);
// console.log(StringOne.trim());

const url = "https://github.com/iamharshpanotra%33sharma"

console.log(url.replace('%33',''));
console.log(url.includes('sharma'));

console.log(gameName.split('_'));