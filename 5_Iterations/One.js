for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //        console.log("5 is here");
    }
    //    console.log(element);

}

// console.log(element);
for (let i = 1; i <= 10; i++) {
    //  console.log(`Value in Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //        console.log(`Value in Inner Loop: ${j} and inner loop ${i}`)
        //      console.log(i + '*' + j + ' = ' + i * j);
    }
}

let ArrayOne = ["vajpayee", "manmohan", "IK Gujral"];
//console.log(ArrayOne.length);
for (let i = 0; i < ArrayOne.length; i++) {
    const element = ArrayOne[i];
    //   console.log(element);

}

// Break and Continue

for (let i = 1; i <= 15; i++) {
    if (i == 5) {
        //   console.log(`5 is found`);
        break;
    }
    // console.log(`The present value is ${i}`);

}


for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 is found`);
        continue;
    }
    console.log(`The present value is ${i}`);
}