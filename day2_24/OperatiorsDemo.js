let a = 10;
let b = 5;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);



//program to calculate area of circle
let radius = 7;
let area = Math.PI * radius * radius;
console.log("Area of the circle with radius", radius, "is:", area);



//find out greatest of two numbers
let num1 = 15;
let num2 = 20;
if(num1 > num2){
    console.log(num1, "is greater than", num2);
}
else if(num2 > num1){
    console.log(num2, "is greater than", num1);
}
else{
    console.log("Both numbers are equal.");
}



//find out greatest of three numbers
let x = 25;
let y = 30;
let z = 20;
if(x > y && x > z){
    console.log(x, "is the greatest number.");
}
else if(y > x && y > z){
    console.log(y, "is the greatest number.");
}
else if(z > x && z > y){
    console.log(z, "is the greatest number.");
}



//greatest of three numbers using nested if
let p = 12;
let q = 18;
let r = 10;
if(p > q){
    if(p > r){
        console.log(p, "is the greatest number.");
    }
    else{
        console.log(r, "is the greatest number.");
    }
}
else{
    if(q > r){
        console.log(q, "is the greatest number.");
    }
    else{
        console.log(r, "is the greatest number.");
    }
}




//wtite a program to perform artihmetic operations using switch case
let numA = 8;
let numB = 4;
let operator = '*';
switch(operator){
    case '+':
        console.log("Addition:", numA + numB);
        break;
    case '-':
        console.log("Subtraction:", numA - numB);
        break;
    case '*':
        console.log("Multiplication:", numA * numB);
        break;
    case '/':
        console.log("Division:", numA / numB);
        break;
    case '%':
        console.log("Modulus:", numA % numB);
        break;
    default:
        console.log("Invalid operator.");
}



//write program to print number from 1 to 10 using while loop
let count = 1;
while(count <= 10){
    console.log(count);
    count++;
}


//write program to print number from 1 to 10 using do while loop
let num = 1;
do{
    console.log(num);
    num++;
}while(num <= 10);


//write program to print number from 1 to 10 using for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}



const arr = [1, 2, 3, 4, 5];
arr.forEach(item=> console.log(item));


//an object with some properties
var person = {
    "name": "Garuav Jha",
    "age": 22,
    "city": "Patna"
}
for(var prop in person){
    document.write("<p>" + prop + ": " + person[prop] + "</p>");
}



//iterate over array
let letters = ['a', 'b', 'c', 'd', 'e'];
for(let index of letters){
    console.log("Letter: "+ index);
}