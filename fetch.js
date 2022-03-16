//asynchronous arrow functiohn
// console.log(11111);
// console.log(22222);
// setTimeout(() => console.log(33333), 3000);
// console.log(44444);
// console.log(55555);


// aynchronous... fetch ta asynchronous vabe kaj kore
console.log(11111);
console.log(22222);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(44444);
console.log(55555);
for(let i = 0; i<10; i++){
    console.log(i);
}