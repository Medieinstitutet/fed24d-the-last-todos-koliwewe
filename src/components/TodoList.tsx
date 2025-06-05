import { type Todo } from "../models/Todo";

interface Props {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoList = ({todos, toggleTodo }: Props) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li 
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={todo.done ? 'done' : ''}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;