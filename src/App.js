import {Navbar, NavbarBrand, NavLink} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

 function App() {
  return (
    <div>
      <Navbar dark  color="success">
        <div className="container">
          <NavbarBrand href="/">Droid Cafe</NavbarBrand>
          <NavLink href="/home" className="active">Home</NavLink>
          <NavLink href="/about">About this</NavLink>
        </div>
      </Navbar>
       <Menu />  
    </div>
  );
}
export default App;
