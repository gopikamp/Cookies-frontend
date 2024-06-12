import logo from './logo.svg';
import './App.css';
import Addcookie from './components/Addcookie';
import Searchcookie from './components/Searchcookie';
import Deletecookie from './components/Deletecookie';

function App() {
  return (
    <div>
      <Addcookie/>
      <Searchcookie/>
      <Deletecookie/>
    </div>
  );
}

export default App;
