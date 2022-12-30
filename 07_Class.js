class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 
    details(){
        console.log(this.name, this.id, this.city, this.age);
    }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
empSmith.details();
empJay.details();


// Student 
class Student{
   name
   rollNo
   age
   graduation
   constructor(name, rollNo, age, graduation){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
    this.graduation = graduation;
   }
}
let studChetan = new Student("Chetan", 121, 25, "BE Computer");
let studReshma = new Student("Reshama",312, 20, "MCA");
console.log(studReshma);

let isInstance = studChetan instanceof Employee;
console.log(isInstance);
// Object is an instance of class 
















