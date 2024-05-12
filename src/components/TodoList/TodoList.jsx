import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

const TodoList = ({ todos, setTodos, filter, setFilter }) => {
    const [newTodo, setNewTodo] = useState("")

    const createNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const addNewTodo = () => {
        if(newTodo.trim() !== ''){
            let newTodoItem = {
                id: uuidv4(),
                content: newTodo,
                isCompleted: false
            }
            setTodos([...todos, newTodoItem])
            localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]))
            setNewTodo("")
        }
    }

    const filterTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.isCompleted;
        } else if (filter === 'completed') {
            return todo.isCompleted;
        }
        return true;
    });

    const deleteCompleted = () => {
        setTodos(todos.filter(todo => todo.isCompleted == false));
        localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.completed == false)))
    };

    return (
        <div className='todo__app__body'>
            <form action="#" onSubmit={addNewTodo}>
                <input className='add__input' type="text" placeholder='Create a new todo...' value={newTodo} onChange={createNewTodo} />
            </form>
            <div className="todo__app__body__main">
                <ul>
                    {
                        filterTodos.map((todo, index, todos) => {
                            return (
                                <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
                            )
                        })
                    }
                </ul>
                <div className="todo__bottom">
                    <p className='active__count'>{todos.filter(todo => !todo.isCompleted).length} items left</p>
                    <div className="todo__bottom__buttons">
                        <button className={filter === 'all' ? 'all' : ''} onClick={() => setFilter('all')}>All</button>
                        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
                        <button className={filter === 'completed' ? 'comp' : ''} onClick={() => setFilter('completed')}>Completed</button>
                    </div>
                    <button className='delete__completed__button' onClick={() => deleteCompleted()}>Clear Completed</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList