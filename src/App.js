import logo from './logo.svg';
import './App.css';
import Addcookie from './components/Addcookie';
import Searchcookie from './components/Searchcookie';
import Deletecookie from './components/Deletecookie';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addcookie/>}/>
      <Route path='/search' element={<Searchcookie/>}/>
      <Route path='/view' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;