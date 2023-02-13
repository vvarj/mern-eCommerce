import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignInScreen = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group>
          <Form.Label className="mb-3">Email</Form.Label>
          <Form.Control className="mb-3" type="email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-3">Password</Form.Label>
          <Form.Control className="mb-3" type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" variant="warning">
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignInScreen;
