import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Attendance Counter</h1>
      <p>Count: {count}</p>
      <button
          type="button"
          onClick={() => { /* TODO: add one */ 
            setCount(count + 1);
          }}>Add one
        </button>
      
      <button
          type="button"
          onClick={() => { /* TODO: subtract one, minimum zero */ 
            setCount(count > 0 ? count - 1 : 0);
        }}>Remove one
      </button>
      
      <button
          type="button"
          onClick={() => { /* TODO: reset to zero */ 
            setCount(0);
        }}>Reset
      </button>
    </main>
  );
}
