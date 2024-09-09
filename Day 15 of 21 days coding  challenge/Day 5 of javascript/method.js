let  color = ['red','yellow' ,'blue'];
console.log(color.indexOf('yellow'));
console.log(color.indexOf('green'))
console.log(color.includes('green'))
console.log(color.includes('red'))
let  number = [ 3265 ,12,34,,65,33]
console.log(color + number )
console.log(color.concat(number))

console.log(color.concat(number).reverse())

console.log(color.slice(2))
console.log(color.slice(2,4))
console.log(color.slice(-3))
console.log(color.slice(-1))

// color.splice(1)
// console.log(color)

color.splice(2)
console.log(color)


color.splice(0,1)
console.log(color)

color.splice(0,1,'red','yellow','pink')
console.log(color)

console.log(color.sort())
console.log(number.sort())

months= ['januarya','july','march','august']
months.splice(0,2,'july','june')
console.log(months)

const arr = [23,43,45,65,21]
arr[8] = 54
console.log(arr)

//  Nested array
nestedArr = [[1,2,4,5],[6,7,8,9,10],[1,2,43,6,7]]
console.log(nestedArr)
console.log(nestedArr[1][2])
tiktok= [['X'," ",'O'],[" ",'X',' '],['O',' ','X']]
console.log(tiktok)
tiktok[0][1] = 0
console.log(tiktok)