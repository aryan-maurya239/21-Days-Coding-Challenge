Here are the notes for what you learned today in CSS and JavaScript:

---

### **CSS and JavaScript Notes**

---

### **CSS**

1. **Linking CSS and JS Files**
   - Ensure that your CSS file is correctly linked in the HTML file within the `<head>` section:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```
   - Similarly, link your JavaScript file before the closing `</body>` tag:
     ```html
     <script src="script.js"></script>
     ```

---

### **JavaScript**

1. **`console.log()`**
   - Used to print messages or variables to the console for debugging.
   - Example:
     ```javascript
     console.log("Hello, World!");
     ```

2. **Template Literals**
   - Allow you to embed variables or expressions in strings using backticks `` ` `` and `${}`.
   - Example:
     ```javascript
     let name = "Aryan";
     console.log(`Hello, ${name}!`);
     ```

3. **Operators in JS**
   - Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
   - Assignment Operators: `=`, `+=`, `-=`, etc.
   - Comparison Operators: `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`

4. **Comparison Operators (for Non-Numbers)**
   - Non-numeric data types (like strings) are compared based on lexicographical order.
   - Example:
     ```javascript
     console.log("apple" > "banana"); // false
     ```

5. **Conditional Statements**
   - `if` Statement:
     ```javascript
     if (condition) {
         // code to execute if condition is true
     }
     ```
   - `else if` Statement:
     ```javascript
     if (condition1) {
         // code if condition1 is true
     } else if (condition2) {
         // code if condition2 is true
     }
     ```
   - `else` Statement:
     ```javascript
     if (condition) {
         // code if condition is true
     } else {
         // code if condition is false
     }
     ```

6. **Nested if-else**
   - Placing an `if` or `else-if` statement inside another `if` or `else-if` statement.
   - Example:
     ```javascript
     if (condition1) {
         if (condition2) {
             // code if both conditions are true
         }
     }
     ```

7. **Logical Operators**
   - `&&` (AND): Both conditions must be true.
   - `||` (OR): At least one condition must be true.
   - `!` (NOT): Inverts the truthiness of a condition.

8. **Truthy & Falsy Values**
   - Truthy: Values considered true in a boolean context (e.g., non-zero numbers, non-empty strings).
   - Falsy: Values considered false in a boolean context (e.g., `0`, `""`, `null`, `undefined`, `NaN`).
   - Example:
     ```javascript
     if (0) {
         console.log("This won't execute, because 0 is falsy.");
     }
     ```

9. **Switch Statement**
   - A more concise way to handle multiple conditions.
   - Example:
     ```javascript
     let fruit = "apple";
     switch (fruit) {
         case "banana":
             console.log("Banana is yellow.");
             break;
         case "apple":
             console.log("Apple is red.");
             break;
         default:
             console.log("Unknown fruit.");
     }
     ```

10. **Alerts & Prompts**
    - `alert()`: Displays a message in a dialog box.
    - `prompt()`: Displays a dialog box that prompts the user for input.
    - Example:
      ```javascript
      alert("This is an alert!");
      let name = prompt("What's your name?");
      ```

