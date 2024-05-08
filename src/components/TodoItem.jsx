import React from 'react'

const TodoItem = ({todo, todos, setTodos}) => {
    const deleteTodo=(id)=>{
        const target = todos.find((x)=>x.id==id)
        const indexOfTarget = todos.indexOf(target)
        todos.splice(indexOfTarget, 1)
        setTodos([...todos])
    }

  return (
    <>
        <li>{todo.content}</li>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </>
  )
}

export default TodoItem