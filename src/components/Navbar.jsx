import {Link} from 'react-router-dom';
function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/services" tabIndex="-1" aria-disabled="true">Services</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/todo" tabIndex="-1" aria-disabled="true">Todo</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar;