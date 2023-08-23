// iteration with break and continue
// for loop
for (let i = 0 ; i <= 10 ; i++) {
    // console.log(`Namaste ${i} time`);
    if (i == 7) {
        console.log(`Hurry, i find ${i}`);
        break;
    }
    if (i == 5) {
        console.log(`I detect ${i}`);
        continue;
    }
    console.log(`${i}`);
}