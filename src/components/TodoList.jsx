import React, { useState } from 'react'
import TodoItem from './TodoItem'
let id=1

const TodoList = ({todos, setTodos}) => {
    const[newTodo, setNewTodo]=useState("")

    const createNewTodo=(e)=>{
        setNewTodo(e.target.value)
        // console.log(e.target.value);
    }

    const addNewTodo=()=>{
        let newItem={
            id:id,
            content:newTodo
        }
        id++
        setTodos([...todos, newItem])
    }

  return (
    <>
        <input type="text" placeholder='Write Todo' onChange={createNewTodo} value={newTodo}/>
        <button onClick={addNewTodo}>Add</button>
        <ul>
            {
                todos.map((todo, index, todos)=>{
                    return(
                        <TodoItem todo={todo} todos={todos} setTodos={setTodos}/>
                    )
                })
            }
        </ul>
    </>
  )
}

export default TodoList