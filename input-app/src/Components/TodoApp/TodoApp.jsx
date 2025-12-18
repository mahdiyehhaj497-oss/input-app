import { useState } from "react"
import TodoItem from "../Todoitem/TodoItem"


export default function TodoApp() {
    const [inputVal, setInputVal] = useState("")

    const [todos, setTodos] = useState([])
    
    function handleAddTodo() {
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            title: inputVal,
            is_done:false
        } 
        setTodos([...todos,newTodo])
    }
    function handleDeleteTodo() {
       setInputVal("") 
    }
    function handleEdit() {
        
        setInputVal("please fill up that")
    }
    return (
      <>
        <input value={inputVal}  onChange={(e)=>setInputVal(e.target.value)} type="text" />
            <button onClick={handleAddTodo}>add todo</button>
            <button onClick={handleDeleteTodo}>delete addtodo</button>
            <button onClick={handleEdit}>Edite me</button>
            <ul>
                {todos.map(todo => <TodoItem key={todo.id } title={todo.title} />)}
            </ul>
      </>
    );
}