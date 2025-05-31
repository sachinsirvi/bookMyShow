import logo from './logo.svg';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path = "/" element = { <Home/>}/>
        <Route path = "/login" element = { <Login/>}/>
        <Route path = "/register" element = { <Register/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
