import { useLocation } from "react-router-dom";

function Dashboard() {
    const { state: { name } } = useLocation();
    console.log()
    return <h1>Welcome to dashboard, {name}</h1>
}
export default Dashboard;