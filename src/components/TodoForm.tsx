import { useState } from 'react';
import { type Todo } from '../models/Todo';

interface Props {
    addTodo: (todo: Todo) => void;
}

const TodoForm = ({ addTodo }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        addTodo({
            id: Date.now(),
            title, description,
            done: false
        });
        setTitle('');
        setDescription('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Titel'
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
            <input
            type='text'
            placeholder='Beskrivning'
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <button type='submit'>Lägg till</button>
        </form>
    )
};

export default TodoForm;