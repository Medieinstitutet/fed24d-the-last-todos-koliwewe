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
        <li key={todo.id} className={todo.done ? 'done' : ''}>
          <div onClick={() => toggleTodo(todo.id)}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
          <button className="delete-button" onClick={() => deleteTodo(todo.id)}>🗑 Ta bort</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;