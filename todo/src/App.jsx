import { useState } from 'react'

function App() {
  //Todos: Consulta os dados | setTodos: Insere os dados
  const [Todos, setTodos] = useState([
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
      {Todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              {todo.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App
