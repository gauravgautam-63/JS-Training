// Factorial Finder

let num = parseInt(prompt("Enter a positive integer to find factorial:"));

if (isNaN(num) || num <= 0) {
  alert("Invalid input! Please enter a positive integer.");
} else {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  alert(" Factorial of " + num + " is " + factorial);
}
