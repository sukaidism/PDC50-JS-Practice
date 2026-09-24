// 7C: This works for three scores but fails for an empty array.
// Return null for an empty array, then keep the ordinary result correct.
function average(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
console.log(average([8, 10, 9])); // Expected: 9
console.log(average([]));          // Expected after repair: null
