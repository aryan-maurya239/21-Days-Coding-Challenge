### **CSS Selectors and Combinators: Full Details**

CSS **selectors** are used to target HTML elements and apply styles to them. Selectors can range from simple (targeting a single element) to complex (targeting multiple elements in specific relationships). **Combinators** are special selectors used to define relationships between elements.

---

### **1. Types of CSS Selectors**

#### **1.1. Universal Selector (`*`)**

- Selects **all elements** on the page.
- Syntax: `*`

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

  This resets margin and padding for all elements.

---

#### **1.2. Type Selector (Element Selector)**

- Selects elements by their **HTML tag** name.
- Syntax: `element`

  ```css
  p {
    color: blue;
  }
  ```

  This applies the style to all `<p>` (paragraph) elements.

---

#### **1.3. Class Selector**

- Selects elements by their **class attribute**.
- Syntax: `.classname`

  ```css
  .highlight {
    background-color: yellow;
  }
  ```

  This applies the background color to all elements with the class `highlight`.

- Multiple classes can be targeted by combining class names:

  ```css
  .highlight.important {
    font-weight: bold;
  }
  ```

---

#### **1.4. ID Selector**

- Selects elements by their **ID attribute** (which must be unique on the page).
- Syntax: `#idname`

  ```css
  #main {
    width: 80%;
    margin: 0 auto;
  }
  ```

  This applies the styles to the element with the ID `main`.

---

#### **1.5. Attribute Selector**

- Selects elements based on their attributes.
  
  - `[attribute]`: Selects elements with the given attribute.
  
    ```css
    [type] {
      border: 1px solid black;
    }
    ```

    This applies to all elements with a `type` attribute, such as `<input>` or `<button>`.

  - `[attribute="value"]`: Selects elements with a specific attribute value.
  
    ```css
    input[type="text"] {
      background-color: lightgray;
    }
    ```

    This applies to `<input>` elements where the `type` attribute is `"text"`.

  - `[attribute~="value"]`: Selects elements with a space-separated list of values that includes the specified value.
  
    ```css
    [class~="button"] {
      border-radius: 5px;
    }
    ```

    This selects elements whose class attribute includes the value `"button"`.

  - `[attribute^="value"]`: Selects elements whose attribute value starts with the given value.
  
    ```css
    a[href^="https"] {
      color: green;
    }
    ```

    This applies to all `<a>` elements where the `href` attribute starts with `"https"`.

  - `[attribute$="value"]`: Selects elements whose attribute value ends with the given value.
  
    ```css
    img[src$=".png"] {
      border: 1px solid red;
    }
    ```

    This applies to all `<img>` elements where the `src` attribute ends with `.png`.

  - `[attribute*="value"]`: Selects elements whose attribute value contains the given value.
  
    ```css
    a[href*="download"] {
      font-weight: bold;
    }
    ```

    This applies to `<a>` elements where `"download"` appears anywhere in the `href` attribute.

---

#### **1.6. Grouping Selector**

- Targets **multiple selectors** at once.
- Syntax: `selector1, selector2, selector3`

  ```css
  h1, h2, h3 {
    font-family: Arial, sans-serif;
  }
  ```

  This applies the same style to all `<h1>`, `<h2>`, and `<h3>` elements.

---

#### **1.7. Pseudo-Classes**

- Pseudo-classes select elements based on **state** or **position**.

  - `:hover`: Selects an element when it is hovered.
    
    ```css
    a:hover {
      color: red;
    }
    ```

    This changes the color of links when hovered.

  - `:focus`: Selects an element when it is focused.
    
    ```css
    input:focus {
      border-color: blue;
    }
    ```

    This changes the border color of an input field when it gains focus.

  - `:nth-child(n)`: Selects elements based on their position within a parent.
    
    ```css
    li:nth-child(2) {
      color: red;
    }
    ```

    This selects the second `<li>` element inside a parent element.

  - `:first-child` / `:last-child`: Selects the first or last child element.
    
    ```css
    p:first-child {
      font-weight: bold;
    }
    ```

    This makes the first paragraph inside a container bold.

  - `:not(selector)`: Excludes elements matching the given selector.
    
    ```css
    input:not([type="submit"]) {
      border: 1px solid gray;
    }
    ```

    This applies to all input elements **except** those with a `type="submit"`.

---

#### **1.8. Pseudo-Elements**

- Pseudo-elements target **specific parts** of an element.

  - `::before`: Inserts content before the element's content.
    
    ```css
    h2::before {
      content: "Note: ";
      color: red;
    }
    ```

    This inserts "Note: " before every `<h2>` element.

  - `::after`: Inserts content after the element's content.
    
    ```css
    h2::after {
      content: "!";
      color: red;
    }
    ```

    This adds an exclamation mark after every `<h2>` element.

  - `::first-letter`: Targets the first letter of an element.
    
    ```css
    p::first-letter {
      font-size: 200%;
      color: blue;
    }
    ```

    This enlarges the first letter of every paragraph.

  - `::first-line`: Targets the first line of text.
    
    ```css
    p::first-line {
      font-weight: bold;
    }
    ```

    This makes the first line of text in every paragraph bold.

---

### **2. CSS Combinators**

Combinators are used to define relationships between different elements in the DOM (Document Object Model).

#### **2.1. Descendant Combinator (` `)**

- Selects elements that are **descendants** (children, grandchildren, etc.) of another element.
- Syntax: `ancestor descendant`

  ```css
  div p {
    color: blue;
  }
  ```

  This selects all `<p>` elements inside any `<div>` (at any depth).

---

#### **2.2. Child Combinator (`>`)**

- Selects elements that are **direct children** of another element.
- Syntax: `parent > child`

  ```css
  ul > li {
    list-style-type: none;
  }
  ```

  This applies to `<li>` elements that are direct children of a `<ul>`.

---

#### **2.3. Adjacent Sibling Combinator (`+`)**

- Selects an element that is immediately **next** to another element.
- Syntax: `element1 + element2`

  ```css
  h2 + p {
    margin-top: 0;
  }
  ```

  This applies to a `<p>` element that immediately follows an `<h2>`.

---

#### **2.4. General Sibling Combinator (`~`)**

- Selects elements that are **siblings** of a specified element (i.e., they share the same parent).
- Syntax: `element1 ~ element2`

  ```css
  h2 ~ p {
    color: green;
  }
  ```

  This applies to all `<p>` elements that are siblings of an `<h2>` element.

---

### **3. Specificity**

Specificity determines which CSS rule takes precedence when multiple rules apply to the same element.

- **Inline styles** have the highest specificity (e.g., `style="color: red;"`).
- **ID selectors** (`#id`) are more specific than class selectors or type selectors.
- **Class selectors** (`.class`) and attribute selectors are more specific than type selectors (`element`).
  
Specificity is calculated by counting the number of selectors:
- IDs: 100 points
- Classes, attributes, pseudo-classes: 10 points
- Element selectors and pseudo-elements: 1 point

**Example**:

```css
#main p {
  color: red;
}

.container p {
  color: blue;
}

p {
  color: green;
}
```

In this case, if there's a `<p>` element inside an element with the ID `main`, the paragraph will be red due to higher specificity of the `#main p` selector.

---

### **4. Summary**

CSS selectors and combinators offer a powerful way to target and style HTML elements. Understanding how to use them effectively is essential for creating well-structured, maintainable stylesheets. By combining basic selectors, pseudo-classes, pseudo-elements, and combinators, you can target elements with precision, ensuring that your styles are applied correctly.