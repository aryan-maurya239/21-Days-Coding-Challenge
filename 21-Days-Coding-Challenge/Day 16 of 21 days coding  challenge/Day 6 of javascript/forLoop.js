console.log('Odd Number');
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}
// Output:
// Odd Number
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15

console.log('Even Number');
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
// Output:
// Even Number
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

console.log('Multiplication of 5');
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 5 = ${i * 5}`);
}
// Output:
// Multiplication of 5
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

let student = [['Aryan', 89], ['Manish', 78], ['Priya', 98]];
for (let i = 0; i < student.length; i++) {
    console.log(`Info of student #${i}`);
    for (let j = 0; j < student[i].length; j++) {
        console.log(student[i][j]);
    }
}
// Output:
// Info of student #0
// Aryan
// 89
// Info of student #1
// Manish
// 78
// Info of student #2
// Priya
// 98

let a = [1, 3, 4, 5, 7, 8, 4, 3, 2, 3];
for (let x of a) {
    console.log(x);
}
// Output:
// 1
// 3
// 4
// 5
// 7
// 8
// 4
// 3
// 2
// 3







// console.log('Odd Number')
// for(let i = 1; i <= 15 ; i+=2){
//     console.log(i)
// }

// console.log('Even Number')
// for(let i = 2; i <= 20 ; i+=2){
//     console.log(i)
// }

// console.log('Muliplication if 5')
// for(let i = 1;i<=10;i++){
//     console.log(`${i} * 5 = ${i*5}`)
// }

// let student = [ ['Aryan',89],['Manish',78], ['Priya',98]]
// for(let i = 0;i< student.length;i++){
//     console.log(`Info of student #${i}`)
//     for(let j = 0;j< student[i].length;j++){
//         console.log(student[i][j])
//     }
// }

// let a = [1,3,4,5,7,8,4,3,2,3]
// for(x of a){
//     console.log(x)
// }