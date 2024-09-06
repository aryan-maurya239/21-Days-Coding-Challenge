
                
# def print_book(book):
#     for i in book:
#         print(book[i])
        
    
# class Library:
#     no_of_book =0
#     name_of_book =[]
#     while(True):
    
#         num = int(input("Enter 1 for takeing a book \n2 for returning book\n0 for exist stystm\n"))

#         if num ==1:
#             book_n = int(input('totoal number of book your want to take: '))  
#             for i in range(0,book_n):
#                 name= input("Enter book name ")
#                 name_of_book.append(name)
#                 no_of_book +=1
#             print_book(name_of_book)   
                
#         elif num == 2 :
#             book_number = int(input("Enter book you want to return "))
#             for i in range (0,book_number):
#                 bname= input("Enter book name")
#                 try :
#                     index = index(bname)
#                 except Exception as e:
#                     print(e)
#                 name_of_book.remove(index)
#                 no_of_book -=1
#             print_book(name_of_book)      
#         elif num ==0:
#             print("Thank you using labaray ,Godbay")
#             break;
#         else :
#             print('invaid entery')


def print_book(book):
    for i in book:
        print(i)  # i represents the book name, no need for book[i]

class Library:
    def __init__(self):
        self.no_of_book = 0
        self.name_of_book = []
        
    @staticmethod   
    def print_book(book):
      for i in book:
        print(i)

    def start_system(self):
        while True:
            num = int(input("Enter 1 for taking a book \n2 for returning book\n0 for exiting the system\n"))

            if num == 1:
                book_n = int(input('Total number of books you want to take: '))
                for i in range(book_n):
                    name = input("Enter book name: ")
                    self.name_of_book.append(name)
                    self.no_of_book += 1
                print("Books in library:")
                print_book(self.name_of_book)

            elif num == 2:
                book_number = int(input("Enter the number of books you want to return: "))
                for i in range(book_number):
                    bname = input("Enter book name: ")
                    try:
                        self.name_of_book.remove(bname)  # remove book name directly
                        self.no_of_book -= 1
                    except ValueError:
                        print(f"Book '{bname}' not found in the library.")
                print("Updated list of books:")
                print_book(self.name_of_book)

            elif num == 0:
                print("Thank you for using the library. Goodbye!")
                break

            else:
                print("Invalid entry. Please try again.")

# Example of running the system
library = Library()
library.start_system()

            