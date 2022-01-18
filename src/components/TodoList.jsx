import { Link, useNavigate } from "react-router-dom";

function TodoList({ list }) {
    const navigate = useNavigate()
    if (list.length == 0) {
        return <h4 className="text-center">List is Empty</h4>
    }
    return <>
        <div className="container text-secondary row py-5 px-5">
            {list.map((todo, index) => {
                return <div className="col-6 card mb-5 mx-2" key={index} style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">TODO No. {index + 1}</h5>
                        <p className="card-text">{todo}</p>
                        <button onClick={() => navigate('/complete')} className="btn btn-success">Complete</button>
                        <button onClick={() => navigate('/delete', { state: { index } })} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            })}
        </div>
    </>
}
export default TodoList;