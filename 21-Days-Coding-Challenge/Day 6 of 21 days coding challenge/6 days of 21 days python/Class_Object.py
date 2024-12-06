class Person: #object
    name ="Aryan" #instace variable
    rollno=30
    subject= 'CS'
    
    def __init__(self,n, r,s): #this is constructor
        print("Hay am a student. ")
        self.name = n 
        self.rollno= r
        self.subject= s
        
        
    def info(self): #method
        print(f"\n{self.name} is {self.subject} student and his roll no {self.rollno}") 
        
        
     
    
# a = Person()
# print(a.name,a.rollno,a.subject)

# a.name = "manish"
# a.rollno=64
# a.subject= "Python"

# print(a.name,a.rollno,a.subject)

# b,c = Person(),Person()

# b.name = "Ram"
# b.rollno = 1
# b.subject= "Humility"

# c.name = "Lakshaman"
# c.rollno= 2
# c.subject= "Angri ans sansil"

# a.info()
# b.info()
# c.info()

d =Person("Shashi", 54,"Science") # calling person class` `
e = Person("Neha" ,89,"Home Science")
d.info()
e.info()