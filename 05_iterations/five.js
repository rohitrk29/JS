const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
})


coding.forEach( (item) => {
    console.log(item);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)  //pass the reference only, not pass the execution of the function like 'printMe()'


coding.forEach( (item, index, arr) => {  //we can pass more the one parameter
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }    
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})