import { useState, useRef, useEffect } from "react"

const TodoList = ({ items, setItems }) => {
    const [inputValues, setInputValues] = useState({});
    const inputRefs = useRef([]);

    const handleKeyDown = (e, id, index) => {
        if (e.key === 'Enter') {
            setItems(prevItems =>
                prevItems.map(item => item.id === id ? { ...item, content: inputValues[id] } : item)
            );

            // Bir sonraki inputa odaklan
            if (inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
        if (e.key === 'Backspace' && inputValues[id] === '') {
            setInputValues(prevState => {
                const { [id]: _, ...rest } = prevState;
                return rest;
            });

            setItems(prevItems => prevItems.filter(item => item.id !== id));

            setTimeout(() => {
                // Bir önceki inputa odaklan
                if (inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1].focus();
                }
            }, 0);
        }
    }

    const handleChange = (e, id) => {
        setInputValues(prevState => ({
            ...prevState,
            [id]: e.target.value
        }));
    }

    const handleBlur = (id) => {
        setItems(prevItems =>
            prevItems.map(item => item.id === id ? { ...item, content: inputValues[id] } : item)
        );
        if (inputValues[id] === '') {
            setInputValues(prevState => ({
                ...prevState,
                [id]: ''
            }));
        }
    }

    return (
        <div className="todo-list-container">
            {items.map((item, index) => {
                return (
                    <div key={item.id} className="todo-list-card">
                        <input
                            ref={el => inputRefs.current[index] = el}
                            id={item.id}
                            type="text"
                            placeholder="(Text)"
                            value={inputValues[item.id] !== undefined ? inputValues[item.id] : item.content}
                            onChange={(e) => handleChange(e, item.id)}
                            onBlur={() => handleBlur(item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id, index)} />
                    </div>

                )
            })}

        </div>
    )
}

export default TodoList