const coding = ["html", "css", "js", "dotnet", "sql", "cpp"];

//coding.forEach( function name())
// callback function doesn't have name

coding.forEach(function(item) {
    // console.log(item);
})

coding.forEach((value) => {
    // console.log(value);
})

function printMe(item) {
    //  console.log(item);
}
coding.forEach(printMe)
    //console.log(printMe());

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);

})

const myCoding = [{
        languageName: "dotNet",
        languageFileName: ".aspx.cs"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})