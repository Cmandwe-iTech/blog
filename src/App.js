import {Routes,Route} from "react-router-dom"
import './App.css';
import Create from './components/create';
import Header from './components/header';
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/home'element={<Header/>}/>
      <Route path='/create'element={<Create/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
