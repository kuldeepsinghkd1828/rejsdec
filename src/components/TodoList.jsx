function TodoList({ list }) {
    return <>
        <div className="container text-secondary row py-5 px-5">
            {list.map((todo, index) => {
                return <div className="col-6 card mb-5 mx-2" key={index} style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">TODO No. {index + 1}</h5>
                        <p className="card-text">{todo}</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            })}
        </div>
    </>
}
export default TodoList;