import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(

) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>🍕 Mamma Mia</Navbar.Brand>
        <NavLink to="/"  className="text-black ms-3 text-decoration-none">
          Home
        </NavLink>
        <NavLink to="/pizza" className="text-black ms-3 text-decoration-none">
          Pizza
        </NavLink>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavLink to="/carrito" className="text-black ms-3 text-decoration-none">
        🚗 Carrito
        </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
