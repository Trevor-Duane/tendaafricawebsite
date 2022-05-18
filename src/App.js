// import Navigationbar from './Components/NavbarComponent/Navigationbar';

/*the real application imports */
import Contact from './pages/ContactPage/Contact';
import Home from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes basename="/">
          <Route path="/" element={ <Home/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </div>
  );
}

export default App;
