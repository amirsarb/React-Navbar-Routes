import Home from './Home'
import About from './About'
import Contact from './Contact';
import './App.css';
// import { BrowserRouter,Route, Switch, NavLink } from "react-router-dom";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return ( <div className='mainApp'>
  <nav className='navbar'>
    <NavLink exact="true" activeclassname='link-active' to='/home'>
      Home
    </NavLink>
    <NavLink exact="true" activeclassname='link-active' to='/contact'>
      Contact
    </NavLink>
    <NavLink exact="true" activeclassname='link-active' to='/about'>
      About
    </NavLink>


  </nav>

  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/home' element={<Home />} />
    <Route exact path='/contact' element={<Contact />} />
    <Route exact path='/about' element={<About />} />
  
  </Routes>
</div>
        
);
}

export default App;
