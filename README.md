# 21-Days-Coding-Challenge
This is my first codign challenge . This rope is create for daily code uplon public
Questions=[["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3], 
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],
           ["Which indian Olampic playar win two meden in shooting","P B sindu", "riya" ,"Manu Bhakar","priya",3],]
money= [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000, 70000000]

    
for i in range(0,len(Questions)):
    print(f"Question no {i+1} {Questions[i][0]}")
    print(f"A.{Questions[i][1]}                  B.{Questions[i][2]}")
    print(f"C.{Questions[i][3]}                  D.{Questions[i][4]}")
    ans = int(input("Enter your answer:1-4 only: " ));
    
    if(ans == Questions[i][5]):
        # print(f"\nCurrect Answer, your win {money[i]} Ruppes\n")
        quit = int(input(f"\nCurrect Answer, your win {money[i]} Ruppes \n\n if want to quit enter 0: "))
        if quit==0:
            break;
        
    else:
        print("wrong answer")
        break;   
    if(i==0):
        final_money=money[0]
    elif(i >= 4 and i < 8):
        final_money=money[4]
    elif (i>=8 and i <11):
        final_money= money[8]
    elif(i>=11 and i <14):
        final_money= money[11]
    elif(i>=14 and i <17):
        final_money= money[14]
    elif(i>=17 and i <20):
        final_money= money[17]
print(f"Your take home money is {final_money}")          
        

