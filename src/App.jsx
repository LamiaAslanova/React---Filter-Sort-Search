import React, { useState } from 'react'
import TodoList from './components/TodoList'

const App = () => {
  const[todos, setTodos]=useState([
    {
      id:0,
      content: "bla bla bla"
    }
  ])

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App