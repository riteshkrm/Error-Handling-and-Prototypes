function getPerson(person) {
  try {
    if (
      typeof person !== "object" ||
      !person.hasOwnProperty("name") ||
      !person.hasOwnProperty("age")
    ) {
      throw new Error("Invalid parameter type");
    }
    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  } catch (error) {
    return error.message;
  }
}
console.log(getPerson({ name: "John", age: 30 }));
console.log(getPerson({ name: "Jane" }));
console.log(getPerson("John"));
