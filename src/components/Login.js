import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // We'll create this CSS file for custom styles

const Login = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log(values);
    alert('Login Successful!');
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="login-card shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Formik
                initialValues={{ username: '', password: '', rememberMe: false }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Field
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter your username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group form-check">
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>

                    <div className="text-center mt-3">
                      <a href="#" className="forgot-password-link">
                        Forgot Password?
                      </a>
                    </div>

                    <hr />

                    <div className="text-center social-login-buttons">
                      <Button variant="danger" className="btn-block mb-2">
                        Login with Google
                      </Button>
                      <Button variant="primary" className="btn-block">
                        Login with Facebook
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
