// rest operatot.
// rest is looks like spread but it's not spread.


// diff b/w spread and rest.
// spread spreading the thing inside of any array, object, and function paramtere.
// rest collect the elements of function arrguments and make a new array of that.

// you cannot use array methods with arrguments directly because arrguments are not arrays by default you.
// have to make them arrays using rest operator.

// eg  : 1
// write a function who add of its num arrguments and give the ans.

function sum(num){
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total += num[i];
    };
    return total;
}

console.log(sum(1,2,3)); // output : 0;


function sumAll(...num){
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total += num[i];
    };
    return total;
}

console.log(sumAll(1,2,3)); // output : 6;


// using reduce
let numbers = [1223,33,32232,1212,133213,123213];
let finalOutput = numbers.reduce((accumelator, currentValue) => {
    return accumelator + currentValue;
});

console.log(finalOutput);


// using rest param with reduce.

let add  = (...nums) => {
    return nums.reduce((acc, curValue) => {
        return acc + curValue;
    });
}

console.log(add(1,2,3));




