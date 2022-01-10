import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
function App() {
    return <>
        <div className="bg-dark text-white mt-3" style={{ height: '100vh' }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<h1>Home Page</h1>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/contact' element={<h1>Contact Page</h1>} />
                    <Route path='/services' element={<h1>Services Page</h1>} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
}
export default App;