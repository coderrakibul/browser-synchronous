// set interval holo joto time set kore debo sei somoy por seta choltei thakbe...
// function doSomething() {
//     console.log("second");
// }
// console.log("first");
// setInterval(doSomething, 5000);
// console.log("third");




// akhane ghorir katar moto choltei thakbe ak second por por
// console.log("first");
// setInterval(() => {
//     console.log("tik tik tik")
// }, 1000);
// console.log("second");



// set interval korle seta choltei thake terminal a bondho korar jonno ctrl and c pres korte hoy but browser a bondho korar jonno nicher moto kore korte hoy

let seconds = 0;
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds == 10) {
        clearInterval(timeId);
    }
}, 1000)