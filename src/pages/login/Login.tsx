import React from 'react';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';
import SideNav from '../../components/sideNav/SideNav';

const Login = () => {
  return (
    <>
      <SideNav visible={true} hideClose={true} width={450} position="right">
        <div className="container">
          <h3>Login</h3>

          <Form id="customer-form" style={{ marginTop: -10 }}>
            <Form.Item label="Email">
              <Input type="text" placeholder="email" />
            </Form.Item>
            <Form.Item label="Password">
              <Input type="password" placeholder="password" />
            </Form.Item>
            <Form.Item
              className="text-right"
              style={{
                marginTop: '-0.5rem',
              }}
            >
              <a href="#/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </Form.Item>
            <Form.Item>
              <Button color="primary" size="lg" style={{ width: '100%' }}>
                Login
              </Button>
            </Form.Item>
            <Form.Item className="text-center">
              Don&#8217;t have an account? &nbsp;
              <a href="#/sign-up" className="signup text-primary">
                Sign up
              </a>
            </Form.Item>
          </Form>
        </div>
      </SideNav>
    </>
  );
};

export default React.memo(Login);
