import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Footer from './components/Footer';
import Home2 from './components/Conent';
function App() {
  return (
    <div className="App">
       <Login/>
       <Home/>
       <Home2/>
        <Footer/>
    </div>
  );
}

export default App;
