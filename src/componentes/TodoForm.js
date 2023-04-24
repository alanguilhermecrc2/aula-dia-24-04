import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        addTodo(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text'className='todo-input' placeholder='Qual é a sua tarefa de hoje?' onChange={(e) => setValue(e.target.Value)}/>
        <button type='submit' className='todo-btn'>Adicionar Tarefa</button>
    </form>   
  )
}
