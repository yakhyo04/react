import './Todo.scss';

function Todo({todo, deleteElem, id, checkedElem, isCompleted}){
    
    return(
        <div className="todo__item">
        <ul className="todo__list">
        <input defaultChecked={isCompleted} type="checkbox" data-id={id} onChange={checkedElem} />
        <span>{todo}</span> <button data-id={id} onClick={deleteElem}>x</button>
        </ul>
        </div>
        ) 
    }
    export default Todo;