let color = ['red', 'yellow', 'blue'];
console.log(color.indexOf('yellow'));  // Output: 1 (Index of 'yellow')
console.log(color.indexOf('green'));   // Output: -1 (Element 'green' not found)
console.log(color.includes('green'));  // Output: false (Checks if 'green' is present)
console.log(color.includes('red'));    // Output: true (Checks if 'red' is present)

let number = [3265, 12, 34, , 65, 33]; // An array with a missing element at index 3
console.log(color + number);           // Output: "red,yellow,blue3265,12,34,,65,33" (Concatenates as strings)
console.log(color.concat(number));     // Output: ['red', 'yellow', 'blue', 3265, 12, 34, empty, 65, 33] (Concatenates arrays)

console.log(color.concat(number).reverse()); // Output: [33, 65, empty, 34, 12, 3265, 'blue', 'yellow', 'red'] (Reverses the combined array)

console.log(color.slice(2));          // Output: ['blue'] (Extracts from index 2 to end)
console.log(color.slice(2, 4));       // Output: ['blue'] (Extracts from index 2 to 4 (non-inclusive))
console.log(color.slice(-3));         // Output: ['red', 'yellow', 'blue'] (Extracts last 3 elements)
console.log(color.slice(-1));         // Output: ['blue'] (Extracts last element)

// color.splice(1) would remove all elements from index 1 onwards, if uncommented.

color.splice(2);                      // Removes elements from index 2 onwards
console.log(color);                   // Output: ['red', 'yellow']

color.splice(0, 1);                   // Removes 1 element at index 0
console.log(color);                   // Output: ['yellow']

color.splice(0, 1, 'red', 'yellow', 'pink');  // Replaces 1 element at index 0 with 3 elements
console.log(color);                   // Output: ['red', 'yellow', 'pink']

console.log(color.sort());            // Output: ['pink', 'red', 'yellow'] (Sorts alphabetically)
console.log(number.sort());           // Output: [12, 33, 34, 3265, 65, empty] (Sorts numbers as strings)

months = ['januarya', 'july', 'march', 'august'];
months.splice(0, 2, 'july', 'june');  // Replaces first 2 elements with 'july' and 'june'
console.log(months);                  // Output: ['july', 'june', 'march', 'august']

const arr = [23, 43, 45, 65, 21];
arr[8] = 54;                          // Adds element at index 8, leaving empty slots
console.log(arr);                     // Output: [23, 43, 45, 65, 21, empty × 3, 54]

// Nested array
nestedArr = [[1, 2, 4, 5], [6, 7, 8, 9, 10], [1, 2, 43, 6, 7]];
console.log(nestedArr);               // Output: [[1, 2, 4, 5], [6, 7, 8, 9, 10], [1, 2, 43, 6, 7]]
console.log(nestedArr[1][2]);         // Output: 8 (Element at index 2 of the second array)

tiktok = [['X', ' ', 'O'], [' ', 'X', ' '], ['O', ' ', 'X']];
console.log(tiktok);                  // Output: [['X', ' ', 'O'], [' ', 'X', ' '], ['O', ' ', 'X']]
tiktok[0][1] = 0;                     // Modifies the middle value of the first sub-array
console.log(tiktok);                  // Output: [['X', 0, 'O'], [' ', 'X', ' '], ['O', ' ', 'X']]
