class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, "*");
  }

  set password(newPassword) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegex.test(newPassword)) {
      this._password = newPassword;
    } else {
      console.error(
        "Invalid password! Password must be at least 8 characters long, and contain at least one uppercase letter and one number."
      );
    }
  }
}

// Instantiate an instance of the User class
const user = new User("john_doe", "password123");

// Get the password (with asterisks)
console.log(user.password); // Output: *********

// Set a new valid password
user.password = "NewPass123";

// Get the updated password (with asterisks)
console.log(user.password); // Output: *********

// Set an invalid password
user.password = "invalid";

// The error message will be logged
