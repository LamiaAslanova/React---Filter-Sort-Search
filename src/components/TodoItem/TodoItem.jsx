import React from 'react'
import './TodoItem.css'

const TodoItem = ({todo, todos, setTodos}) => {
  const toggleCompleted = (id) => {
    const target = todos.find(x => x.id == id)
    target.isCompleted = !target.isCompleted
    setTodos([...todos])
    localStorage.setItem('todos', JSON.stringify([...todos]))
  }

  return (
    <>
      <li className={todo.isCompleted ? 'completed' : ""}><button className='complete__button' onClick={()=>toggleCompleted(todo.id)}><i class="fa-solid fa-check"></i></button> <p>{todo.content}</p></li>
    </>
  )
}

export default TodoItem