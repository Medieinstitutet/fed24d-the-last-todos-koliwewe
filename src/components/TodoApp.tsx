import { useEffect, useState } from 'react';
import  {type Todo } from '../models/Todo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('todos');
        if (stored) setTodos(JSON.parse(stored));
    }, []);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo: Todo) => {
        setTodos(prev => [...prev, todo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(prev => prev.map (todo => 
            todo.id === id ? {...todo, done: !todo.done }: todo
        ));
    };

    const sortTodos = () => {
        setTodos(prev => 
            [...prev].sort((a, b) => Number(a.done)- Number(b.done))
        );
    };


    return (
    <div className="todo-app">
      <h1>Min Todo-Lista</h1>
      <TodoForm addTodo={addTodo} />
      <button onClick={sortTodos}>Sortera</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );

};

export default TodoApp;