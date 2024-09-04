The CSS `transform` property is used to apply transformations to elements, such as rotating, scaling, skewing, or translating them. It allows you to modify the appearance of an element without affecting its surrounding layout.

### Syntax:
```css
transform: none | transform-functions;
```

### Common Transform Functions:

1. **`rotate(angle)`**: Rotates the element by the specified angle.  
   ```css
   transform: rotate(45deg); /* Rotates the element 45 degrees clockwise */
   ```

2. **`scale(x, y)`**: Scales the element by the specified factors in the x (horizontal) and y (vertical) directions.  
   ```css
   transform: scale(1.5, 2); /* Scales the width by 1.5 and the height by 2 */
   ```

3. **`translate(x, y)`**: Moves the element by the specified distances in the x (horizontal) and y (vertical) directions.  
   ```css
   transform: translate(50px, 100px); /* Moves the element 50px right and 100px down */
   ```

4. **`skew(x-angle, y-angle)`**: Skews the element by the specified angles along the x and y axes.  
   ```css
   transform: skew(20deg, 10deg); /* Skews the element 20 degrees along the x-axis and 10 degrees along the y-axis */
   ```

5. **`matrix(a, b, c, d, e, f)`**: Applies a 2D transformation using a matrix of six values.  
   ```css
   transform: matrix(1, 0.5, -0.5, 1, 0, 0); /* Complex transformation using matrix */
   ```

### Multiple Transformations:
You can apply multiple transformations by chaining them together, separated by spaces.
```css
transform: translate(50px, 100px) rotate(45deg) scale(1.5);
```

### Browser Support:
The `transform` property is well-supported in modern browsers, but older versions might require vendor prefixes like `-webkit-`, `-moz-`, `-ms-`, or `-o-`.