import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
let database = JSON.parse(localStorage.getItem('database'));
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    const loginHandler = function (e) {
        const user = database.find(user => user.email == email && user.password == password)
        if (user !== undefined) {
            console.log(user);
            window.alert('login Success');
            navigator('/dashboard', { state: { "name": user.name } });
        } else {
            window.alert('Login Invalid');
        }
    }
    return <>
        <div className="container mt-4">
            <label>Enter the email</label>
            <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" />
            <label>Enter the Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
            <input
                onClick={(e) => loginHandler(e)}
                className="btn btn-success mt-3"
                type="button"
                value="Login Me" />
        </div>
    </>
}
export default Login;