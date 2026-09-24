// Concept 4: conditional statements. Complete exercises 4A–4C.
// Run: node concepts/04_conditions.js

// 4A: Define passStatus(score). Return 'Pass' for 75 or more; otherwise 'Fail'.
function passStatus(score) {
    if (score >= 75) {
        return 'Pass';
    }
    else {
        return 'Fail';
    }
}

// 4B: Define ticketCategory(age). 0–12 = Child, 13–59 = Adult, 60+ = Senior.
function ticketCategory(age){
    if (age >= 0 && age <= 12){
    return 'Child';
    } else if (age >= 13 && age <=59){
        return 'Adult';
    } else if (age >= 60){
        return 'Senior';
    }
}

console.log(ticketCategory(12));
console.log(ticketCategory(30));
console.log(ticketCategory(60));

// 4C: Define roomStatus(registered, capacity). Return Invalid for negative
// values or a capacity of zero, Overbooked when registered exceeds capacity,
// Full when equal, otherwise Spaces available.
function roomStatus(registered, capacity) {
    if (registered < 0 || capacity <= 0) {
        return "Invalid";
    }
    else if (registered > capacity) {
        return "Overbooked";
    }
    else if (registered == capacity) {
        return "Full";
    }
    else {
        return "Spaces Available";
    }
}

console.log("Test Case 1:", roomStatus(38,40));
console.log("Test Case 2:", roomStatus(40,40));
console.log("Test Case 3:", roomStatus(43,40));
console.log("Test Case 4:", roomStatus(-1,40));