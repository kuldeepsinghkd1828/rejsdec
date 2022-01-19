import { Link, useNavigate } from "react-router-dom";

function TodoList({ list, editHandler }) {
    const navigate = useNavigate()
    const completed = list.filter(todo => todo.status == 'complete').length;
    const pending = list.filter(todo => todo.status == 'pending').length;
    if (list.length == 0) {
        return <h4 className="text-center">List is Empty</h4>
    }
    return <>
        <div className="container text-secondary row py-5 px-5">
            <h2>completed : {completed} | pending : {pending}</h2>
            {list.map((Todo, index) => {
                const { todo, date, status } = Todo;
                let complete = status == 'pending' ?
                    <button
                        onClick={() => navigate('/complete', { state: { index } })}
                        className="btn btn-success mb-2">
                        Complete
                    </button>
                    :
                    undefined;
                return <div className="col-6 card mb-5 mx-2 flex" key={index} style={{ width: "30rem", flexDirection: "row", justifyContent: 'space-evenly',alignItems:'center',alignContent:'center' }}>
                    <div className="card-body">
                        <h1 className="card-title" style={{ position: 'absolute', right: '4px', top: '0', color: 'green' }}>{index + 1}</h1>
                        <hr style={{ borderTop: '1px solid black' }} className="mt-5" />
                        <h2 className="card-text mt-3">{todo}</h2>
                        <p>Created On : {date}</p>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {complete}
                            <button
                                onClick={() => navigate('/delete', { state: { index } })}
                                className="btn btn-danger mb-2">
                                Delete
                            </button>
                            <button
                                onClick={e => editHandler(e)}
                                data-index={index}
                                className="btn btn-info">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
export default TodoList;