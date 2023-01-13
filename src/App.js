import logo from './logo.svg';
import './App.css';
import Index from './components/pages/Index';
import './styles/scss/custom.css'
import {BrowserRouter as Router} from "react-router-dom"
import { Routes,Route } from 'react-router-dom';
import Producto from './components/pages/Producto';
function App() {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route exact path='/producto/:id_producto' element={<Producto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
