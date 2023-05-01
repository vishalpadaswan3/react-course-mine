import { useState } from "react";


export default function Todo() {

    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleAdd = () => {

        const newTodo = {
            title: text,
            status: false
        }

        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setText("")
    }

    console.log(todos)

    return (
        <div className="Alltodos">
            <div className="todo">
                <input value={text}
                    placeholder="Add a new todo"
                    onChange={handleChange} />
                <button onClick={handleAdd}>Add</button>

                <div className="shyam">
                    {todos.map((todo, index) => (
                        <div className="ram" key={index}>
                            <h3>{todo.title}</h3>
                            <p>{todo.status ? "Completed" : "Pending"}</p>

                            <button onClick={() => {
                                const newTodos = [...todos]
                                newTodos[index].status = !newTodos[index].status
                                setTodos(newTodos)
                            }}>{todo.status ? "Mark as Pending" : "Mark as Completed"}</button>

                            <button onClick={() => {
                                const newTodos = [...todos]
                                newTodos.splice(index, 1)
                                setTodos(newTodos)
                            }}>Delete</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}