import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="border border-success border-3 rounded-4 border-opacity-25 mt-3 p-3"
        onSubmit={handleSubmit}
      >
        <p className="text-center fs-3">Log In</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger"></Form.Text>
        <p className="mt-3">Don't have an account?</p>
        <NavLink to="/register">
          <Button className="text-danger w-100" variant="light">
            Register Now
          </Button>
        </NavLink>
      </Form>
    </Container>
  );
};

export default Login;
