import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
        fontSize:'20px'
    };
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/services" tabIndex="-1" aria-disabled="true">Services</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className="nav-link" to="/todo" tabIndex="-1" aria-disabled="true">Todo</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar;