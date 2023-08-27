
// You can give your parameters a default value. Which can be used if your user doesn,t want to give a arrgument on a function call.

// old way passing parameters
let rollDie  = (num) => {
    return Math.floor(Math.random() * num) + 1;
}

// Old way to handle this shit.

let rollDie  = (num) => {
    if(num === undefined){
        num = 6;
    }
    return Math.floor(Math.random() * num) + 1;
}

console.log(rollDie()); // 3
console.log(rollDie(12)); // 12

// new way to handle this shit
let rollDie = (num = 6) => {
    return Math.floor(Math.random() * num) + 1;
};

// more shorter way of doing this.
let rollDie = (num = 6) => (Math.floor(Math.random() * num) +  1);

console.log(rollDie());

// note down one thing if you have more than one parameter than you shouldn't pas a default param value to
// only the fisrt parameter. you have to give a default value to both parameters.
let rollDie = (num = 6) => (Math.floor(Math.random() * num) +  1);

console.log(rollDie());

let greet = (hi = "Hello world", msg = "I'm shakir") => (
    `${hi} : ${msg} ...!!`
    );
console.log(greet()); // Hello world : I'm shakir ...!!


let greet = (hi = "Hello world", msg) => (
    `${hi} : ${msg} ...!!`
    );
console.log(greet("I'm Shakir")); // I'm Shakir : undefined ...!!

// JavaScripr consider I'm Shakir argument as a hi and that he shows undefined for msg



