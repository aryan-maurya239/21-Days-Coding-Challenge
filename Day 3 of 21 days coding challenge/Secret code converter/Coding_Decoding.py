# Write a python program to translate a message into secret code language. Use the rules below to translate normal English into secret code language

# Coding:
# if the word contains atleast 3 characters, remove the first letter and append it at the end
#   now append three random characters at the starting and the end
# else:
#   simply reverse the string

# Decoding:
# if the word contains less than 3 characters, reverse it
# else:
#   remove 3 random characters from start and end. Now remove the last letter and append it to the beginning
# Your program should ask whether you want to code or decode


import random
import string

coding = input("Enter 1 for coding 0 for decoding: ")
coding= True if coding=="1" else False
messege= input("Enter your messege: ")
split_messege=messege.split(" ")

if coding:
    nword=[]
    for word in split_messege:
        if len(word)>=3:
            w1 = ''.join(random.choice(string.ascii_letters) for _ in range(3))
            w2 = ''.join(random.choice(string.ascii_letters) for _ in range(3))
            stnew= w1 + word[1:] + word[0] + w2
            nword.append(stnew)
        else :
            nword.append(word[::-1])
    print("Encoded Message: ", " ".join(nword))
else :
    nword=[]
    for word in split_messege:
        if len(word)>=3:
            w1 = word[3:-3]
            stnew= w1[-1]+ w1[:-1]
            nword.append(stnew)
        else :
            nword.append(word[::-1])
    print("Decoded Message: ", " ".join(nword))
      
      
        
        
        
    
    
    
    

