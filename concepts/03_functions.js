// Concept 3: functions and parameters. Complete exercises 3A–3C.
// Run: node concepts/03_functions.js

// 3A: Define triangleArea(base, height). Return (base * height) / 2.
// Call it with (6, 4) and (10, 3).
function triangleArea(base, height) {
    return (base * height) /2;
}

console.log(triangleArea(6, 4));
console.log(triangleArea(10, 3));

// 3B: Define calculateFare(distanceKm, ratePerKm).
// Return the total fare. Call it with (8, 15) and (3, 15).
function calculateFare(distanceKm, ratePerKm){
    return distanceKm * ratePerKm;
}
console.log(calculateFare(8, 15));
console.log(calculateFare(3, 15));

// 3C: Define finalGrade(quiz, project, exam).
// Weights: 20%, 30%, 50%. Test (80, 90, 70) and (100, 100, 100).
function finalGrade(quiz, project, exam) {
    return ((quiz * 0.2) + (project * 0.3) + (exam * 0.5));
}

console.log("Final Grade 1:", finalGrade(80, 90, 70));
console.log("Final Grade 2:", finalGrade(100, 100, 100));