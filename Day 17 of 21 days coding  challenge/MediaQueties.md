Media queries in CSS are used to apply different styles based on the characteristics of the device or viewport, such as its width, height, orientation, or resolution. Here's a detailed guide on how to use media queries in CSS:

### Basic Syntax

```css
@media media-type and (condition) {
    /* CSS rules here */
}
```

### Examples

1. **Basic Media Query**

   Apply styles only for screens with a maximum width of 600px:

   ```css
   @media screen and (max-width: 600px) {
       body {
           background-color: lightblue;
       }
   }
   ```

2. **Media Query with Multiple Conditions**

   Apply styles for devices that are either in portrait orientation or have a minimum width of 600px:

   ```css
   @media (min-width: 600px) and (orientation: portrait) {
       body {
           font-size: 1.2em;
       }
   }
   ```

3. **Media Query for High-Resolution Displays**

   Apply styles for screens with a minimum device pixel ratio of 2 (e.g., retina displays):

   ```css
   @media (-webkit-min-device-pixel-ratio: 2),
          (min-resolution: 192dpi) {
       .logo {
           background-image: url('logo@2x.png');
       }
   }
   ```

4. **Media Query for Print**

   Apply styles specifically for print media:

   ```css
   @media print {
       body {
           font-size: 12pt;
       }
   }
   ```

5. **Media Query for Landscape Orientation**

   Apply styles only when the device is in landscape orientation:

   ```css
   @media (orientation: landscape) {
       .header {
           background-color: lightgreen;
       }
   }
   ```

6. **Media Query with Minimum and Maximum Width**

   Apply styles for devices with a width between 600px and 1200px:

   ```css
   @media (min-width: 600px) and (max-width: 1200px) {
       .container {
           margin: 0 auto;
           width: 80%;
       }
   }
   ```

### Advanced Usage

1. **Combining Media Types**

   Apply styles for both screen and print media types:

   ```css
   @media screen and print {
       h1 {
           color: darkblue;
       }
   }
   ```

2. **Feature Queries**

   Test for specific CSS features:

   ```css
   @supports (display: grid) {
       .grid-container {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
       }
   }
   ```

3. **Logical Operators**

   Combine multiple conditions using logical operators like `and`, `not`, and `only`:

   ```css
   @media only screen and (min-width: 600px) and (max-width: 1200px) {
       .responsive {
           font-size: 1.5em;
       }
   }
   ```

### Best Practices

- **Mobile-First Approach**: Start with styles for small screens and use `min-width` media queries to add styles for larger screens.

  ```css
  body {
      font-size: 14px; /* Base font size for mobile */
  }

  @media (min-width: 600px) {
      body {
          font-size: 16px; /* Adjusted font size for tablets and above */
      }
  }
  ```

- **Avoid Overuse**: Too many media queries can make the stylesheet difficult to maintain. Use them judiciously to handle only necessary cases.

- **Testing**: Always test media queries on multiple devices and screen sizes to ensure that the layout works as expected.

By using media queries effectively, you can create responsive designs that adapt to different devices and screen sizes, enhancing the user experience across various platforms.