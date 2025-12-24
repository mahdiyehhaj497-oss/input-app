import { useState } from "react"
import TodoItem from "../Todoitem/TodoItem"

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState("")

    function handleAddTodo() {
        if (inputVal.trim() === "") return
       const newTodos = {
            id: Math.floor(Math.random() * 10000),
            title: inputVal,
        }
        setTodos([...todos,newTodos])
        setInputVal("")
    }
   
    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo =>todo.id !==id))
    }
    function handleOnEdit(id ,newTitle) {
        setTodos(todos.map(todo => todo.id ===id ? {...todo ,title:newTitle}: todo))
    }
        
       
            
        
    
    return (
        <> 
            <input
                type="text"
                value={inputVal}
                onChange={evt => setInputVal(evt.target.value)}
            />
            <button onClick={handleAddTodo}>add Todo</button>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id}
                    title={todo.title}
                    id={todo.id}
                    onDelete={handleDeleteTodo}
                    onEdit={handleOnEdit}
                />)}
            </ul>
        </>
    )
}


