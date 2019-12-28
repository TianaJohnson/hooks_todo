import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useStae([
      {
        text: 'Learn about react',
        isCompleted: false
      },
    ])
  
}

export default App;
