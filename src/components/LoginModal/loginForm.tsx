import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import styles from './index.less';

interface ILoginFormProps extends FormComponentProps {
  userid: string;
  [propName: string]: any;
}

interface ILoginFormState {
  [propName: string]: any;
}

class LoginForm extends Component<ILoginFormProps, ILoginFormState> {
  constructor(props: ILoginFormProps, state: ILoginFormState) {
    super(props, state);
  }

  static state: ILoginFormState = {};

  handleOk = (e: React.MouseEvent): void => {
    console.log('handleOk', e);
  };

  handleCancel = (e: React.MouseEvent): void => {
    console.log('handleCancel', e);
  };

  handleSubmit = (e: React.FormEvent): void => {
    console.log('handleSubmit', e);
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Form className={styles.loginForm} layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item label="User Id">
            <Input />
            {/* {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'The field is required.' }],
                                })(
                                    <Input ref={component => this.inputRef = component} />,
                                )} */}
          </Form.Item>
          <Form.Item label="Password">
            <Input type={'password'} />
            {/* {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'The field is required.' }],
                                })(
                                    <Input type={'password'} />,
                                )} */}
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button key="back" className="back" onClick={this.handleCancel} htmlType={'button'}>
              Cancel
            </Button>
            <Button key="submit" className="submit" onClick={this.handleSubmit} htmlType={'button'}>
              Login
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}
export default Form.create<ILoginFormProps>()(LoginForm);
