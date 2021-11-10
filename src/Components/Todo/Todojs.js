import { useState } from 'react';
import './Todo.scss';
import Todo from './Todo';

function Todojs(){
    let [todo, setTodo] = useState(JSON.parse(window.localStorage.getItem('todos')) || [])
  
  
  function deleteElem(e){
    const id = e.target.dataset.id
    
    const filteredElem = todo.filter(t => t.id !== Number(id))
    
    setTodo(filteredElem)
    
    window.localStorage.setItem('todos', JSON.stringify(todo))
  }
  
  function checkedElem(e){
    const id = e.target.dataset.id
    
    const findElem = todo.find(t => t.id === Number(id))

    findElem.isCompleted = !findElem.isCompleted
  

    window.localStorage.setItem('todos', JSON.stringify(todo))

  }
  
  function handle(event){
    if(event.code === 'Space' || event.code === 'Enter'){
      let newTodo = {
        id: new Date().getTime(),
        content: event.target.value.trim(),
        isCompleted: false
      }
      
      setTodo([newTodo, ...todo])
      
      window.localStorage.setItem('todos', JSON.stringify(todo))
      event.target.value = null;
    }
  }
  
  window.localStorage.setItem('todos', JSON.stringify(todo))
  
  function onSubmit(e){
    e.preventDefault();
  }
    return(
        <div>
        <div className="container">
          <div className="todojs__div">

          <h1 className="todo__title">Make Your Daily Routine ToDo</h1>
        <form className="todo__form" onKeyPress={handle} onSubmit={onSubmit}>
         <input placeholder="What do you want to do?" className="todo__input" type="text" />
         <button className="todo__btn">Click</button>
        </form>

    
    {todo.map(t => <Todo
      key={t.id}
      id={t.id}
      todo={t.content}
      deleteElem={deleteElem}
      checkedElem={checkedElem}
      isCompleted={t.isCompleted}
      />)}
        <div className="todo__img">
          <img className="todo__img" src="https://picsum.photos/500/400" />
        </div>
      </div>
      </div>
        </div>
    );
}

export default Todojs;