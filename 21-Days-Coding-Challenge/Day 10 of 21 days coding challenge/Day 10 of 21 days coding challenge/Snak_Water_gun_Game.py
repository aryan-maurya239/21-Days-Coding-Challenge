import random

def check(comp, user):
    # If both choices are the same, it's a tie
    if comp == user:
        return 0
    # Check all conditions where the computer wins
    elif (comp == 0 and user == 1) or (comp == 1 and user == 2) or (comp == 2 and user == 0):
        return -1
    else:
        return 1

comp = random.randint(0, 2)
user = int(input("0 for Snake \n1 for Water \n2 for Gun:\n"))

score = check(comp, user)
characters = ['Snake', 'Water', 'Gun']
print('Computer chose:', characters[comp])
print('You chose:', characters[user])

if score == 0:
    print("It's a tie!")
elif score == -1:
    print("You lose!")
else:
    print("You win!")



# import random

# def cheke(comp,user):
#     if (comp  == user):
#         return 0
#     if (comp == 0 and user==1):
#         return -1
#     if (comp == 1 and user == 2):
#         return -1
#     if (comp == 2 and user == 0):
#         return -1

#     return 1
# coumpter = random.randint(0,2)
# user = int(input("0 for Snake \n1 for water \n2 for Gun:\n"))

# score =cheke(coumpter,user)
# cairecter = ['snak','water','Gun']
# print('Coumpter',cairecter[coumpter])
# print('User',cairecter[user])


# if score ==0 :
#     print("Game dara!")
# elif score == -1:
#     print("Loss game")
# if score == 1:
#     print("Won ! Game ")