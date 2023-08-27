// Destructuring Arrays.
// A short clean syntax to unpack:
// Values from arrays.
// properties from objects.
// into distinct variables.

let raceResults = ["Tim","Josef","John","Tina","Galen"];

// old way to doing this.

let gold = raceResults[0];
let silver = raceResults[1];
let everyOneElse = raceResults.splice(2);

console.log(`Gold winner is  : ${gold}`);
console.log(`Silver winner is  : ${silver}`);
console.log(`Thanks to every one else : ${everyOneElse}`);

// let's do this with destructuring arrays.

const [gold,silver,...everyOneElse] = raceResults;
console.log(`Gold winner is ${gold}`);
console.log(`Silver winner is  : ${silver}`);
console.log(`Thanks to every one else : ${everyOneElse}`);
