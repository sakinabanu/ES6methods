
let arr=[1,2,3,4]
//Object Destructuring is

let [one, two, three, four]=arr 
console.log(one, two, three, four);

//skipping values
let arr2=[1,2,100,3]
let [v1, v2, ,v3]=arr2
console.log(v1, v2, v3);

//swapping variable values
let a=5;
let b=10;
let c=3;

[a,b,c]=[b,c,a];

console.log(a);
console.log(b);
console.log(c);

//spread operator in array destructuring

let phonebook=["hanzala", "javed", "ali", 3452,4,45,425, 78658,96898795,534625]

let [firstname,...numbers]=phonebook 
console.log(firstname); 
console.log(numbers);