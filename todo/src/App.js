import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';
// import { initialState, todoListReducer } from './reducers/todoListReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Great To-Do List!</h1>
      <ToDoList />
      
    </div>
  );
}

export default App;
