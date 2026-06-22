        // OOPs Practice Questions
        // 🟢 Easy Level (Q1 - Q4)
        // Question 1 — Understanding this in an
        // Object
        const user = {
            name: "Ritik",
            greet() {
                console.log(this.name);
            }
        };
        // What will be printed when:
        user.greet(); // Ritik
        // Scenario
        // A profile page wants to display the logged-in user's name.
        // What is this question asking?
        // You need to identify what this refers to.
        // Remember:
        // "Dot ke left mein jo object hai, wahi this hai."
        // Here:
        // user.greet()OOPs Practice Questions1
        // means:
        // this===user
        // Concepts Tested
        // this keyword
        // Method calls


        // Question 2 — Default Binding
        function show() {
            console.log(this);
        }
        show(); // Window Object
        // What will be printed?
        // Also explain the difference between:
        // Browser
        // Node.js
        // Strict Mode
        // Scenario
        // You copied code from a browser project into Node.js and got different results.
        // What is this question asking?
        // Understand what happens when a regular function is called without an object.
        // Concepts TestedOOPs Practice Questions2
        // this
        // Default Binding
        // Strict Mode


        // Question 3 — call()
        function introduce() {
            console.log(this.name);
        }
        const person1 = {
            name: "Ritik"
        };
        introduce.call(person1)
        // Print: Ritik
        // using call() .
        // Scenario
        // You want to borrow a function for another object.
        // What is this question asking?
        // Manually decide what this should be.
        // Concepts Tested
        // call()


        // Question 4 — apply()OOPs Practice Questions3
        function introduce(city, country) {
            return `${this.name} from ${country} ${city}`;
        }
        const person2 = {
            name: "Ritik"
        };

        console.log(introduce.apply(person2, ["India", "Delhi"]));
        
        // Call the function using apply() .
        // Scenario
        // Arguments are coming inside an array from an API.
        // What is this question asking?
        // Use apply instead of call.
        // Concepts Tested
        // apply()
        // Explicit Binding


        // 🟡 Moderate Level (Q5 - Q7)
        // Question 5 — Fix Lost this
        const user3 = {
            name: "Ritik",
            greet() {
                console.log(this.name);
            }
        };

        // const fn = user3.greet;
        const fn = greet.bind(user3);
        fn();

        // The code prints:
        // undefined
        // Fix it using bind() .
        // Scenario
        // A method was passed as a callback and lost its object reference.
        // What is this question asking?
        // Understand why this gets lost and how bind permanently fixes it.
        // Concepts Tested
        // bind()
        // this
        // Callback Problems


        // Question 6 — Create an Inheritance Chain
        // Create:
        const animal = {
            eats: true
        };
        const dog = Object.create(animal);

        console.log(dog.eats);

        // Then create:
        // const dog 
        // using Object.create() .
        // The dog object should inherit:
        // eats
        // from animal.
        // Scenario
        // You are building a game where many animals share common behaviors.
        // What is this question asking?
        // Create an object whose prototype is another object.
        // Concepts Tested
        // Object.create()
        // Prototype Chain


        // Question 7 — Prototype Method
        // Create:
        function Person(name) {
            this.name = name;
        }
        // Add:
        function greet() {
            console.log("Welcome", this.name);
        }
        let newPerson = new Person("Raju")
        Person.prototype.greet = greet;
        newPerson.greet();

        // Person.prototype
        // so every person object can use it.
        // Scenario
        // Thousands of users need the same method.
        // You don't want a separate copy for every user.
        // What is this question asking?
        // Store methods inside the prototype instead of the object itself.
        // Concepts Tested
        // Constructor Functions
        // Prototype
        // Memory Optimization


        // 🔴 Hard Level (Q8 - Q10)
        // Question 8 — Student Class System
        // Create a class:
        class Student {
            constructor(name, marks) {
                this.name = name;
                this.marks = marks;
            }
            getGrade() {
                if (this.marks > 90) {
                    console.log(`${this.name} Got A Grade`);
                } else if (this.marks > 75) {
                    console.log(`${this.name} Got B Grade`);
                } else if (this.marks > 60) {
                    console.log(`${this.name} Got C Grade`);
                } else {
                    console.log(`${this.name} Got F`);
                }
            }
        }

        let student1 = new Student("Raju", 80);
        student1.getGrade();
        let student2 = new Student("Shyam", 85);
        student2.getGrade();
        let student3 = new Student("Baburao", 94);
        student3.getGrade();
        let student4 = new Student("Vasuli", 70);
        student4.getGrade();
        // Properties:
        // name
        // marks
        // Methods:OOPs Practice Questions7
        // getGrade()
        // Rules:
        // 90+ =>A
        // 75+ =>B
        // 60+ =>C
        // Otherwise =>F
        // Scenario
        // School Report Card System.
        // What is this question asking?
        // Create a real-world class that stores data and behavior together.
        // Concepts Tested
        // Classes
        // Constructor
        // Instance Methods


        // Question 9 — Employee Inheritance
        // Create:
        class Employee {
            constructor(name, salary) {
                this.name = name;
                this.salary = salary;
            }
            work() {
                console.log(`I'm ${this.name}, my salary is ${this.salary} `);
            }
        }

        class Developer extends Employee {
            constructor(name, salary) {
                super(name, salary)
            }
            code() {
                console.log(`I'm  ${this.name}, Developer my salary is ${this.salary} `);
            }
        }

        let emp1 = new Employee("Raju", 20000);
        emp1.work();
        let emp2 = new Employee("Shyam", 20000);
        emp2.work();

        let dev = new Developer("Baburao", 50000);
        dev.work();
        dev.code();

        // Properties:        // name        // salary
        // Method:        // work()
        // Then create:        // class Developer
        // that extends Employee.
        // Add:
        // code()
        // method.
        // Scenario
        // Company Management Software.
        // What is this question asking?
        // Build a parent-child relationship.
        // Expected:
        // dev.work();
        // dev.code();
        // both should work.
        // Concepts Tested
        // Classes
        // extends
        // super()


        // Question 10 — Bank Account (Interview-
        // Level)
        // Create:
        class BankAccount {
            #balance = 0;

            deposit(amount) {
                if (amount >= 0) {
                    return this.#balance += amount;
                } else {
                    return "Amount is invalid."
                }
            }

            withdraw(amount) {
                if (amount <= this.#balance) {
                    return this.#balance -= amount;
                } else {
                    return "Cannot withdraw more than available balance.";
                }
            }

            getBalance() {
                return this.#balance;
            }
        }

        let user1 = new BankAccount();
        user1.deposit(10000)
        console.log(user1.getBalance());
        user1.withdraw(1000);
        console.log(user1.getBalance());

        // user1.balance = 10000000  = asie ham bahar se value change nahi kar sakate ye privet field hai.
        //Yahi Encapsulation hai.
        // Data ko hide karna aur controlled methods dena.

        // Ye hi Encapsulation hai.
        // Data ko hide karna aur us data ko access / modify karne ke liye controlled methods dena.

        // Requirements:
        // Private Field
        // #balance
        // Methods
        // deposit(amount)
        // withdraw(amount)
        // getBalance()
        // Rules:
        // Cannot withdraw more than available balance.
        // Balance should never be directly accessible.
        // Example:
        // const acc = new BankAccount();
        // acc.deposit(1000);
        // acc.withdraw(300);
        // console.log(acc.getBalance());
        // 700
        // Scenario
        // Banking Application.
        // What is this question asking?
        // This question combines:
        //  Classes
        //  Private Fields
        //  Encapsulation
        //  Business Logic
        // You must protect data and expose only controlled operations.
        // Concepts Tested
        // Classes
        // Private Fields ( # )
        // Methods
        // Encapsulation
        // Real-world Design



        // 🎯 Bonus Challenge (Very Hard)
        // Create a complete:
        // Library Management System
        // using Classes.
        // Class: Book
        // Properties:
        // title
        // author
        // borrowed

        // Class: Library
        // Methods:
        // addBook()
        // borrowBook()
        // returnBook()
        // showAvailableBooks()

        class Book {
            constructor(title, author, isBorrowed) {
                this.title = title;
                this.author = author;
                this.isBorrowed = isBorrowed;
            }
        }

        let book0 = new Book("kahara to ek chi dharam", "Sane Guruji", false);
        let book1 = new Book("Shyamchi Aai", "Sane Guruji", false);
        let book2 = new Book("Vyakti Ani Valli", "Pu. La. Deshpande", false);
        let book3 = new Book("Mrityunjay", "Shivaji Sawant", false);
        let book4 = new Book("Batatyachi Chal", "Pu. La. Deshpande", false);
        let book5 = new Book("Yayati", "V. S. Khandekar", false);
        let book6 = new Book("Godaan", "Munshi Premchand", false);
        let book7 = new Book("Gaban", "Munshi Premchand", false);
        let book8 = new Book("Raag Darbari", "Shrilal Shukla", false);
        let book9 = new Book("Gunahon Ka Devta", "Dharmveer Bharti", false);
        let book10 = new Book("Maila Aanchal", "Phanishwar Nath Renu", false);

        class Library {
            constructor() {
                this.books = [];
            }
            addBook(book) {
                return this.books.push(book)
            }

            borrowBook(title) {
                let book = this.books.find(value => value.title === title);
                if (!book) {
                    return "Book Unavailable."
                }

                if (book.isBorrowed) {
                    return "Book already borrowed."
                }
                book.isBorrowed = true;
                return "Book Borrowed Successfully.";
            }

            returnBook(title) {
                let book = this.books.find(value => value.title === title);

                if (!book) {
                    return "Book Unavailable.";
                }

                if (!book.isBorrowed) {
                    return "Book is already available.";
                }

                book.isBorrowed = false;
                return "Book Returned Successfully.";
            }

            showAvailableBooks() {
                return this.books.filter(book => book.isBorrowed === false)
            }
        }

        let myLibrary = new Library();
        myLibrary.addBook(book0);
        myLibrary.addBook(book1);
        myLibrary.addBook(book2);
        myLibrary.addBook(book3);
        myLibrary.addBook(book4);
        myLibrary.addBook(book5);
        myLibrary.addBook(book6);
        myLibrary.addBook(book7);
        myLibrary.addBook(book8);
        myLibrary.addBook(book9);
        myLibrary.addBook(book10);

        myLibrary.borrowBook("Godaan", "Munshi Premchand");
        myLibrary.borrowBook("Maila Aanchal", "Phanishwar Nath Renu");
        myLibrary.borrowBook("kahara to ek chi dharam", "Sane Guruji");
        myLibrary.borrowBook("Shyamchi Aai", "Sane Guruji");

        myLibrary.returnBook("Godaan", "Munshi Premchand");
        myLibrary.returnBook("Maila Aanchal", "Phanishwar Nath Renu");

        console.log(myLibrary.showAvailableBooks());
        console.log(myLibrary);

