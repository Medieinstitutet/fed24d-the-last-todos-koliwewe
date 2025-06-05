import { type Todo } from "../models/Todo";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-card ${todo.done ? 'done' : ''}`}>
          <div className="todo-content">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
          <div className="button-group">
            <button
              className="toggle-button"
              onClick={() => toggleTodo(todo.id)}
            >
              ✅ {todo.done ? "Ångra" : "Klar"}
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              🗑 Ta bort
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
