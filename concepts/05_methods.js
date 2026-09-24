// Concept 5: forEach, find, reduce, and filter. Complete exercises 5A–5C.
// Run: node concepts/05_methods.js

// 5A: Use forEach to print 'Hello, NAME' for each name.
const names = ['Ana', 'Ben', 'Cai'];
names.forEach((name) => {
  console.log(`Hello, ${name}`);
});

// 5B: Use find to get the first available room. Print its name.
const rooms = [
  {room: "EA 101", available: false},
  {room: "EA 102", available: true},
  {room: "EA 103", available: false},
];
const availableRoom = rooms.find(room => room.available === true);
console.log(availableRoom.room)

// 5C: Use reduce to sum the scores. Use filter to count scores at least 80.
const marks = [75, 85, 90, 60];
const total = marks.reduce((sum, mark) => sum + mark, 0);

console.log("Sum of Marks:", total);
const highScores = marks.filter(mark => mark >= 80);
console.log("Number of High Scores:", highScores.length);