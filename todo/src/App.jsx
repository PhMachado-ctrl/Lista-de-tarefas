import { useState } from 'react'

import Todo from './components/todo'

import './App.css';

function App() {
  //Todos: Consulta os dados | setTodos: Insere os dados
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo = {todo} />
      ))}
    </div>
  </div>;
}

export default App
