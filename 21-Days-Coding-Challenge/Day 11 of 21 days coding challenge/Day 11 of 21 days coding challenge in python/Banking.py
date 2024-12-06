class Acoount:
    def __init__(self,balance,account):
        self.Balance = balance
        self.Acount = account
    
    def debit(self,bal):
        # self.Balance = self.Balance-bal
        self.Balance -= bal
        print(f"{bal} Was debited")
        print("total balance : ",self.Balance)
        
    def credit(self,amount):
        self.Balance += amount
        print(f"{amount} was credited")
        print("total balance : ",self.Balance)
        
    def get_balance(self):
        return self.Balance
    
Aryan = Acoount(100,54778784)
Aryan.debit(30)
Aryan.credit(5500)
Aryan.debit(70)

Priya = Acoount(55000,'xxxxxxxx')
del Priya
