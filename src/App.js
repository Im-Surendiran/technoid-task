import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './i18n'
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Home />
      </div>
    </div>
  );
}

export default App;
