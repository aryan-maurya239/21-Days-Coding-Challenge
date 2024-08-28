fname=input("Enter name of file: ")
with open(fname,"w") as f:
    f.write("Hellow world")
    f.truncate(5)

with open(fname,'r') as x:
    print(x.read()) #Hello
    