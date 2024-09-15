The percentage (`%`) unit in CSS is used to define values relative to a parent or a specific reference value, depending on the property. The behavior of percentages can vary based on the property to which they are applied.

### How `%` Works:
- **Relative to Parent Element**: When a percentage is used, the value is typically a fraction of the size of the containing (parent) element.
- **Context Dependent**: The context in which a percentage is used determines what it's relative to, such as the width of the parent, height, or font size.

### Properties that Support `%`:
1. **Width and Height**
   - Percentage values for `width` and `height` are relative to the parent element's dimensions.
   - Example:
     ```css
     div {
         width: 50%;  /* 50% of the parent's width */
         height: 100%; /* 100% of the parent's height */
     }
     ```

2. **Padding**
   - Percentages in `padding` are relative to the width of the parent element.
   - Example:
     ```css
     div {
         padding: 10%; /* 10% of the parent's width */
     }
     ```

3. **Margin**
   - Margins can accept percentage values, and they are calculated based on the width of the containing element.
   - Example:
     ```css
     div {
         margin: 5%; /* 5% of the parent's width */
     }
     ```

4. **Positioning (top, right, bottom, left)**
   - Percentage values for positioning properties are relative to the dimensions of the containing block (usually the nearest positioned ancestor).
   - Example:
     ```css
     div {
         position: absolute;
         top: 20%;  /* 20% of the parent's height */
         left: 10%; /* 10% of the parent's width */
     }
     ```

5. **Font Size**
   - Percentage values for `font-size` are relative to the parent element's font size.
   - Example:
     ```css
     p {
         font-size: 120%; /* 120% of the parent element's font size */
     }
     ```

6. **Line Height**
   - Percentages for `line-height` are relative to the font size of the element itself.
   - Example:
     ```css
     p {
         line-height: 150%; /* 150% of the font size */
     }
     ```

7. **Background Position**
   - Percentage values for `background-position` are relative to the size of the element (not the background image).
   - Example:
     ```css
     div {
         background-position: 50% 50%; /* Center of the element */
     }
     ```

8. **Transform (translate)**
   - Percentage values for `translate` are relative to the size of the element being transformed.
   - Example:
     ```css
     div {
         transform: translate(50%, 50%); /* 50% of the element's own width and height */
     }
     ```

9. **Border-Radius**
   - Percentages for `border-radius` are relative to the dimensions of the element.
   - Example:
     ```css
     div {
         border-radius: 50%; /* A perfect circle */
     }
     ```

### Properties Where `%` May Not Work:
Some properties do not support percentage values at all or behave unexpectedly when percentages are used, such as:
- `border-width`
- `z-index`
- `opacity`

### Example:
```css
.container {
    width: 100%;       /* 100% of the parent width */
    height: 50%;       /* 50% of the parent height */
    padding: 5%;       /* 5% of the parent's width */
    margin-top: 10%;   /* 10% of the parent's height */
    font-size: 120%;   /* 120% of the parent font size */
    line-height: 150%; /* 150% of the element's font size */
}
```

### Summary:
Percentages in CSS are context-dependent and usually refer to dimensions of the parent element (width, height, or font size). Properties like `width`, `height`, `padding`, `margin`, `font-size`, and `line-height` commonly support percentages. However, properties like `border-width` and `z-index` do not support them.