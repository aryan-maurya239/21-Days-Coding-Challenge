from functools import reduce
num =[1,2,3,4,5,6,4,8,9]
sum = reduce(lambda x,y:x+y, num)
print(sum)