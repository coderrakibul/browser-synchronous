//synchronous orthat serial vabe
// javascript aktar por akta serial vabe code gulo ke run kore

// function doSomething() {
//     console.log("I am coding JavaScript");
// }
// console.log("first: ami sobar age");
// console.log("second: I am the second person");
// doSomething();
// console.log("third: ami 3 number baccha");
// console.log("fourth: ami ak hali purno korsi");



// asynchronous.... use set timeout.... this is called asynchronous
// set timeot er kaj holo sob code run korar por set timeout er code run korbe
// set timeout aro paramrter nay jemon function er por jodi time set kori tahole se totokhon por run hobe

function doSomething() {
    console.log("I am coding JavaScript");
}
console.log("first: ami sobar age");
console.log("second: I am the second person");
setTimeout(doSomething, 3000);
// set timeout a abr funcito o likha jay.... jemon
// setTimeout(function(){
//     console.log("I am using vs code")
// }, 5000);
console.log("third: ami 3 number baccha");
console.log("fourth: ami ak hali purno korsi");


