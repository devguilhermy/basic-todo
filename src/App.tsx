import { useState } from 'react';

import './styles/todo.scss';

interface TodoItem {
    id: number;
    title: string;
}

export default function App() {
    const [items, setItems] = useState<TodoItem[]>([]);

    const [input, setInput] = useState('');

    function handleAdd() {
        if (input === '') {
            alert('Preencha o campo!');
            return;
        }

        let newId;

        if (items.length === 0) {
            newId = 0;
        } else {
            newId = Math.max.apply(
                Math,
                items.map((item) => item.id)
            );
        }

        setItems([...items, { id: newId + 1, title: input }]);
        setInput('');
    }

    function handleRemove(id: number) {
        setItems([...items].filter((item) => item.id !== id));
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.code === 'Enter') {
                        handleAdd();
                    }
                }}
            />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={() => handleRemove(item.id)}
                            >
                                X
                            </button>{' '}
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
