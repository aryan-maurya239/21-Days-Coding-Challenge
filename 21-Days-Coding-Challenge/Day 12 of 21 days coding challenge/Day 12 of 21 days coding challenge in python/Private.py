class Preson:
    __name = "Aryan"
    
    def __hello(self,name):
        print(f"Hello!\n{name}")
        
    def welcome(self):
        self.__hello(self.__name)
        
p1 = Preson()

p1.welcome()
        
# p2 = Preson.__hello('manish')