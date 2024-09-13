In JavaScript, functions are a key concept that allows for the creation of reusable code blocks. Here's a detailed breakdown of functions in JavaScript:

### 1. **Function Declaration**
A function can be defined using the `function` keyword, followed by the function name, a set of parentheses, and a code block.

```js
function greet(name) {
  console.log("Hello, " + name);
}
greet("Aryan");  // Output: Hello, Aryan
```

- **Function Name**: In the example, `greet` is the function name.
- **Parameters**: The function can accept parameters (`name` in this case) which can be used inside the function.
- **Return Value**: A function can return a value using the `return` statement.

```js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // Output: 8
```

### 2. **Function Expression**
In JavaScript, functions can also be defined using expressions. This allows you to assign a function to a variable.

```js
const square = function (x) {
  return x * x;
};
console.log(square(4));  // Output: 16
```

Here, `square` is a variable that holds the function definition.

### 3. **Arrow Functions**
Introduced in ES6, arrow functions provide a shorter syntax for writing functions. They use the `=>` (arrow) syntax and are especially useful in callbacks.

```js
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));  // Output: 6
```

If the function body contains only a single expression, the `return` statement can be omitted.

### 4. **Anonymous Functions**
These are functions without a name. They are often used as arguments to other functions or event handlers.

```js
setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);
```

### 5. **Higher-Order Functions**
A higher-order function is one that either takes a function as an argument or returns a function. Common examples include `map`, `filter`, and `reduce`.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);  // Output: [2, 4, 6, 8, 10]
```

### 6. **IIFE (Immediately Invoked Function Expression)**
An IIFE is a function that is executed as soon as it is defined. This is useful for creating isolated scopes.

```js
(function () {
  console.log("IIFE executed");
})();
```

### 7. **Default Parameters**
JavaScript allows you to set default parameter values for functions.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();  // Output: Hello, Guest
```

### 8. **Rest Parameters (`...`)**
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // Output: 10
```

### 9. **Callback Functions**
A callback is a function passed as an argument to another function, and it is executed after the completion of that function.

```js
function performAction(action, callback) {
  console.log("Performing action:", action);
  callback();
}

performAction("Save", function () {
  console.log("Action saved");
});
```

### 10. **Closures**
A closure gives you access to an outer function's scope from an inner function. This is commonly used to maintain private variables.

```js
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable, innerVariable);
  };
}

const newFunction = outerFunction("outer");
newFunction("inner");  // Output: outer inner
```

### 11. **Function Scope and Hoisting**
Functions in JavaScript are hoisted, meaning they can be called before they are defined (but only for function declarations, not expressions).

```js
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

However, this doesn’t work with function expressions:

```js
sayHello();  // Error: sayHello is not defined

const sayHello = function() {
  console.log("Hello!");
};
```

### 12. **Method Functions**
Functions can also be methods of objects. When a function is stored as a property of an object, it’s called a method.

```js
const person = {
  name: "Aryan",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
person.greet();  // Output: Hello, Aryan
```

### 13. **Arrow Functions and `this`**
Arrow functions do not bind their own `this`. Instead, they inherit `this` from the surrounding scope.

```js
const obj = {
  name: "Aryan",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};
obj.greet();  // Output: Hello, Aryan
```

In the example above, the arrow function inside `setTimeout` inherits the `this` value from the surrounding method.

---

These are some of the key aspects of functions in JavaScript. Functions are versatile and essential to mastering JavaScript, enabling everything from simple tasks to complex programming patterns like functional programming.