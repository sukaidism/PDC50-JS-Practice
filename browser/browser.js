// Complete 6A and 6B. Refresh browser/index.html after saving.
// 6A: Select #greetButton and #greeting. On click, set greeting.textContent
// to 'Hello, class!'.
select('#greetButton').addEventListener('click', () => {
  select('#greeting').textContent = 'Hello, class!';
});

// 6B: Select #noteInput and #charCount. On every input event, set
// charCount.textContent to the current textarea value's length.
select('#noteInput').addEventListener('input', (event) => {
  select('#charCount').textContent = event.target.value.length;
});