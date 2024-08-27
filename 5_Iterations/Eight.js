const myVal = [1, 2, 3];

// const myTotal = myVal.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);

//     return acc + currval
// }, 0)

const myTotal = myVal.reduce((acc, currval) => acc + currval, 0);

//console.log(myTotal);

const shoppingCart = [{
        itemName: "js course",
        price: 999
    },
    {
        itemName: "Android Development ",
        price: 6999
    },
    {
        itemName: "Web Development",
        price: 5999
    },
    {
        itemName: "Machine Learning",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceTopay);