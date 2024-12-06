Here are the notes for the JavaScript topics you learned today:

---

### **JavaScript Notes**

---

#### **1. Introduction to JavaScript**
   - JavaScript is a powerful programming language used to make web pages interactive. It can run on the client side (in the browser) and on the server side (using Node.js).

---

#### **2. Using the Console**
   - The console is a tool for testing and debugging JavaScript code. 
   - You can access it through the browser's Developer Tools (`F12` or `Ctrl + Shift + I`).
   - Use `console.log()` to print messages or variables to the console:
     ```javascript
     console.log("Hello, World!");
     ```

---

#### **3. What is a Variable?**
   - Variables are used to store data that can be used and manipulated in your code.
   - Declare a variable using `var`, `let`, or `const`:
     ```javascript
     let name = "Aryan";
     const age = 21;
     ```

---

#### **4. Data Types in JavaScript**
   - JavaScript supports various data types:
     - **Primitive types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
     - **Objects**: Complex data structures like arrays and functions.
   - Example:
     ```javascript
     let isLearning = true; // boolean
     let score = 95;        // number
     ```

---

#### **5. Numbers in JavaScript**
   - JavaScript handles numbers (integers and floating-point) natively.
   - Arithmetic operations can be performed directly:
     ```javascript
     let sum = 10 + 5;
     let product = 10 * 5;
     ```

---

#### **6. Operations in JavaScript**
   - Common arithmetic operators: `+`, `-`, `*`, `/`, `%`
   - Example:
     ```javascript
     let division = 10 / 2; // 5
     let remainder = 10 % 3; // 1
     ```

---

#### **7. NaN in JavaScript**
   - `NaN` stands for "Not-a-Number" and represents an undefined or unrepresentable value, particularly in numerical calculations.
   - Example:
     ```javascript
     let result = "text" * 5; // NaN
     ```

---

#### **8. Operator Precedence**
   - Operator precedence determines the order in which operations are performed.
   - Multiplication and division have higher precedence than addition and subtraction.
   - Parentheses can be used to override precedence:
     ```javascript
     let result = (10 + 5) * 2; // 30
     ```

---

#### **9. Assignment Operators**
   - Assignment operators assign values to variables. Examples include `=`, `+=`, `-=`, `*=`, `/=`.
   - Example:
     ```javascript
     let a = 10;
     a += 5; // a is now 15
     ```

---

#### **10. Unary Operators**
   - Unary operators operate on a single operand. Common unary operators include `++` (increment), `--` (decrement), and `!` (logical NOT).
   - Example:
     ```javascript
     let b = 5;
     b++; // b is now 6
     ```

---

#### **11. Identifier Rules**
   - Identifiers are names given to variables, functions, etc.
   - Rules for naming:
     - Must start with a letter, `$`, or `_`.
     - Cannot start with a number.
     - Are case-sensitive.
     - Reserved keywords cannot be used as identifiers.

---

#### **12. Booleans in JavaScript**
   - Booleans represent two values: `true` or `false`.
   - Used in conditional statements to control the flow of the program:
     ```javascript
     let isStudent = true;
     if (isStudent) {
         console.log("You are a student.");
     }
     ```

---

#### **13. What is TypeScript?**
   - TypeScript is a superset of JavaScript that adds static types, allowing for better error-checking during development.
   - TypeScript code is compiled into JavaScript.

---

#### **14. Strings in JavaScript**
   - Strings are sequences of characters, enclosed in single (`'`) or double (`"`) quotes.
   - Example:
     ```javascript
     let greeting = "Hello, World!";
     ```

---

#### **15. String Indices**
   - Strings are zero-indexed, meaning the first character is at index `0`.
   - Access characters using square brackets:
     ```javascript
     let firstChar = greeting[0]; // 'H'
     ```

---

#### **16. `null` & `undefined` in JavaScript**
   - `null` represents the intentional absence of any object value.
   - `undefined` indicates that a variable has been declared but not yet assigned a value.
   - Example:
     ```javascript
     let emptyValue = null;
     let unassignedValue;
     ```

---

