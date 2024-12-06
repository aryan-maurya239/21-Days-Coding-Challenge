double = lambda x: 2*x
cube =lambda X: X * X * X
avg = lambda x,y,z:(x+y+z)/3

print(double(5))
print(cube(5))
print(avg(8,6,4))

def cu(fx,value):
    return fx(value)+12

print(cu(double,10))

# print("Table of 5")
# lambda x,y:print(f'{x} * {y} = {x*y}')
