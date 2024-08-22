//const coding = ["html", "css", "js", "dotnet", "sql", "cpp"];

// const values = coding.forEach((item) => {
//    console.log(item);
//     return item;
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5]
//     // myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => num > 3);
// //console.log(newNums);

// const newNums1 = myNums.filter((num) => {
//     //  return num > 3; // in filter you must use return inside the scope. 
// });
//console.log(newNums1);

// const newNums2 = []; // defining an empty array

// myNums.forEach((num) => {
//         if (num > 3) {
//             newNums2.push(num)
//         }
//     }) // using call back arrow function

// console.log(newNums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2004 },
    { title: 'Book Three', genre: 'History', publish: 1995, edition: 2004 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1997, edition: 2004 },
    { title: 'Book Five', genre: 'Science', publish: 1982, edition: 2009 },
    { title: 'Book Six', genre: 'Fiction', publish: 2001, edition: 2004 },
    { title: 'Book Seven', genre: 'History', publish: 2004, edition: 2007 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 2007, edition: 2009 },
    { title: 'Book Nine', genre: 'Science', publish: 2009, edition: 2013 },
    { title: 'Book Ten', genre: 'Fiction', publish: 2013, edition: 2004 },
];
// const userBooks = books.filter((bk) => bk.genre === 'History')
const userBooks = books.filter((bk) => { return bk.publish >= 2001 && bk.genre === "History" });
console.log(userBooks);