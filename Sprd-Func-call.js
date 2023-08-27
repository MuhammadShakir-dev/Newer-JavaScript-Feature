// spread operator in function call.

let nums = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];

// find the minimum and maximum number from this array;


console.log(Math.max(nums)); // NaN
console.log(Math.min(nums)); // NaN

// What if i use spread operator.

console.log(Math.max(...nums)); // 150
console.log(Math.min(...nums)); // 10

// spread operator split the whole elemnt of an array into sperate individuals.

console.log("Hello world"); // Hello world
console.log(..."Hello world"); // H e l l o   w o r l d
