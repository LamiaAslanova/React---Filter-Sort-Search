import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className='todo__app'>
        <div className='back__photo'><div className='overlay'></div></div>
        <div className='back__color'></div>
        <div className='title'>
          <h1>TODO</h1>
          <button onClick={toggleDarkMode}>{isDarkMode ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}</button>
        </div>
        <TodoList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
        <p className='drag__drop'>Drag and drop to reorder list</p>
      </div>
    </div>
  )
}

export default App