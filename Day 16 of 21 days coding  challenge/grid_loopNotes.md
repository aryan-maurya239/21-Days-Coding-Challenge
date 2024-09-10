### CSS Grid Properties:

CSS Grid is a powerful layout system that allows for the creation of flexible, responsive, and complex grid-based layouts. Below are detailed explanations of essential properties in CSS Grid:

---

### **1. `display: grid`**
This property turns an element into a grid container. Inside a grid container, its children (grid items) are automatically positioned into a grid.

#### Example:
```css
.container {
  display: grid;
}
```

---

### **2. `grid-template-columns` & `grid-template-rows`**
These properties define the structure of your grid by setting the number of columns and rows, and the size of each column and row in the grid.

- **`grid-template-columns`**: Defines the number and size of columns.
- **`grid-template-rows`**: Defines the number and size of rows.

You can use different units like pixels (`px`), percentages (`%`), `fr` (fraction of available space), and more.

#### Example:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;  /* 2 columns: 1/3 and 2/3 of available width */
  grid-template-rows: 100px auto;  /* 2 rows: 100px and auto height */
}
```

---

### **3. `grid-gap`, `row-gap`, and `column-gap`**
These properties define the space between grid items.

- **`grid-gap`**: A shorthand property for both row and column gaps.
- **`row-gap`**: Specifies the gap between rows.
- **`column-gap`**: Specifies the gap between columns.

#### Example:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;  /* 20px gap between both rows and columns */
}
```

---

### **4. `grid-auto-rows` & `grid-auto-columns`**
These properties are used to specify the size of rows and columns that are created automatically (i.e., when items are placed outside the explicitly defined grid).

- **`grid-auto-rows`**: Defines the size of automatically created rows.
- **`grid-auto-columns`**: Defines the size of automatically created columns.

#### Example:
```css
.container {
  display: grid;
  grid-auto-rows: 150px;
  grid-auto-columns: 100px;
}
```

---

### **5. `grid-auto-flow`**
This property controls how auto-placed items are added to the grid. The default value is `row`, but it can be changed to `column`, `dense`, or both.

- **`row`**: Items are placed row by row.
- **`column`**: Items are placed column by column.
- **`dense`**: Items try to fill holes in the grid.

#### Example:
```css
.container {
  display: grid;
  grid-auto-flow: column;
}
```

---

### **6. `grid-area`**
This property allows you to assign grid items to specific areas of the grid using grid line numbers.

- Can also be used with the **grid-template-areas** property for named areas.

#### Example:
```css
.item1 {
  grid-area: 1 / 1 / 3 / 3;  /* From row 1 to row 3, from column 1 to column 3 */
}
```

---

### **7. `justify-items`, `align-items`, `justify-content`, and `align-content`**
These properties control the alignment of grid items and the grid container itself.

- **`justify-items`**: Aligns grid items along the horizontal axis.
- **`align-items`**: Aligns grid items along the vertical axis.
- **`justify-content`**: Aligns the entire grid horizontally within its container.
- **`align-content`**: Aligns the entire grid vertically within its container.

#### Example:
```css
.container {
  display: grid;
  justify-items: center;  /* Centers items horizontally */
  align-items: center;    /* Centers items vertically */
}
```

---

### **8. `grid-template-areas`**
This property allows you to name specific grid areas and assign grid items to them. It makes grid layout easier to understand and manage for complex layouts.

#### Example:
```css
.container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

---

### **9. `grid-column` & `grid-row`**
These shorthand properties define how many columns or rows a grid item should span.

- **`grid-column`**: Shorthand for `grid-column-start` and `grid-column-end`.
- **`grid-row`**: Shorthand for `grid-row-start` and `grid-row-end`.

#### Example:
```css
.item1 {
  grid-column: 1 / 3;  /* Spans across the first and second columns */
  grid-row: 2 / 4;     /* Spans across the second and third rows */
}
```

---

### **10. `place-items`**
This is a shorthand for setting both `align-items` and `justify-items` in one line.

#### Example:
```css
.container {
  display: grid;
  place-items: center;  /* Center items both horizontally and vertically */
}
```

---

### **11. `place-content`**
This is a shorthand for setting both `align-content` and `justify-content`.

#### Example:
```css
.container {
  display: grid;
  place-content: center;  /* Center the entire grid horizontally and vertically */
}
```

---

### **12. `grid-template`**
This is a shorthand for setting `grid-template-columns`, `grid-template-rows`, and `grid-template-areas` all in one line.

#### Example:
```css
.container {
  display: grid;
  grid-template: 
    "header header" 50px
    "sidebar main" auto
    "footer footer" 50px / 100px 1fr;
}
```

---

### **13. `minmax()`**
This function is used to define a range between a minimum and maximum size for a grid track (column or row).

#### Example:
```css
.container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr);  /* Column will be at least 100px, CSS Grid is a robust layout system with a wide array of properties that allow for complex layouts to be easily constructed and controlled. Mastering these properties gives you the flexibility to create dynamic and responsive designs!but can grow to fill the available space */
}
```

---

### **14. `repeat()`**
This function allows you to repeat grid tracks (columns or rows) multiple times without manually defining each track.

#### Example:
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Creates 3 columns, each taking up an equal fraction of space */
}
```

---


### JavaScript Loops: Detailed Notes

Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true. They are essential for handling repetitive tasks, especially when dealing with arrays, objects, and other data structures. Below are the different types of loops in JavaScript and detailed explanations with examples.

---

### **1. `for` Loop**
The `for` loop is the most common loop in JavaScript. It repeats a block of code a specific number of times.

#### Syntax:
```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

#### Explanation:
- **Initialization**: Initializes a variable (runs once at the beginning).
- **Condition**: The loop runs as long as this condition is true.
- **Increment/Decrement**: Updates the variable after each iteration.

#### Example:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}
```

---

### **2. `while` Loop**
The `while` loop repeats a block of code as long as a specified condition is true. It's useful when the number of iterations is not predetermined.

#### Syntax:
```javascript
while (condition) {
  // code to be executed
}
```

#### Example:
```javascript
let i = 0;
while (i < 5) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
  i++;
}
```

---

### **3. `do...while` Loop**
The `do...while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once, even if the condition is false at the start.

#### Syntax:
```javascript
do {
  // code to be executed
} while (condition);
```

#### Example:
```javascript
let i = 0;
do {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

---

### **4. `for...of` Loop**
The `for...of` loop is used to iterate over iterable objects (like arrays, strings, maps, and sets). It allows you to access the values of an iterable directly.

#### Syntax:
```javascript
for (let value of iterable) {
  // code to be executed
}
```

#### Example:
```javascript
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);  // Outputs: apple, banana, cherry
}
```

---

### **5. `for...in` Loop**
The `for...in` loop is used to iterate over the **enumerable properties** of an object. It’s commonly used with objects.

#### Syntax:
```javascript
for (let key in object) {
  // code to be executed
}
```

#### Example:
```javascript
let person = { name: 'Aryan', age: 22, city: 'Delhi' };
for (let key in person) {
  console.log(key + ': ' + person[key]);  // Outputs: name: Aryan, age: 22, city: Delhi
}
```

---

### **6. Nested Loops**
A loop inside another loop is called a **nested loop**. Each iteration of the outer loop triggers a full iteration of the inner loop.

#### Example:
```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```
**Output**:
```
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
i=2, j=2
i=2, j=3
i=3, j=1
i=3, j=2
i=3, j=3
```

---

### **7. Control Flow Statements in Loops**

#### **Break**:
The `break` statement is used to exit the loop immediately, even if the loop condition is still true.

#### Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;  // Loop stops when i equals 3
  }
  console.log(i);  // Outputs: 0, 1, 2
}
```

#### **Continue**:
The `continue` statement skips the current iteration and moves to the next one.

#### Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;  // Skips the iteration when i equals 3
  }
  console.log(i);  // Outputs: 0, 1, 2, 4
}
```

---

### **8. Infinite Loops**
An **infinite loop** occurs when the loop condition never becomes false, causing the loop to run indefinitely. Infinite loops should be avoided, as they can crash the program or browser.

#### Example:
```javascript
while (true) {
  console.log('This will run forever!');  // Be cautious!
}
```

---

### **9. Looping Through Arrays**
Loops are commonly used to iterate over arrays and perform actions on the elements.

#### Example:
```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);  // Outputs: 1, 2, 3, 4, 5
}
```

### **10. `forEach` Method**
The `forEach` method is a higher-order function used to loop through arrays.

#### Example:
```javascript
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit) {
  console.log(fruit);  // Outputs: apple, banana, cherry
});
```

---

### Summary of Key Points:
- **`for` Loop**: Fixed number of iterations, commonly used with arrays.
- **`while` Loop**: Continues until the condition is false, used when the number of iterations is unknown.
- **`do...while` Loop**: Executes code at least once, even if the condition is false.
- **`for...of` Loop**: Iterates over values of iterable objects.
- **`for...in` Loop**: Iterates over object properties.
- **Control Flow**: Use `break` to exit loops early and `continue` to skip the current iteration.

Loops allow for efficient iteration over data and are essential in programming for solving a variety of tasks.
