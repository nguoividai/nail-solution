import React from 'react';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';
import SideNav from '../../components/sideNav/SideNav';

const ForgotPassword = () => {
  return (
    <>
      <SideNav visible={true} hideClose={true} width={450} position="right">
        <div className="container">
          <div className="title-description">
            <h3>Forgot your password</h3>
            <p className="text-grey">
              It happens to the best of us. Simply enter email and we will send you a link to reset
              it.
            </p>
          </div>

          <Form id="customer-form" style={{ marginTop: -10 }}>
            <Form.Item label="Email">
              <Input type="text" placeholder="email" />
            </Form.Item>
            <Form.Item className="mt-2">
              <Button color="primary" size="lg" style={{ width: '100%' }}>
                Reset Passwords
              </Button>
            </Form.Item>
          </Form>
        </div>
      </SideNav>
    </>
  );
};

export default React.memo(ForgotPassword);
