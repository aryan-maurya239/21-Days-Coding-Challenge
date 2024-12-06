f= open('Myfile.txt','w')
a = "Today 4 day of 21 days coding challenge"
text = f.write(a)

print(text)
f.close()

e= open('Myfile1.txt','r')
# a = "Today 4 day of 21 days coding challenge"
text = e.read()

print(text)
e.close()

