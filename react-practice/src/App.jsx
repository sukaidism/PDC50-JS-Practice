import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Attendance Counter</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={() => { /* TODO: add one */ }}>Add one</button>
      <button type="button" onClick={() => { /* TODO: subtract one, minimum zero */ }}>Remove one</button>
      <button type="button" onClick={() => { /* TODO: reset to zero */ }}>Reset</button>
    </main>
  );
}
