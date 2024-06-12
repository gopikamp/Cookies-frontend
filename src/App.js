import logo from './logo.svg';
import './App.css';
import Addcookie from './components/Addcookie';
import Searchcookie from './components/Searchcookie';
import Deletecookie from './components/Deletecookie';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <Addcookie/>
      <Searchcookie/>
      <Deletecookie/>
      <Viewall/>
    </div>
  );
}

export default App;
