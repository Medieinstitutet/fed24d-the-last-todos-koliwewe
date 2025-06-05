import { useEffect, useState } from 'react';
import { type Todo } from '../models/Todo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Ladda från localStorage eller hårdkodad lista
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTodos(parsed);
          return;
        }
      } catch (error) {
        console.error('Fel vid parsning av todos från localStorage:', error);
      }
    }

    // Hårdkodad lista om inget finns
    setTodos([
      { id: 1, title: 'Handla mat', description: 'Köp mjölk och bröd', done: false },
      { id: 2, title: 'Träna', description: 'Gå till gymmet kl 18', done: false },
      { id: 3, title: 'Plugga React', description: 'Gör todo-uppgiften', done: false },
      { id: 4, title: 'Köpa godis', description: 'Köpa godis på lördag', done: false },
      { id: 5, title: 'fotboll', description: 'Titta fotboll matchena i helgen', done: false },
      { id: 6, title: 'Grilla', description: 'Köppa allt som behöver för grill festen', done: false }

    ]);
  }, []);

  // Uppdatera localStorage när todos ändras
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log('Aktuell todo-lista:', todos);
  }, [todos]);

  // Lägg till ny todo
  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  // Markera som klar / o-klar
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Radera en todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Sortera todos: oklara först
  const sortTodos = () => {
    setTodos((prev) =>
      [...prev].sort((a, b) => Number(a.done) - Number(b.done))
    );
  };

  return (
    <div className="todo-app">
      <h1>Min Todo-Lista</h1>
      <TodoForm addTodo={addTodo} />
      <button onClick={sortTodos}>Sortera</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
