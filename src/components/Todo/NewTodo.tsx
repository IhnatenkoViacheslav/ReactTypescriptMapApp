import React, { useRef } from 'react'
import 'boxicons'


import './NewTodo.css';

interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value
        onAddTodo(enteredText);
        textInputRef.current!.value = ''
    }
 
  return (
    <div>
      <form className='todo_search' onSubmit={todoSubmitHandler}>
        <div className='search_control'>
            <label htmlFor="todo-text">Todo text</label>
            <input placeholder='Add wish' type="text" id='todo-text' ref={textInputRef}/>
        </div>
        <button className='icon_add' type='submit'>
          <i className='bx bxs-book-add bx-sm'></i>
        </button>
      </form>
    </div>
  )
}

export default NewTodo
