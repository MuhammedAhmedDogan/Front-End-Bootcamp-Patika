import { useState } from "react"

const NewTodo = ({ items, setItems }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0;
            const newItem = { id: maxId + 1, content: inputValue };
            setItems((prevItems) => [...prevItems, newItem]);
            setInputValue('');
        }
    }

    return (
        <div className="new-todo-container">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)} />
        </div>
    )
}

export default NewTodo;