console.log("1 Creating and Object\n");
var person = {
    name: "Gaurav",
    age: 21,
    gender: "Male",
    displayName: function(){
        console.log("Inside Method -> Name: "+this.name);
    }
}

console.log("Person Object:", person);
console.log("\n2 Accesing Object Proepties\n");
//dot notation
console.log("Name (dot notation): "+person.name);
//bracket notation
console.log("Age (bracket notation): "+person["age"]);

console.log("\n3 Book Object Example\n");
var book = {
    "name": "The Great Gatsby",
    "author": "J. K. Rowling",
    "year": 1925,
};
console.log("Book Object:", book);
console.log("Book Name: "+book.name);
console.log("Book Author: "+book.author);
console.log("Book Year: "+book["year"]);

console.log("\n4 Looping Through Object Properties (for...in)\n");
for(var key in person){
    console.log(key+": "+person[key]);
}

console.log("\n5 Calling Object Method\n");
person.displayName(); // dot notation
person["displayName"](); // bracket notation

console.log("\n6 Complex Object Example\n");
var student = {
    name: "Gaurav",
    age: 21,
    skills : ["JavaScript", "Python", "Java"],
    address : {
        city: "Delhi",
        country: "India",
    },                     
}

console.log("Student Name:", student.name);
console.log("First Skill:",student.skills[0]);
console.log("City:", student.address.city);
console.log("\n=====End of Object ======\n");




var students = [
    {
        id:1,
        name:"Gaurav",
        age:21,
        grade: "A"
    },
    {
        id:2,
        name:"Kundan",
        age:22,
        grade: "B"
    },
    {
        id:3,
        name:"Krishna",
        age:20,
        grade: "A"
    }
];

console.log("Studentss Array Created Successfully\n");
console.log("Accessing First Student:");
console.log("Name:",students[0].name);
console.log("Grade:",students[0].grade);

console.log("\nLoopng using for loop:\n");
for(var i=0;i<students.length;i++){
    console.log("Student "+(i+1)+":");
    console.log("Student ID: "+students[i].id);
    console.log("Name: "+students[i].name);
    console.log("Age: "+students[i].age);
    console.log("Grade: "+students[i].grade);
    console.log("-------------------");
}

