// 1)Sample  program to print a welcome message
console.log("Welcome to JavaScript Programming!");



// 2)program to read a number user and display it */
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Enter a number: ", function(num){
//     console.log("You entered:", num);
//     readline.close();
// });



// 3)program to read a floating point number from user 
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Enter a floating point number: ", function(num){
//     const floatNum = parseFloat(num);
//     console.log("You entered:", floatNum);
//     readline.close();
// });



//4)program to read a string from user and display it on the screen 
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Enter a string: ", function(str){
//     console.log("You entered:", str);
//     readline.close();
// });



//5)program to perform all arithmetic operations*/
// let a = 10;
// let b = 5;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);



// 6) program to find the area of circle */
// let radius = 5;
// let area = Math.PI * radius * radius;
// console.log("Area of the circle with radius", radius, "is:", area);



//7) program to find whether the given number is Even or Odd */
// let number = 7;
// if(number % 2 === 0){
//     console.log(number, "is an Even number.");
// }
// else{
//     console.log(number, "is an Odd number.");
// }



//8)program to find the greatest of 2 numbers */
// let num1 = 10;
// let num2 = 20;
// if(num1 > num2){
//     console.log(num1, "is greater than", num2);
// }
// else if(num2 > num1){
//     console.log(num2, "is greater than", num1);
// }
// else{
//     console.log("Both numbers are equal.");
// }



//9) program to find whether a given number is positive ,negative or zero*/
// let num = -5;
// if(num > 0){
//     console.log(num, "is a Positive number.");
// }
// else if(num < 0){
//     console.log(num, "is a Negative number.");
// }
// else{
//     console.log("The number is Zero.");
// }



//10) program to find the greatest of three numbers*/ 
// let x = 15;
// let y = 25;
// let z = 20;
// if(x > y){
//     if(x > z){
//         console.log(x, "is the greatest number.");
//     }
//     else{
//         console.log(z, "is the greatest number.");
//     }
// }
// else{
//     if(y > z){
//         console.log(y, "is the greatest number.");
//     }
//     else{
//         console.log(z, "is the greatest number.");
//     }
// }



//10a) program to find the greatest of three numbers using nested if*/ 




// 11) program to find the greatest of 3 numbersusing conditional operator */
// let a = 12;
// let b = 18;
// let c = 10;
// let greatest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
// console.log("The greatest number is:", greatest);



// 12) program to read student num,name,marks and calculate total and average and print result and division */
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question("Enter student number: ", function(num){
//     readline.question("Enter student name: ", function(name){
//         readline.question("Enter marks for subject 1: ", function(marks1){
//             readline.question("Enter marks for subject 2: ", function(marks2){
//                 readline.question("Enter marks for subject 3: ", function(marks3){
//                     const total = parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3);
//                     const average = total / 3;
//                     let division;
//                     if(average >= 60){
//                         division = "First Division";
//                     }
//                     else if(average >= 50){
//                         division = "Second Division";
//                     }
//                     else{
//                         division = "Third Division";
//                     }
//                     console.log("Student Number:", num);
//                     console.log("Student Name:", name);
//                     console.log("Total Marks:", total);
//                     console.log("Average Marks:", average);
//                     console.log("Division:", division);
//                     readline.close();
//                 });
//             });
//         });
//     });
// });



// 13)program to read eno,ename,basic salary and calculate  
// pf,hra,da,net salary and gross salary and print eno,ename,basic salary,
// gross salary and net salary*/

// pf= 12% of basic salary.
// hra=20% of basic salary.
// da= 15% of basic salary.
// gross salary=pf+hra+da+basic salary;
// net salary=gross salary - pf;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter employee number: ", function(eno){
    readline.question("Enter employee name: ", function(ename){
        readline.question("Enter basic salary: ", function(basicSalary){
            const pf = 0.12 * parseFloat(basicSalary);
            const hra = 0.20 * parseFloat(basicSalary);
            const da = 0.15 * parseFloat(basicSalary);
            const grossSalary = pf + hra + da + parseFloat(basicSalary);
            const netSalary = grossSalary - pf;
            console.log("Employee Number:", eno);
            console.log("Employee Name:", ename);
            console.log("Basic Salary:", basicSalary);
            console.log("Gross Salary:", grossSalary);
            console.log("Net Salary:", netSalary);
            readline.close();
        });
    });
});