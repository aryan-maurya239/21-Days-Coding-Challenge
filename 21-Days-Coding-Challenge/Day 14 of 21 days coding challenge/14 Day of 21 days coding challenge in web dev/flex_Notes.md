### CSS Flexbox Short Notes with Examples

1. **Display Flex**  
   To use Flexbox, set the container to `display: flex;`, enabling flex properties for its children.  
   ```css
   .container {
       display: flex;
   }
   ```

2. **Flex Direction**  
   Defines the direction of flex items. Possible values: `row`, `row-reverse`, `column`, `column-reverse`.  
   ```css
   .container {
       flex-direction: row; /* Items in a horizontal row */
   }
   ```

3. **Justify Content**  
   Aligns items along the main axis (horizontal by default). Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, etc.  
   ```css
   .container {
       justify-content: space-between; /* Space between items */
   }
   ```

4. **Flex Wrap**  
   Allows items to wrap if they exceed the container's width. Values: `nowrap` (default), `wrap`, `wrap-reverse`.  
   ```css
   .container {
       flex-wrap: wrap; /* Items will wrap onto multiple lines */
   }
   ```

5. **Align Items**  
   Aligns items along the cross axis (vertical by default). Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.  
   ```css
   .container {
       align-items: center; /* Items vertically centered */
   }
   ```

6. **Align Content**  
   Aligns multiple lines of items along the cross axis when there's extra space. Values: `flex-start`, `flex-end`, `center`, `space-between`, etc.  
   ```css
   .container {
       align-content: space-around; /* Distributes rows evenly */
   }
   ```

7. **Align Self**  
   Aligns a single flex item independently from others. Values: same as `align-items`.  
   ```css
   .item {
       align-self: flex-end; /* Align this item at the bottom */
   }
   ```

8. **Flex Sizing (Flex Grow, Shrink, Basis)**  
   Controls item size relative to others.  
   - `flex-grow: 1;` allows an item to grow.
   - `flex-shrink: 1;` allows shrinking if space is tight.
   - `flex-basis: 100px;` sets the initial size.  
   ```css
   .item {
       flex-grow: 2; /* This item will grow twice as much as others */
   }
   ```

9. **Flex Shorthand**  
   Combines `flex-grow`, `flex-shrink`, and `flex-basis` into one line: `flex: grow shrink basis;`.  
   ```css
   .item {
       flex: 1 1 150px; /* Grow, shrink, and start at 150px */
   }
   ```

