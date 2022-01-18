import { useState } from 'react';
import TodoList from './TodoList';
function Todo() {
    let todos = localStorage.getItem('list');
    if (todos == null) {
        localStorage.setItem('list', JSON.stringify([]));
        todos = JSON.parse(localStorage.getItem('list'));
    } else
        todos = JSON.parse(localStorage.getItem('list'));
    const [todo, setTodo] = useState('');
    const [list, setList] = useState(todos);
    const addHandler = function () {
        todos.push(todo);
        setList([todo, ...list])
        setTodo('') // to empty the input for todo
        localStorage.setItem('list', JSON.stringify(todos));
    }
    return <>
        <div className="input-group mb-3 mt-5 px-5">
            <input
                value={todo}
                onKeyPress={e => (e.which == 13 ? addHandler() : undefined)}
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