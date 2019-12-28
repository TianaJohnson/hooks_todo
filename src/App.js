import React, { useState } from 'react';

function Todo({ todo, index}) {
  return <div className="todo">{todo.text}</div>;
}

function App() {

    const [todos, setTodos] = useState([
      {
        text: 'Learn about react',
        isCompleted: false
      },
      {
        text: 'Meet friend for lunch',
        isCompleted: false
      },
      {
        text: 'Build really cool todo app',
        isCompleted: false
      },
    ])

    return(
      <div className="app">
        <div classname="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo}/>
          ))}
        </div>
      </div>
    )
  
}

export default App;
