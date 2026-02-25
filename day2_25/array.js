console.log("====Array====");

console.log("1 Creating Arrays\n");
var colors = ["Red", "Green", "Blue"];
var fruits = ["Apple", "Banana", "Cherry","Orange", "Mango"];
var cities = ["Patna","Muzaffarpur","Gaya","Bhagalpur"];
var person = ["Gaurav","Krishna","Kundan","Shubham"];

console.log("Colors:", colors);
console.log("Fruits:", fruits);
console.log("Cities:", cities);
console.log("Person:", person);

var myArray = new Array("Hello", "World", "JavaScript");
console.log("\n2My Array:", myArray);

console.log("\n3 Accessing Array Elements\n");
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);
console.log("Fourth fruit:", fruits[fruits.length - 1]);

console.log("\n4 Length of Arrays\n");
console.log("Number of colors:", colors.length);

console.log("\n5 Looping through Arrays\n");
for(var i = 0; i < fruits.length; i++){
    console.log("Fruit at index", i + ":", fruits[i]);
}

console.log("\n6 Adding Element using push()\n");
fruits.push("Pineapple");
console.log("Updated Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);

console.log("n\7 Adding Element using unshift()\n");
fruits.unshift("Strawberry");
console.log("Updated Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);


console.log("\n8 Removing Element using pop()\n");
var removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("Updated Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);


console.log("\n9 Removing Element using shift()\n");
var removedFruit2 = fruits.shift();
console.log("Removed Fruit:", removedFruit2);
console.log("Updated Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);


console.log("\n10 Insert in Middle\n");
fruits.splice(2, 0, "Kiwi");
console.log("Updated Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);


console.log("\n11 Two Dimensional Array\n");
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Element of two dimensional array:\n");
for(let i = 0; i < matrix.length; i++){
    let row = "";
    for(let j = 0; j < matrix[i].length; j++){
        row += matrix[i][j] + " ";
    }
    console.log(row);
}

console.log("===End of Program===");