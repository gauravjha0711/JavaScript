console.log("String in javascript\n");

var str1 = "Hello, World!";
var str2 = 'JavaScript is fun!';
var str3 = `Template literals allow for multi-line strings and interpolation.`;

console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);

console.log("\n3 Escsping Quotes\n");
var str4 = 'it\'s a nice day!';
var str5 = "She said, \"Hello!\"";
var str6 = "This is a backslash: \\";

console.log("str4:", str4);
console.log("str5:", str5);
console.log("str6:", str6);

console.log("\n4 Escape Sequences\n");
var escape1 = "First Line\nSecond Line";
var escape2 = "Column1\tColumn2\tColumn3";
var escape3 = "This is a backslash: \\";

console.log("escape1:", escape1);
console.log("escape2:", escape2);
console.log("escape3:", escape3);

console.log("\n5 Length of string\n");
console.log("Length of str1:", str1.length);
console.log("Length of str2:", str2.length);
console.log("Length of str3:", str3.length);

console.log("\n6 Finding substring\n");

var strfind = "If the facts don't fit the theory, change the facts.";
var pos1 = strfind.indexOf("facts");
var pos2 = strfind.lastIndexOf("facts");

console.log("First occurrence of 'facts':", pos1);
console.log("Last occurrence of 'facts':", pos2);


console.log("\n7 slice() method\n");
var strSlice = "The quick brown fox jumps over the lazy dog.";
var subStr1 = strSlice.slice(4, 9);
console.log("Substring from index 4 to 9:", subStr1);


console.log("\n8 substring() method\n");
console.log("Substring from index 4 to 9:", strSlice.substring(4, 9));
