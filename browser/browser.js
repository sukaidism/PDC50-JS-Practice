// Complete 6A and 6B. Refresh browser/index.html after saving.
// 6A: Select #greetButton and #greeting. On click, set greeting.textContent
// to 'Hello, class!'.
const greetButton = document.querySelector('#greetButton');
const greeting = document.querySelector('#greeting');

greetButton.addEventListener('click', () => {
  greeting.textContent = 'Hello, class!';
});

// 6B: Select #noteInput and #charCount. On every input event, set
// charCount.textContent to the current textarea value's length.
const noteInput = document.querySelector('#noteInput');
const charCount = document.querySelector('#charCount');

noteInput.addEventListener('input', (event) => {
  charCount.textContent = event.target.value.length;
});