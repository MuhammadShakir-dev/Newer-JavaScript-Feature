// spread with array literals.
// we can use spread operators with arry literals for actual copy of things.

let dogs = ["Husky","Pitbull","Alaskan Husky"];
let cats = ["Persion Cat","Wild cat","Puma"];

// lets join both of them using spread operators.

let allpets = [...dogs, ...cats];
console.log(allpets);

// the output you will see here is : 
/*
[
  [ 'Husky', 'Pitbull', 'Alaskan Husky' ],
  [ 'Persion Cat', 'Wild cat', 'Puma' ]
]
*/

let allpets = [...dogs, ...cats];
console.log(allpets);

// the out you will see here is : 

/*
[
  'Husky',
  'Pitbull',
  'Alaskan Husky',
  'Persion Cat',
  'Wild cat',
  'Puma'
]
*/


// i can also add any thing inside all pets 

allpets = [...dogs, "Rotwiller",...cats,"Britsh Sorthair"];
console.log(allpets);
