The JavaScript `Math` object is a built-in object that provides properties and methods for mathematical constants and functions. It's not a constructor, so all properties and methods are static and can be accessed directly as `Math.property` or `Math.method()`.

Here's a full breakdown of the `Math` object in JavaScript:

### 1. **Mathematical Constants:**
These constants represent commonly used mathematical values.

- **Math.PI**  
  Represents the value of π (approx 3.14159).
  ```js
  console.log(Math.PI);  // Output: 3.141592653589793
  ```

- **Math.E**  
  Euler's constant (approx 2.718).
  ```js
  console.log(Math.E);  // Output: 2.718281828459045
  ```

- **Math.LN2**  
  Natural logarithm of 2 (approx 0.693).
  ```js
  console.log(Math.LN2);  // Output: 0.6931471805599453
  ```

- **Math.LN10**  
  Natural logarithm of 10 (approx 2.303).
  ```js
  console.log(Math.LN10);  // Output: 2.302585092994046
  ```

- **Math.LOG2E**  
  Log base 2 of Euler's constant (approx 1.442).
  ```js
  console.log(Math.LOG2E);  // Output: 1.4426950408889634
  ```

- **Math.LOG10E**  
  Log base 10 of Euler's constant (approx 0.434).
  ```js
  console.log(Math.LOG10E);  // Output: 0.4342944819032518
  ```

- **Math.SQRT1_2**  
  Square root of 1/2 (approx 0.707).
  ```js
  console.log(Math.SQRT1_2);  // Output: 0.7071067811865476
  ```

- **Math.SQRT2**  
  Square root of 2 (approx 1.414).
  ```js
  console.log(Math.SQRT2);  // Output: 1.4142135623730951
  ```

---

### 2. **Math Methods:**

The `Math` object provides a variety of methods to perform mathematical operations.

#### a) **Rounding Methods:**
- **Math.round(x)**  
  Rounds `x` to the nearest integer.
  ```js
  console.log(Math.round(4.6));  // Output: 5
  ```

- **Math.ceil(x)**  
  Rounds `x` up to the next largest integer.
  ```js
  console.log(Math.ceil(4.1));  // Output: 5
  ```

- **Math.floor(x)**  
  Rounds `x` down to the largest integer less than or equal to `x`.
  ```js
  console.log(Math.floor(4.9));  // Output: 4
  ```

- **Math.trunc(x)**  
  Returns the integer part of `x` by removing any fractional digits.
  ```js
  console.log(Math.trunc(4.9));  // Output: 4
  ```

#### b) **Arithmetic Methods:**
- **Math.abs(x)**  
  Returns the absolute value of `x`.
  ```js
  console.log(Math.abs(-7.25));  // Output: 7.25
  ```

- **Math.max(...values)**  
  Returns the largest of zero or more numbers.
  ```js
  console.log(Math.max(1, 5, 3));  // Output: 5
  ```

- **Math.min(...values)**  
  Returns the smallest of zero or more numbers.
  ```js
  console.log(Math.min(1, 5, 3));  // Output: 1
  ```

- **Math.pow(base, exponent)**  
  Returns `base` to the power of `exponent`.
  ```js
  console.log(Math.pow(2, 3));  // Output: 8
  ```

- **Math.sqrt(x)**  
  Returns the square root of `x`.
  ```js
  console.log(Math.sqrt(9));  // Output: 3
  ```

- **Math.cbrt(x)**  
  Returns the cube root of `x`.
  ```js
  console.log(Math.cbrt(8));  // Output: 2
  ```

- **Math.hypot(...values)**  
  Returns the square root of the sum of the squares of its arguments.
  ```js
  console.log(Math.hypot(3, 4));  // Output: 5
  ```

#### c) **Trigonometric Methods:**
- **Math.sin(x)**  
  Returns the sine of `x` (in radians).
  ```js
  console.log(Math.sin(Math.PI / 2));  // Output: 1
  ```

- **Math.cos(x)**  
  Returns the cosine of `x` (in radians).
  ```js
  console.log(Math.cos(0));  // Output: 1
  ```

- **Math.tan(x)**  
  Returns the tangent of `x` (in radians).
  ```js
  console.log(Math.tan(Math.PI / 4));  // Output: 1
  ```

- **Math.asin(x)**  
  Returns the arcsine of `x` (in radians).
  ```js
  console.log(Math.asin(1));  // Output: 1.5707963267948966
  ```

- **Math.acos(x)**  
  Returns the arccosine of `x` (in radians).
  ```js
  console.log(Math.acos(1));  // Output: 0
  ```

- **Math.atan(x)**  
  Returns the arctangent of `x` (in radians).
  ```js
  console.log(Math.atan(1));  // Output: 0.7853981633974483
  ```

- **Math.atan2(y, x)**  
  Returns the arctangent of the quotient of its arguments.
  ```js
  console.log(Math.atan2(1, 1));  // Output: 0.7853981633974483
  ```

#### d) **Logarithmic Methods:**
- **Math.log(x)**  
  Returns the natural logarithm (base `e`) of `x`.
  ```js
  console.log(Math.log(1));  // Output: 0
  ```

- **Math.log10(x)**  
  Returns the base-10 logarithm of `x`.
  ```js
  console.log(Math.log10(100));  // Output: 2
  ```

- **Math.log2(x)**  
  Returns the base-2 logarithm of `x`.
  ```js
  console.log(Math.log2(8));  // Output: 3
  ```

#### e) **Exponential Methods:**
- **Math.exp(x)**  
  Returns `e^x`, where `x` is the argument, and `e` is Euler's constant.
  ```js
  console.log(Math.exp(1));  // Output: 2.718281828459045
  ```

- **Math.expm1(x)**  
  Returns `e^x - 1`.
  ```js
  console.log(Math.expm1(1));  // Output: 1.718281828459045
  ```

#### f) **Random and Miscellaneous Methods:**
- **Math.random()**  
  Returns a pseudo-random number between `0` and `1` (exclusive).
  ```js
  console.log(Math.random());  // Output: Random number between 0 and 1
  ```

- **Math.sign(x)**  
  Returns the sign of a number, indicating whether the number is positive, negative, or zero.
  ```js
  console.log(Math.sign(-10));  // Output: -1
  ```

- **Math.clz32(x)**  
  Returns the number of leading zero bits in the 32-bit binary representation of a number.
  ```js
  console.log(Math.clz32(1));  // Output: 31
  ```

- **Math.imul(a, b)**  
  Performs a 32-bit integer multiplication of `a` and `b`.
  ```js
  console.log(Math.imul(2, 3));  // Output: 6
  ```

- **Math.fround(x)**  
  Returns the nearest 32-bit single precision float representation of `x`.
  ```js
  console.log(Math.fround(5.5));  // Output: 5.5
  ```

- **Math.hypot(...values)**  
  Returns the square root of the sum of squares of its arguments.
  ```js
  console.log(Math.hypot(3, 4));  // Output: 5
  ```

This covers most of the commonly used properties and methods in the `Math` object.