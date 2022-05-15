import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import EntryPage from './components/EntryPage/EntryPage';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<EntryPage />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/' element={<card/>}/> 


      

     

      
    </Routes>
  </Router>
  );
}

export default App;
