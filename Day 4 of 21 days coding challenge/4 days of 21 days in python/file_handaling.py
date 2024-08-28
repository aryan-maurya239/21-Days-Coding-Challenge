f = open('Myfile.txt', 'w')  # Opens the file in read mode
# print(f)  # This line is commented out and will not do anything
text = f.write("I love you my god")  # Reads the entire content of the file into the variable 'text'
print(text)  # Prints the content of the file
f.close()  # Closes the file
