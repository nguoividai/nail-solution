import React from 'react';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';
import SideNav from '../../components/sideNav/SideNav';

const CreateAccount = () => {
  return (
    <>
      <SideNav visible={true} hideClose={true} width={450} position="right">
        <div className="container">
          <h3>Create an account</h3>

          <Form id="sign-up-form" style={{ marginTop: -10 }}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <Form.Item label="First Name">
                  <Input type="text" placeholder="First name" />
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-6">
                <Form.Item label="Last Name">
                  <Input type="text" placeholder="Last name" />
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12">
                <Form.Item label="Email">
                  <Input type="text" placeholder="Email" />
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12">
                <Form.Item label="Password">
                  <Input type="password" placeholder="Password" />
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12">
                <Form.Item label="Confirm Password">
                  <Input type="password" placeholder="Password" />
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12">
                <Form.Item>
                  <Input type="checkbox" placeholder="Password" /> I agree with the&nbsp;
                  <span className="font-medium ">Term of Use</span>
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12 mt-1">
                <Form.Item>
                  <Button color="primary" size="lg" style={{ width: '100%' }}>
                    Sign up
                  </Button>
                </Form.Item>
              </div>
              <div className="col-sm-12 col-md-12">
                <Form.Item className="text-center">
                  Already have an account? &nbsp;
                  <a href="#/login" className="signup text-primary">
                    Login
                  </a>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </SideNav>
    </>
  );
};

export default React.memo(CreateAccount);
