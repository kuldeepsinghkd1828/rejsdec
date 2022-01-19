import { useState } from 'react';
import TodoList from './TodoList';
let todos = localStorage.getItem('list');
function Todo() {
    if (todos == null) {
        localStorage.setItem('list', JSON.stringify([]));
        todos = JSON.parse(localStorage.getItem('list'));
    } else {
        todos = JSON.parse(localStorage.getItem('list'));
    }
    
    const [todo, setTodo] = useState('');
    const [list, setList] = useState(todos);
    const [index, setIndex] = useState(-1);

    const addHandler = function () {
        if (index < 0) {
            let todoItem = { todo, date: new Date().toLocaleDateString(), status: 'pending' }
            todos.push(todoItem);
            setList(todos)
            setTodo('') // to empty the input for todo
            localStorage.setItem('list', JSON.stringify(todos));
        } else {
            updateHandler();
        }
    }
    const updateHandler = function () {
        list[index].todo = todo;
        // console.log(list);
        setList([...list])
        setTodo('') // to empty the input for todo
        localStorage.setItem('list', JSON.stringify(list));
    }

    const editHandler = function (e) {
        let index = parseInt(e.target.dataset.index);
        setIndex(index);
        let editTodo = list[index];
        setTodo(editTodo.todo)
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
        <TodoList list={list} editHandler={editHandler} />
    </>
}
export default Todo;