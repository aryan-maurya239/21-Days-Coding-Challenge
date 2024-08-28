# python program to read a file and capitalize the first letter of every word in the file.
fname = input('Enter your file name: ')
with open(fname,'r') as f:
    for words in f:
        
        print(words.title())
        