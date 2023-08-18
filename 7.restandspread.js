// Spread is also use to clone the arrays
// Let arr1 = [1, 2, 3, 4];
// Let arr2 = [...arr1];
// arr1.push(5);
// arr1.push(6);
// change in 1st value doesn't changes 2nd value
//console.log(arr1);
// console.log(arr2);
//Let arr3 = [1, 2, 3, 4];
//Let arr4 = arr3;
//arr3.push(5);
//arr3.push(6);
//arr3.push(7);
//console.log(arr3);
// console.log(arr4);
// change in 1st value changes 2nd value

//rest
// if u used spread oprerator as a functional parameter than its called as rest

function call(name, age, ...numbers) {
    console.log(name);
    console.log(age);
    console.log(numbers);
    }
    
 call("Suhail", 22, 89756895794, 8937593473, 9373894738, 98473894359);
