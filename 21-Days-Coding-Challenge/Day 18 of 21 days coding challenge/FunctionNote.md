Here are some notes on functions in JavaScript:

### 1. **What is a Function?**
   - A **function** is a block of code designed to perform a particular task.
   - It can be **reused** multiple times with different values (arguments).

### 2. **Function Declaration**
   - Syntax:
     ```javascript
     function functionName(parameters) {
       // code to be executed
     }
     ```
   - Example:
     ```javascript
     function greet(name) {
       console.log("Hello, " + name + "!");
     }
     greet("Aryan");  // Output: Hello, Aryan!
     ```

### 3. **Function Expression**
   - Functions can also be defined as expressions and assigned to a variable.
   - Example:
     ```javascript
     const greet = function(name) {
       console.log("Hello, " + name + "!");
     };
     greet("Aryan");  // Output: Hello, Aryan!
     ```

### 4. **Anonymous Functions**
   - Functions without a name are called anonymous functions. They are often used in expressions or as arguments in other functions.
   - Example:
     ```javascript
     const greet = function() {
       console.log("Hello!");
     };
     ```

### 5. **Arrow Functions**
   - Introduced in ES6, arrow functions provide a concise syntax for writing functions.
   - Syntax:
     ```javascript
     const functionName = (parameters) => {
       // code to be executed
     };
     ```
   - Example:
     ```javascript
     const greet = (name) => {
       console.log("Hello, " + name + "!");
     };
     greet("Aryan");  // Output: Hello, Aryan!
     ```

### 6. **Parameters and Arguments**
   - **Parameters**: Variables listed as a part of the function definition.
   - **Arguments**: Values passed to the function when it is called.
   - Example:
     ```javascript
     function sum(a, b) {
       return a + b;
     }
     console.log(sum(5, 3));  // Output: 8
     ```

### 7. **Default Parameters**
   - Default parameters allow you to initialize parameters with default values if no arguments are provided.
   - Example:
     ```javascript
     function greet(name = "User") {
       console.log("Hello, " + name + "!");
     }
     greet();  // Output: Hello, User!
     ```

### 8. **Return Statement**
   - The `return` statement stops the execution of a function and returns a value.
   - Example:
     ```javascript
     function sum(a, b) {
       return a + b;
     }
     let result = sum(5, 7);
     console.log(result);  // Output: 12
     ```

### 9. **Function Hoisting**
   - **Function declarations** are hoisted, meaning they can be called before they are defined.
   - Example:
     ```javascript
     greet("Aryan");
     function greet(name) {
       console.log("Hello, " + name + "!");
     }
     ```

### 10. **First-Class Functions**
   - JavaScript functions are **first-class citizens**, meaning:
     - They can be stored in variables.
     - They can be passed as arguments to other functions.
     - They can be returned from other functions.
   - Example:
     ```javascript
     function greet() {
       return "Hello!";
     }
     const message = greet();
     console.log(message);  // Output: Hello!
     ```

### 11. **Immediately Invoked Function Expression (IIFE)**
   - A function that is executed right after its definition.
   - Syntax:
     ```javascript
     (function() {
       console.log("I am an IIFE!");
     })();
     ```
   - Output: `I am an IIFE!`

### 12. **Rest Parameters**
   - The rest parameter (`...args`) allows a function to accept an indefinite number of arguments as an array.
   - Example:
     ```javascript
     function sum(...numbers) {
       return numbers.reduce((total, number) => total + number);
     }
     console.log(sum(1, 2, 3, 4));  // Output: 10
     ```

### 13. **Callback Functions**
   - A callback function is a function passed as an argument to another function.
   - Example:
     ```javascript
     function greet(callback) {
       console.log("Hello!");
       callback();
     }
     function ask() {
       console.log("How are you?");
     }
     greet(ask);  // Output: Hello! How are you?
     ```

### 14. **Higher-Order Functions**
   - A higher-order function is a function that takes another function as an argument or returns a function.
   - Example:
     ```javascript
     function higherOrder(func) {
       func();
     }
     higherOrder(function() {
       console.log("This is a higher-order function.");
     });
     ```

### 15. **Closures**
   - A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
   - Example:
     ```javascript
     function outer() {
       let name = "Aryan";
       function inner() {
         console.log("Hello, " + name);
       }
       return inner;
     }
     const greet = outer();
     greet();  // Output: Hello, Aryan
     ```

### 16. **Function Recursion**
   - A function that calls itself.
   - Example:
     ```javascript
     function factorial(n) {
       if (n === 0) return 1;
       return n * factorial(n - 1);
     }
     console.log(factorial(5));  // Output: 120
     ```

