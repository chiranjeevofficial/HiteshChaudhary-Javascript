// THIS and arrow function

// let user = {
    // username: "chiranjeev",
    // age: 22,
    // welcomeMessage: function () {
        // console.log(`Namaste ${this.username}, welcome to my website`);
        // console.log(this);
    // }
// }

// user.welcomeMessage();
// user.username = "Narayan";
// user.welcomeMessage();

// function chai() {
    // console.log(this);
// }
// chai();

// let user = function () {
    // let username = "Narayan";
    // console.log(this.username);
// }

// let user = () => {
    // let username = "Narayan";
    // console.log(this);
// }
// user();

// arrow function: () => {}
// let addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// let addTwo = (num1, num2) => num1 + num2;
// let addTwo = (num1, num2) => (num1 + num2);

// let addTwo = (num1, num2) => {username: "chiranjeev"};
let addTwo = (num1, num2) => ({username: "chiranjeev"});

console.log(addTwo(1, 8));