// high order array loop (below loop are mostly array specific loop)

// for of loop
// let arr = [1, 2, 3, 4, 5];
// let arr = "Namaste Coder";
// for (const element of arr) {
    // console.log(element);
// }

// ============== Maps ============== 
// map are contain only unique value
// let map = new Map();
// map.set("in", "India");
// map.set("en", "England");
// map.set("ch", "China");
// map.set("jp", "Japan");
// console.log(map);

// for (const key of map) {
// in below, [] is destructure operator
// for (const [key, value] of map) {
    // console.log(key, ":-", value);
// }

// let gameObject = {
//     "game1": "kabaddi",
//     "game2": "kushti",
//     "game3": "dangal",
// }
// for (const [key, value] of gameObject) {
//     console.log(key, ":-", value); //gameObject is not iterable
// }

// let course = {
//     c: "C",
//     cpp: "C++",
//     py: "Python",
//     java: "Java",
//     js: "javascript"
// }
// for (const key in course) {
//     // console.log(key);
//     // console.log(course[key]);
//     console.log(`${key} shortcut is for ${course[key]}`);
// }

// const programming = ["c", "cpp", "python", "java", "javascript", "html", "css"];
// 
// for (const key in programming) {
    // // console.log(`${key} key for value is ${programming[key]}`);
// }

// let map = new Map();
// map.set("in", "India");
// map.set("en", "England");
// map.set("ch", "China");
// map.set("jp", "Japan");
// 
// for (const key in map) {
    // console.log(key);
// }

// const programming = ["c", "cpp", "python", "java", "javascript", "html", "css"];
// for-each cannot have the function name
// programming.forEach(function (item) {
//     console.log(item);
// })

// programming.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
    // console.log(item);
// }
// programming.forEach(printMe);

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// let coding = [
    // {
        // name: "Java",
        // fileName: "java"
    // },
    // {
        // name: "JavaScript",
        // fileName: "js"
    // },
    // {
        // name: "Python",
        // fileName: "py"
    // },
// ]
// 
// coding.forEach( (item) => {
    // // console.log(`${item.name} extension is .${item.fileName}`);
// });

// ============== Filter, Maps and reduce ============== 

// let coding = ["js", "ruby", "python", "java"];
// const value = coding.forEach( (item) => {
//     // console.log(item)
//     return item;
// });
// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const newNum = myNums.filter( (num) => num > 4);
// const newNum = myNums.filter( (num) => {
//     return num > 4;
// });
// console.log(newNum);

const newNum = [];
myNums.forEach( (num) => {
    if (num > 4)
    newNum.push(num)
})

console.log(newNum);

// <------------- uncomplete lecture ------------->