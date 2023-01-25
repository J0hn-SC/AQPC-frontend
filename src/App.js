import logo from './logo.svg';
import './App.css';
import Index from './components/pages/Index';
import './styles/scss/custom.css'
import {BrowserRouter as Router} from "react-router-dom"
import { Routes,Route } from 'react-router-dom';
import Producto from './components/pages/Product';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
function App() {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route exact path='/producto/:id_producto' element={<Producto/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
