import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    if (todo) {
      const newTodo = {
        id: Math.random().toString(),
        text: todo,
        checked: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  }

  function deleteTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}