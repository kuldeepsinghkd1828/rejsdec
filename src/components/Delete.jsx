import { useLocation, useNavigate } from "react-router-dom"

function Delete() {

    const navigate = useNavigate();
    const { state: { index } } = useLocation();
    const takeAction = function (action) {
        if (action) {
            let list = JSON.parse(localStorage.getItem('list'));
            list = list.filter((todo, i) => i != index)
            localStorage.setItem('list', JSON.stringify(list));
        }
        navigate('/todo');
    }
    return <>
        <h1>You are here to delete todo No. {index + 1} </h1>
        Are you sure ?
        <button onClick={e => takeAction(1)}>Yes</button>
        <button onClick={e => takeAction(0)}> No</button>
    </>;
}
export default Delete;