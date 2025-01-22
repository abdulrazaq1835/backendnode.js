//SYNCHRONOUS

// console.log("Task A") //2MS
// console.log("Task B") //4MS
// console.log("Task C") //0MS
// console.log("Task D") //5MS


////ASYNCHRONOUS===================

setTimeout(() => {
    console.log("Task A")
}, 2000);


setTimeout(() => {
    console.log("Task B")
}, 4000);

setTimeout(() => {
    console.log("Task C")
}, 0);

setTimeout(() => {
    console.log("Task D")
}, 5000);
