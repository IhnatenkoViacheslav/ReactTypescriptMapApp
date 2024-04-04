import React from 'react'

import 'boxicons'

import './TodoList.css';

interface TodoListProps {
    todos: {id: string, text: string}[];
    onDeleteTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo}) => {
  return (
    <div className='todo_list'>
      <ul className='list_table'>
        {todos.map(todo => (
            <li className='table_item' key={todo.id}>
                <span>{todo.text}</span>
                <button className='icon_delete' onClick={onDeleteTodo.bind(null, todo.id)}>
                    <i className='bx bx-trash-alt bx-sm' ></i>
                </button>   
            </li>
            ))
        }
      </ul> 
    </div>
  )
}

export default TodoList
