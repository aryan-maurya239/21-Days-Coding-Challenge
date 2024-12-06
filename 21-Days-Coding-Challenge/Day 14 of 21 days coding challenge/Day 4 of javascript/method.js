
let str = "IloveCoding";
str.slice(5);          // Output: "Coding" (Extracts from index 5 to end)
str.slice(1, 4);       // Output: "lov" (Extracts from index 1 to 4 (non-inclusive))
str.slice(-6);         // Output: "Coding" (Extracts last 6 characters)
console.log(str.replace('love', 'Do'));  // Output: "IDoCoding" ('love' replaced by 'Do')
console.log(str.replace('o', 'D'));      // Output: "IlDveCoding" (Only the first 'o' is replaced by 'D')
// onle first o is replace with d 
// out put : IlDveCoding

console.log(str.repeat(5));  // Output: "IloveCodingIloveCodingIloveCodingIloveCodingIloveCoding" (Repeats the string 5 times)

let msg = 'help!';
console.log(msg.trim().toUpperCase());   // Output: "HELP!" (Trims the string and converts to uppercase)

let name = "MeraName Aryan";
console.log(name.slice(4, 9));           // Output: "Name " (Extracts substring from index 4 to 9)
console.log(name.indexOf('Ar'));         // Output: 9 (Index where "Ar" starts)
console.log(name.replace('Aryan', 'Manish'));   // Output: "MeraName Manish" (Replaces 'Aryan' with 'Manish')
console.log(name.repeat(3));             // Output: "MeraName AryanMeraName AryanMeraName Aryan" (Repeats 3 times)
console.log(name.slice(9, length.name).replace("Aryan", 'Vinit'));  // Output: "Aryan" (Extracts from index 9 till the end and tries to replace "Aryan" with "Vinit", but no effect since `length.name` is incorrect)

let array = ['Aryan', 234, 24.4, "cartun"];
console.log(array[0][4]);  // Output: "n" (Character at index 4 of the first element 'Aryan')
array[0] = 'Sachin';       // Modifies the first element
console.log(array[0]);     // Output: "Sachin" 
console.log(array);        // Output: ["Sachin", 234, 24.4, "cartun"]
array[10] = 34;            // Adds '34' at index 10, leaving empty elements in between
console.log(array);        // Output: ["Sachin", 234, 24.4, "cartun", <6 empty items>, 34]
array.push('sonal');       // Adds 'sonal' at the end
console.log(array.pop());  // Output: "sonal" (Removes and returns the last element)
array.unshift('Ram');      // Adds 'Ram' to the start
array.shift();             // Removes the first element ('Ram')

let month = ['january', 'july', 'march', 'august'];
console.log(month);        // Output: ["january", "july", "march", "august"]
month[1] = 'june';         // Replaces 'july' with 'june'
console.log(month);        // Output: ["january", "june", "march", "august"]
