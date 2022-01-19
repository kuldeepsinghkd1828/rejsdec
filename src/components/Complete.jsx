import { useLocation, useNavigate } from "react-router-dom"

function Complete() {

    const navigate = useNavigate();
    const { state: { index } } = useLocation();
    const takeAction = function (action) {
        if (action) {
            let list = JSON.parse(localStorage.getItem('list'));
            let todoItem = list.find((todo, i) => i == index)
            list[index] = { ...todoItem, status: 'complete' };
            localStorage.setItem('list', JSON.stringify(list));
        }
        navigate('/todo');
    }
    return <>
        <h1>You are here to Complete todo No. {index + 1} </h1>
        Are you sure ?
        <button onClick={e => takeAction(1)}>Yes</button>
         <button onClick={e => takeAction(0)}> No</button>
    </>;
}
export default Complete;