import React, { useState } from 'react';

import NewTodo from './components/Todo/NewTodo';
import TodoList from './components/Todo/TodoList';
import Map from './components/Map/Map';
import AddPlaces from './components/AddPlaces/AddPlaces';
import { Todo } from './todo.model';

import './App.css';
import SearchAdress from './components/Map/SearchAdress';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  };

  return (
    <div className="wrapper">
      <div className='flex_container'>
          <div className='map_block'>
            <SearchAdress/>
            <Map/>
          </div>
          <div className='container_right'>
            <div className='todo_block'>
              <NewTodo onAddTodo={todoAddHandler}/>
              <TodoList 
                todos={todos} 
                onDeleteTodo={todoDeleteHandler}
              />
            </div>
            <div className='addplace_block'>
                <AddPlaces/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
