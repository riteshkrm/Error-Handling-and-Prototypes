function convertToNumber(str) {
  try {
    const num = Number(str);
    if (Number.isNaN(num)) {
      throw new Error("Invalid number");
    }
    return num;
  } catch (error) {
    return "Invalid number";
  }
}

console.log(convertToNumber("42")); 
console.log(convertToNumber("3.14"));
console.log(convertToNumber("Hello"));
