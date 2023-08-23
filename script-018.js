// Immediately Invoked Function Expressions (IIFE)

// function namaste() {
//     console.log(`Namaste User`);
// }
// namaste();

// named IIFE
// (function namaste() {
//     console.log(`Namaste User`);
// })();

// unnamed IIFE
((name) => {
    console.log(`Namaste ${name}`);
})('Chiranjeev');
