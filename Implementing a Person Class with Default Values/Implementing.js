class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Instantiate an instance of the Person class
const person1 = new Person("John Doe", 30);
const person2 = new Person(); // Using default parameters

// Call the getDetails method
console.log(person1.getDetails());
console.log(person2.getDetails());
