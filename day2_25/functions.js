//=========Function in JavaScript=====
console.log("Defining and calling a function")
function sayHello(){
    console.log("Hello, Welcome to this Website")
}
sayHello()

// default Parameter
function greet(name="Gaurav"){
    console.log("hello "+name);
}
greet()
greet("Rohan")

// returning value
function getSum(num1,num2){
    var total=num1+num2
    return total
}
console.log(getSum(20,40))
console.log(getSum(40,40))

// returning multiple value
function divideNumber(dividend,divisor){
    var quotient=dividend/divisor
    var arr=[dividend,divisor,quotient]
    return arr
}
var all=divideNumber(10,2)
console.log("Dividend: "+all[0])
console.log("Divisor: "+all[1])
console.log("Quotient: "+all[2])

// return multiple value using object
function getValue(){
    return{
        x:10,
        y:20
    };
}
let res=getValue()
console.log("x: "+res.x)
console.log("y: "+res.y)

// with output parameter
function modifyObject(obj){
    obj.a=100
    obj.b=200
};
let obres={};
modifyObject(obres)
console.log("A: "+obres.a)
console.log("B: "+obres.b)

// destructuring
function getCoordinates(){
    return {x:50,y:75};
}
let {x,y}=getCoordinates();
console.log("X: "+x)
console.log("Y: "+y)

//Function Expression

var SumExpression=function(num1,num2){
    var total=num1+num2
    return total
}
console.log("sum is: "+SumExpression(10,20))
var sum=SumExpression(7,25)
console.log("Sum is: "+sum)

// arrow function
var let=(a,b)=>{
    return a+b
}
console.log("Sum is: "+let(10,30))

// single line function
var multiply=(a,b)=>a*b
console.log("Multiply is: "+multiply(10,30))

// arrow function without parameter
var greet=()=>console.log("Hello world...")
greet()

// arrow function with array
var squre=num=>num*num
console.log("Square are: "+squre(6))

// aroor function with array
let number=[1,2,3,4,5]
number.forEach(num=>{
    console.log("Number is: "+num)
})

// Arrow function with map
let double=number.map(num=>num*2)
console.log(double)

// normal functin inside object
let person1={
    name:"Gaurav...",
    greet:function(){
        console.log("Name is: "+this.name)
    }
}
person1.greet()

// arrow function object
var person4={
    name:"Kundan",
    greet:()=>{
        console.log("Name is: "+this.name)
    }
}
person4.greet()