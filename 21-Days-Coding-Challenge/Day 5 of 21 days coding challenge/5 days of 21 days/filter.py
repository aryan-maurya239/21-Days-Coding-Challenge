l =[3,4,2,6,1,9,10]

def filter_fuctoin(a):
    return a>2


newl = list(filter(filter_fuctoin,l))

print(newl)