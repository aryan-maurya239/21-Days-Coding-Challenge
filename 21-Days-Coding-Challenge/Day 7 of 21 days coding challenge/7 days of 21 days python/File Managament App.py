import os

def create_file(filename):
    try:
        with open(filename, "x") as f:
            print(f"File '{filename}' is successfully created.")
    except FileExistsError:
        print(f"'{filename}' already exists.")
    except Exception as e:
        print(e)

def read_file(filename):
    try:
        with open(filename, "r") as f:
            content = f.read()
            print(f"Content of '{filename}':\n{content}")
    except FileNotFoundError:
        print(f"'{filename}' not found.")
    except Exception as e:
        print(e)

def view_all_files():
    files = os.listdir()
    if not files:
        print("No files found!")
    else:
        print("Files in the directory:")
        for file in files:
            print(file)

def delete_file(filename):
    try:
        os.remove(filename)
        print(f"'{filename}' is successfully deleted!")
    except FileNotFoundError:
        print(f"'{filename}' not found!")
    except Exception as e:
        print(e)

def edit_file(filename):
    try:
        with open(filename, "a") as f:
            content = input("Enter data to add: ")
            f.write(content + "\n")
    except FileNotFoundError:
        print(f"'{filename}' not found.")
    except Exception as e:
        print(e)

def main():
    while True:
        print("\n_____ Welcome to File Management App _____")
        print("1. Create file")
        print("2. Edit file")
        print("3. Delete file")
        print("4. Read file")
        print("5. View all files")
        print("6. Exit")

        choice = input("Enter your choice (1-6): ")
        if choice == '1':
            filename = input("Enter file name: ")
            create_file(filename)
        elif choice == '2':
            filename = input("Enter file name: ")
            edit_file(filename)
        elif choice == '3':
            filename = input("Enter file name: ")
            delete_file(filename)
        elif choice == '4':
            filename = input("Enter file name: ")
            read_file(filename)
        elif choice == '5':
            view_all_files()
        elif choice == '6':
            print("App closed! Goodbye...")
            break
        else:
            print("Invalid entry. Please choose between 1 and 6.")

if __name__ == "__main__":
    main()
  
     
               
                          