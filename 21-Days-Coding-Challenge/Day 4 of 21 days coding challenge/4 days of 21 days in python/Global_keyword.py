x = 4

def my_fuction():
    global x
    x=7
    print("This is local x: ",x)
    
my_fuction()
print("This is global x: ",x)