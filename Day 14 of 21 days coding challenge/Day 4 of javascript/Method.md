### 1. `slice()`
The `slice()` method extracts a part of a string (or array) and returns it as a new string, without modifying the original string.

**Syntax**:  
`string.slice(startIndex, endIndex)`  
- `startIndex`: The position where to start the extraction.
- `endIndex`: The position where to end the extraction (non-inclusive). If omitted, extracts to the end of the string.

**Example**:
```js
let str = "IloveCoding";
console.log(str.slice(5));       // Output: "Coding" (from index 5 to end)
console.log(str.slice(1, 4));    // Output: "lov" (from index 1 to 4 (non-inclusive))
```

**Note**: Negative indexes count from the end of the string.
```js
console.log(str.slice(-6));      // Output: "Coding" (last 6 characters)
```

---

### 2. `replace()`
The `replace()` method searches for a specified value in a string and replaces it with another value. By default, it replaces only the first occurrence.

**Syntax**:  
`string.replace(searchValue, newValue)`  
- `searchValue`: The string or regular expression to search for.
- `newValue`: The string to replace the search value with.

**Example**:
```js
let str = "IloveCoding";
console.log(str.replace('love', 'Do'));  // Output: "IDoCoding" (replaces 'love' with 'Do')
console.log(str.replace('o', 'D'));      // Output: "IlDveCoding" (only replaces the first 'o')
```

**Note**: To replace all occurrences, a regular expression with the global flag (`/g`) can be used.
```js
console.log(str.replace(/o/g, 'D'));  // Output: "IlDveCDding" (replaces all 'o's)
```

---

### 3. `repeat()`
The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string.

**Syntax**:  
`string.repeat(count)`  
- `count`: The number of times the string should be repeated.

**Example**:
```js
let str = "IloveCoding";
console.log(str.repeat(3));  // Output: "IloveCodingIloveCodingIloveCoding"
```

---

### 4. `trim()`
The `trim()` method removes whitespace from both ends of a string. It does not modify the original string.

**Syntax**:  
`string.trim()`

**Example**:
```js
let msg = "  help!  ";
console.log(msg.trim());  // Output: "help!"
```

---

### 5. `toUpperCase()`
The `toUpperCase()` method converts all the characters of a string to uppercase.

**Syntax**:  
`string.toUpperCase()`

**Example**:
```js
let msg = "help!";
console.log(msg.toUpperCase());  // Output: "HELP!"
```

---

### 6. `indexOf()`
The `indexOf()` method returns the index of the first occurrence of a specified value in a string. If the value is not found, it returns `-1`.

**Syntax**:  
`string.indexOf(searchValue, startIndex)`  
- `searchValue`: The value to search for.
- `startIndex` (optional): The position to start the search from.

**Example**:
```js
let name = "MeraName Aryan";
console.log(name.indexOf('Ar'));  // Output: 9 (index where "Ar" starts)
```

---

### 7. `unshift()` & `shift()` (Array Methods)
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.
- `shift()`: Removes the first element from an array and returns that removed element.

**Syntax**:
```js
array.unshift(element1, ..., elementN)
array.shift()
```

**Example**:
```js
let array = [2, 4, 6];
array.unshift(1);    // Adds 1 to the beginning
console.log(array);  // Output: [1, 2, 4, 6]

array.shift();       // Removes the first element
console.log(array);  // Output: [2, 4, 6]
```

---

### 8. `push()` & `pop()` (Array Methods)
- `push()`: Adds one or more elements to the end of an array and returns the new length.
- `pop()`: Removes the last element from an array and returns that element.

**Syntax**:
```js
array.push(element1, ..., elementN)
array.pop()
```

**Example**:
```js
let array = [2, 4, 6];
array.push(8);        // Adds 8 to the end
console.log(array);   // Output: [2, 4, 6, 8]

array.pop();          // Removes the last element
console.log(array);   // Output: [2, 4, 6]
```

---

### 9. Array Indexing
You can access individual elements of an array by their index. If the element at that index is a string, you can access individual characters of that string using a second index.

**Example**:
```js
let array = ['Aryan', 234, 24.4, 'cartun'];
console.log(array[0][4]);  // Output: "n" (5th character of 'Aryan')
```

---

### 10. Array Direct Assignment
You can directly assign values to specific indexes in an array, even if the index doesn't yet exist. Unassigned positions between defined indexes will remain empty.

**Example**:
```js
let array = ['Aryan', 234];
array[10] = 34;
console.log(array);  // Output: ['Aryan', 234, <8 empty items>, 34]
```

---

### 11. `replace()` with `slice()`
The `replace()` method can be combined with the `slice()` method to modify specific parts of a string.

**Example**:
```js
let name = "MeraName Aryan";
console.log(name.slice(9).replace("Aryan", 'Vinit'));  // Output: "Vinit"
```

---

### 12. `indexOf()` (Array)
The `indexOf()` method can also be used with arrays to find the index of a specific element in the array.

**Example**:
```js
let months = ['january', 'june', 'march', 'august'];
console.log(months.indexOf('june'));  // Output: 1
```

These methods provide powerful ways to manipulate strings and arrays in JavaScript.