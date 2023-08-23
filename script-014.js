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

// let a = 3, b = 5;
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

// console.log(loginUserMessage('Chiranjeev'));
// console.log(loginUserMessage());

// ================ Function with Object and Array ================
// (...) in below code that are rest operator
function calculateCardPrice(...price) {
    return price;
}
// console.log(calculateCardPrice(100, 200, 300));

const user = {
    username: "chiranjeev",
    age: 22
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user);
// handleObject({
    // username: "narayan",
    // age: 24
// });

let newArray = [100, 200, 300];

function secondValueOfArray(array) {
    return array[1];
}

secondValueOfArray(newArray);