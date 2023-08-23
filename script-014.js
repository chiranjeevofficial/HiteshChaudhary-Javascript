// function sayNamaste() {
//     console.log("N");
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("S");
//     console.log("T");
//     console.log("E");
// }
// sayNamaste();

// function addition(a, b) {
//     console.log(`Sum of ${a} and ${b} is: ${a+b}`);
// }

function addition(a, b) {
    return a + b;
}

let a = 3, b = 5;
// console.log(`Sum of ${a} and ${b} is: ${addition(a, b)}`);

// function loginUserMessage(username) {
//     // if (username === undefined)
//     if (!username)
//         return `Please enter username`;
//     else
//         return `${username} just loggedIn`;
// }

function loginUserMessage(username = "Narayan") {
        return `${username} just loggedIn`;
}

console.log(loginUserMessage('Chiranjeev'));
console.log(loginUserMessage());