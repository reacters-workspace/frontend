import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavBar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
