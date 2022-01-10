import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import database from '../database';
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const navigator = useNavigate();
    let database = JSON.parse(localStorage.getItem('database'));
    if (database == null) {
        database = [];
        localStorage.setItem('database', JSON.stringify(database));
        database = JSON.parse(localStorage.getItem('database'));
    }
    const signupHandler = function (e) {
        let signupcomplete = false;
        if (name != '' && email != '' && password != '' && password == cpassword) {

            if (database.length == 0) {
                database.push({ name, email, password });
                localStorage.setItem('database', JSON.stringify(database));
                signupcomplete = true;
            } else {
                let exist = database.findIndex(user => user.email == email)
                if (exist !== -1) {
                    window.alert('user Already exist');
                } else {
                    database.push({ name, email, password });
                    localStorage.setItem('database', JSON.stringify(database));
                    signupcomplete = true;
                }
            }
        } else {
            window.alert('Please fill all the fields')
        }
        if (signupcomplete) {
            navigator('/login');
        }
    }
    return <>
        <div className="container mt-4">
            <label>Enter the Name</label>
            <input onChange={(e) => setName(e.target.value)} className="form-control" type="email" />
            <label>Enter the email</label>
            <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" />
            <label>Enter the Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
            <label>confirm the Password</label>
            <input onChange={(e) => setcPassword(e.target.value)} className="form-control" type="password" />
            <input
                onClick={(e) => signupHandler(e)}
                className="btn btn-success mt-3"
                type="button"
                value="signup Me" />
        </div>
    </>
}
export default Signup;