import { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { counterContext } from "../context/Context";


function NavBar() {
  const {counter} = useContext(counterContext);
  return (
    <Navbar className="nav-bar fixed">
      <Container>
        <Navbar.Brand>🍕 Mamma Mia</Navbar.Brand>
        <NavLink to="/home"  className="text-black ms-3 text-decoration-none">
          Home
        </NavLink>
        <NavLink to="/pizza" className="text-black ms-3 text-decoration-none">
          Pizza
        </NavLink>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavLink to="/carrito" className="text-black ms-3 text-decoration-none">
        🚗 Cantidad ${counter}
        </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
