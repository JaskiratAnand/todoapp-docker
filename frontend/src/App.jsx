import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []); 

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      }
    );
  }
  
  const handleAddingTodo = () => {
    fetchTodos();
  }

  const completeTodo = () => {
    fetchTodos();
  }

  return (
    <div>
      <h1>todo's</h1>
      <CreateTodo onAddTodo={ handleAddingTodo } />
      <hr />
      <Todos todos={ todos } onCompleteTodo={ completeTodo } />
    </div>
  )
}

export default App
