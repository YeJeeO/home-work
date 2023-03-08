import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
 
const LOCAL_STORAGE_KEY = "react-todo-list";
function App() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storageTodos) {
        setTodos(storageTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
  
    function addTodo(todo) {
      setTodos([todo, ...todos]);
    }
  
    function toggleComplete(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      );
    }
  
    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  
    return (
      <div className="App">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    );
  }
  
  export default App;