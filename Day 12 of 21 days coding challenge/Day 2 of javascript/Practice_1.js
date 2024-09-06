// creat a number variable num with some CSSMathValue. now ,print "good " if the number is divisible by 10 and print "bad " if it is not .

num = 45
if(num % 10 ==0){
    console.log("Good")
}else {
    console.log("Bad")
}

// take the user's name & age as input using  prompts . Then return back the following statement to user as an alert by (by substituing their name & age): name is age year old.

// let userName = prompt("Enter Username: ");
// let age = prompt("Enter your age: ")
// alert(`${userName} is ${age} years old.`)

// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December

quarter = parseInt(prompt("Enter Quarter Number (1-4): "));
switch (quarter){
    case 1:
        alert(" January, February, March");
        break;
    case 2:
        alert("  April, May, June")
        break;
    case 3:
        alert("July, August, September")
        break;
    case 4:
        alert("October, November, December")
        break;
    default:
        alert("invalid enteres ")
       
}