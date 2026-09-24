// Concept 1: variables and data types. Complete exercises 1A–1C.
// Run: node concepts/01_values.js

// 1A: Define studentName, yearLevel, and isEnrolled. Print values and types.
const studentName = "Jansdale Angeline Calma";
const yearLevel = 4;
const isEnrolled = true;

console.log("Student Name:", studentName, "Type:", typeof studentName);
console.log("Year Level:", yearLevel, "Type:", typeof yearLevel);
console.log("Is Enrolled:", isEnrolled, "Type:", typeof isEnrolled);

// 1B: Start with Celsius 30. Convert to Fahrenheit. Reassign Celsius to 32 and convert again.

let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;
console.log("Farenheit:", fahrenheit);

celsius = 32;

fahrenheit = (celsius * 9/5) + 32;
console.log("Farenheit:", fahrenheit);

// 1C: A room has capacity 40. There are 37 registrations and 5 more arrive.
// Print the new registrations, remaining seats, and a boolean named overCapacity.
let capacity = 40;
let registrations = 37;
let newArrivals = 5;

// Update Registrations
registrations += newArrivals;
let remainingSeats = (capacity - registrations);
let overCapacity = registrations > capacity;

console.log("Registrations:", registrations);
console.log("Remaining Seats:", remainingSeats);
console.log("Over Capacity:", overCapacity);