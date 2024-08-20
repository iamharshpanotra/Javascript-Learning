const myObject = {
    js: 'Javascript',
    go: 'Golang',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is the abbreviation for ${myObject[key]}`);
}

const programming = ["js", "go", "rb", "swift"];

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map() // It is not Iteratable.
map.set('IN', "INDIA")
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

for (const key in map) {
    // console.log(key);
}