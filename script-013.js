// objects
// singleton: only one object are created.
// Object.create(): object create using constructor.

// object lierals
let mySym = Symbol("Key1");

const JsUser = {
    name: "Chiranjeev",
    "full name": "Chiranjeev Kashyap",
    // mySym: "Key2", (its not appropriate way)
    [mySym]: "Key2",
    age: 22,
    location: "rishikesh",
    email: "chiranjeev@google.com",
    isLoggedIn: false
};

// JsUser.name (its not appropriate way to access the object)
// console.log(JsUser["full name"]); //(its appropriate way)

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// how to change object value
// Object.freeze(JsUser);
// console.log(JsUser["email"]);

// Object.freeze(object): when you want to freeze the object for anyone cannot chnage the value.
// JsUser.email = "chiranjeev@microsoft.com";

// console.log(JsUser);

// function in object

// JsUser.greeting = function() {
    // console.log("Namaste JsUser");
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

JsUser.getName = function() {
    console.log(`Namaste JsUser, ${this["full name"]}`);
}

console.log(JsUser.getName());