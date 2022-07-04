import React,{useState, useEffect, useRef} from 'react'

const TodoForm = ({ onSubmit, edit }) => {
    const [input, setInput] = useState(edit ? edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput('')
    }

    return (
        <form className={"todo-form"} onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                    placeholder='Add a todo'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </button>
                </>
            )}
        </form>
    )
}

export default TodoForm