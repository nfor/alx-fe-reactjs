import React from 'react';
import TodoList from './components/TodoList'; // import the component

function App() {
  return (
    <div className="App">
      <h1>My Todo App</h1>
      <TodoList /> {/* render the TodoList here */}
    </div>
  );
}

export default App;
