import { useState } from 'react';
import TodoList from './TodoList';
function Todo() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const addHandler = function () {
        setList([...list, todo])
        setTodo('') // to empty the input for todo
    }
    return <>
        <div className="input-group mb-3 mt-5 px-5">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                className="form-control"
                placeholder="enter the todo.."
                aria-label="Enter the todo.."
                aria-describedby="button-addon2" />
            <button
                onClick={addHandler}
                className="btn btn-outline-primary text-white"
                type="button"
                id="button-addon2">
                Add Todo
            </button>
        </div>
        <TodoList list={list} />
    </>
}
export default Todo;