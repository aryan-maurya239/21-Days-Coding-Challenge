# Python porgram to count the number of blank spaces in a Text File.
fname = input("Enter your file name: ")
k= 0
print(fname)
with open(fname,'r') as f:
    for line in f :
        k += line.count(" ")
print(k)
        
           
print(k)
                