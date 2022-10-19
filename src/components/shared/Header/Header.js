import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/Home">IELTS Help</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/topics">
              <Button variant="dark">Topics</Button>
            </NavLink>
            <NavLink to="/words">
              <Button variant="dark">Words</Button>
            </NavLink>
          </Nav>
          <Nav>
            <p className="m-2 text-light">Welcome {user?.displayName}!</p>
            {user ? (
              <NavLink to="/">
                <Button
                  onClick={logOut}
                  className="ml-2"
                  variant="outline-danger"
                >
                  Logout
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button className="ml-2" variant="outline-success">
                  Login
                </Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
