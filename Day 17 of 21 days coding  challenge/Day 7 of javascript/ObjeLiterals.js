let student = {
    name :'Anshika',
    age:13,
    class:7,
    marks:80.3,
    color:"savla"
}


// Output: Object with properties of 'student'
/* 
{
  name: 'Anshika',
  age: 13,
  class: 7,
  marks: 80.3,
  color: 'savla'
}
*/
student.gender = 'female' //new add
student.roll = 23; // new add
student.age = 15 // update value
student.color = 53 //update data type
delete student.marks // delete marks key 

const god = {
    name :'Shiri Ram',
    wife:'Sira Mata'
}

// Output: Object with properties of 'god'
/* 
{
  name: 'Shiri Ram',
  wife: 'Sira Mata'
}
*/

const post ={
    username :'@aryanmaurya542',
    content:'This is my #firstPost',
    likes:5656,
    repost:5, 
    tags:['@amitediter','@rockvinit','@shashi.asv',"@rajking"]
}

// Output: Object with properties of 'post'
/* 
{
  username: '@aryanmaurya542',
  content: 'This is my #firstPost',
  likes: 5656,
  repost: 5,
  tags: ['@amitediter', '@rockvinit', '@shashi.asv', '@rajking']
}
*/

console.log(post.username)  
// Output: @aryanmaurya542 

console.log(post[username])  
// Output: ReferenceError: username is not defined
// Reason: The variable `username` is not defined. To access the 'username' property, you should pass it as a string, i.e., `post["username"]`.


let anim ={
    1:'aryan',
    2:'maurya',
    true:343,
    null:23,
    undefined:'difiende'
}

// Output: Object with different types of keys in 'anim'
/* 
{
  1: 'aryan',
  2: 'maurya',
  true: 343,
  null: 23,
  undefined: 'difiende'
}
*/

console.log(anim[1])  
// Output: aryan
// Reason: `1` is a valid numeric key in the `anim` object.

// console.log(anim.1)  
// Output: SyntaxError: Unexpected number
// Reason: You cannot use dot notation with numeric keys. You must use bracket notation like `anim[1]`.


const Info = {
  aman: {
    grad: 'A+',
    city: 'Delhi'
  },

  juli: {
    grad: 'B',
    city: 'Ghazipur'
  },

  golu: {  // Changed from Golu to golu
    grad: 'A',
    city: 'Mau'
  },

  suman: {  // Changed from Suman to suman
    grad: 'A+',
    city: 'Balia'
  }
};
