# Create student that takes name & marks of 3 subject as arguments in constructor then create a method to print average.

class Studnet:
    def __init__(self,name,marks):
        self.name = name
        self.mark=marks
        
    def get_avg(self):
        sum = 0
        for val in self.mark:
            sum +=val
        print('Hi, ',self.name,"\nYour avg score is:",sum/3)
s1 = Studnet("Shashi Kumar",[98,88,89])
s1.get_avg()