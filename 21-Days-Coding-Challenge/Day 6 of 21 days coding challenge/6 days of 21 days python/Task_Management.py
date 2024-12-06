# task =[]
# print("_______Welcome To Do list App_______\n")
# total_task=int(input("Enter number Of Task you want to add: "))
# for i in range(1,total_task+1):
#     task_name= input(f"\nEnter task No. {i}: ")
#     task.append(task_name)
# print(f"\n{task} tasks are succeefuly added...\n")
# while True:
#     opp = int(input("Enter 1 for new task add\nEnter 2 for Update old task\nEnter 3 for Deleting task\nEnter 4 for view all task\nEnter 5 for close App "))
    
#     if opp==1:
#         new_task= input("Enter new task: ")
#         task.append(new_task)
#         print(f"{task} task is succefuly added...")
#     elif opp ==2:
#         old_task=input("Enter old task: ")
#         if old_task in task:
#             ntsk = input("Enter new task: ")
#             index =task.index(old_task)
#             task[index]=ntsk
#             print(f"{ntsk} is succefuly Updated...")
#         else: print(f"{old_task} are not exist.")
#     elif opp==3:
#         de =input("Enter which task you want to deleta: ")
#         if de in task:
#             task.remove(de)
#             print(f"{de} is succefully deleted")
#         else :
#             print(f"{de} task are not exist...")
#     elif opp==4:
#         for i in task:
#             print(i)
#     elif opp==5:
#         break        
#     else: 
#         print("Inviled input...")  
        
        
tasks = []
print("_______Welcome to the Task Management App_______\n")

total_tasks = int(input("Enter the number of tasks you want to add: "))
for i in range(1, total_tasks + 1):
    task_name = input(f"\nEnter task No. {i}: ")
    tasks.append(task_name)
print(f"\n{tasks} tasks are successfully added...\n")    

while True:
    opp = int(input("\nEnter 1 to add a new task\nEnter 2 to update an old task\nEnter 3 to delete a task\nEnter 4 to view all tasks\nEnter 5 to close the app:\n "))
    
    if opp == 1:
        new_task = input("Enter new task: ")
        tasks.append(new_task)
        print(f"{new_task} is successfully added...")
    elif opp == 2:
        old_task = input("Enter the task you want to update: ")
        if old_task in tasks:
            new_task = input("Enter the new task: ")
            index = tasks.index(old_task)
            tasks[index] = new_task
            print(f"{new_task} is successfully updated...")
        else:
            print(f"{old_task} does not exist.")
    elif opp == 3:
        task_to_delete = input("Enter the task you want to delete: ")
        if task_to_delete in tasks:
            tasks.remove(task_to_delete)
            print(f"{task_to_delete} is successfully deleted.")
        else:
            print(f"{task_to_delete} does not exist.")
    elif opp == 4:
        print("\nYour tasks:")
        for task in tasks:
            print(task)
    elif opp == 5:
        print("Closing the app. Goodbye!")
        break        
    else: 
        print("Invalid input. Please try again.")  
   
       
