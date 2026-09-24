// Concept 2: objects and arrays. Complete exercises 2A–2C.
// Run: node concepts/02_structures.js

// 2A: Create a book object with title, author, and pages. Print title and pages.
const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  pages: 320
};

console.log("Book title:", book.title);
console.log("Pages:", book.pages);

// 2B: Use this array. Print the first score, last score, and length.
// Then push 95 and print the new length.
const scores = [100, 88, 95, 70, 82];
console.log(scores[0]);
console.log(scores[scores.length - 1]);
console.log(scores.length);

scores.push(95);
console.log(scores.length);

// 2C: Make an array of three participant objects with id, name, and score.
// Print the second participant's name. Change the third participant's score to 88.
// Print the third participant object.
let participant = [
        {
            id: 1,
            name: "Hot Maria Clara",
            score: 100
        },
        {
            id: 2,
            name: "Lyca Gairanod",
            score: 85
        },
        {
            id: 3,
            name: "Rhed Bustamante",
            score: 95
        },
    ];

participant[2].score = 88;

console.log("Participant Name:", participant[1].name);
console.log("Third Participant Object:", participant[2]);