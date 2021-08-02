let strictA = true;
let strictB = 1;

console.log(strictA == strictB); // true
console.log(strictA === strictB); // false

console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

let age = 38

if(age >=18 && age <=65) {
    console.log("Age is within 16 and 65");
} else if (age <18 ){
    console.log("Sorry you are under age ");
} else {
    console.log("Sorry you are too old!")
}

let result = age >=50 ? "You are over 50" : "You are under 50";
console.log(result);