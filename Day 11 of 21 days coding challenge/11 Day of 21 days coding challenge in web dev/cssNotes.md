Here are the notes for the CSS topics you learned today:

---

### **CSS Notes**

---

#### **1. Transform Skew**
   - The `skew` function is used to tilt an element along the X and/or Y axes.
   - Syntax:
     ```css
     transform: skewX(angle); /* Skew along the X-axis */
     transform: skewY(angle); /* Skew along the Y-axis */
     transform: skew(angleX, angleY); /* Skew along both axes */
     ```
   - Example:
     ```css
     .box {
         transform: skew(20deg, 10deg);
     }
     ```

---

#### **2. Box Shadow**
   - The `box-shadow` property is used to add shadows to elements.
   - Syntax:
     ```css
     box-shadow: h-offset v-offset blur-radius color;
     ```
   - Optional parameters: spread-radius, `inset`.
   - Example:
     ```css
     .box {
         box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
     }
     ```

---

#### **3. Background Image**
   - The `background-image` property is used to set an image as the background of an element.
   - Syntax:
     ```css
     background-image: url('image-path.jpg');
     ```
   - Additional properties:
     - `background-size`: Control the size of the image (e.g., `cover`, `contain`, or specific values).
     - `background-position`: Position the image (e.g., `center`, `top left`).
     - `background-repeat`: Control whether the image repeats (e.g., `no-repeat`, `repeat-x`, `repeat-y`).
   - Example:
     ```css
     .background {
         background-image: url('background.jpg');
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
     }
     ```

---

#### **4. Card Hover Effect**
   - Card hover effects can be created using various CSS properties like `transform`, `box-shadow`, and `transition`.
   - Example:
     ```css
     .card {
         transition: transform 0.3s ease, box-shadow 0.3s ease;
     }

     .card:hover {
         transform: scale(1.05);
         box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
     }
     ```

---

#### **5. Position Property**
   - The `position` property specifies how an element is positioned in the document.
   - Types:
     - `static`: Default value, positioned according to the normal flow of the document.
     - `relative`: Positioned relative to its normal position.
     - `absolute`: Positioned relative to the nearest positioned ancestor.
     - `fixed`: Positioned relative to the browser window, stays in the same place even when the page is scrolled.
     - `sticky`: Switches between `relative` and `fixed` depending on the scroll position.
   - Example:
     ```css
     .element {
         position: absolute;
         top: 50px;
         left: 100px;
     }
     ```

---

#### **6. Simple Smiley Face**
   - Create a simple smiley face using CSS properties like `border-radius`, `background-color`, and `position`.
   - Example:
     ```css
     .smiley-face {
         width: 100px;
         height: 100px;
         background-color: yellow;
         border-radius: 50%;
         position: relative;
     }

     .smiley-face::before,
     .smiley-face::after {
         content: '';
         position: absolute;
         width: 20px;
         height: 20px;
         background-color: black;
         border-radius: 50%;
         top: 30px;
     }

     .smiley-face::before {
         left: 20px;
     }

     .smiley-face::after {
         right: 20px;
     }

     .smile {
         position: absolute;
         width: 60px;
         height: 30px;
         background-color: black;
         border-radius: 0 0 50px 50px;
         top: 50px;
         left: 50%;
         transform: translateX(-50%);
     }
     ```

---

