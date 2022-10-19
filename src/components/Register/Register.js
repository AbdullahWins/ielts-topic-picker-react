import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { createUser, addDisplayName } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        addDisplayName(displayName);
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="border border-success border-3 rounded-4 border-opacity-25 mt-3 p-3"
        onSubmit={handleSubmit}
      >
        <p className="text-center fs-3">Register Here</p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="displayName"
            type="text"
            placeholder="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Register Now
        </Button>
        <Form.Text className="text-danger"></Form.Text>
        <p className="mt-3">already have an account?</p>
        <NavLink to="/register">
          <Button className="text-danger w-100" variant="light">
            Login
          </Button>
        </NavLink>
      </Form>
    </Container>
  );
};

export default Register;
