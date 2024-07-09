import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleToggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "2px solid black",
            padding: "2rem",
            listStyle: "none",
          }}
        >
          <div className="todo-list">
            <ul>
              <h1>Todo List</h1>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo.text}
                  <button onClick={() => handleToggleCompleted(index)}>
                    {todo.completed ? "Uncomplete" : "Complete"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="completed-todos">
            <ul>
              <h1>Completed Todos</h1>
              {todos
                .filter((todo) => todo.completed)
                .map((todo, index) => (
                  <li key={index}>{todo.text}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
