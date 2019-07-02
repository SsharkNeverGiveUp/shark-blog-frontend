import React, { Component } from 'react';
import { Modal, Form, Button, Input } from 'antd';
import styles from './index.less';
import { FormComponentProps } from 'antd/lib/form';

export interface ILoginModalProps extends FormComponentProps {
  userId?: string;
  password?: string;
  [propName: string]: any;
}

interface ILoginModalState {
  visible: boolean;
  [propName: string]: any;
}

class LoginModal extends Component<ILoginModalProps, ILoginModalState> {
  readonly state: ILoginModalState = {
    visible: false,
  };

  constructor(props: ILoginModalProps, state: ILoginModalState) {
    super(props, state);
  }

  handleOk = (e?: React.MouseEvent): void => {
    console.log('handleOk', e);
    this.setState({ visible: false });
  };

  handleCancel = (e?: React.MouseEvent): void => {
    console.log('handleCancel', e);
    this.setState({ visible: false });
  };

  handleSubmit = (e?: React.MouseEvent): void => {
    console.log('handleSubmit', e);
    this.setState({ visible: false });
  };

  handleClick = (e?: React.MouseEvent): void => {
    console.log('handleSubmit', e);
    this.setState({ visible: true });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(this)
    return (
      <div>
        <Modal
          visible={this.state.visible}
          centered={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          footer={
            <div style={{ textAlign: 'center' }}>
              <Button key="back" className="back" onClick={this.handleCancel} htmlType={'button'}>
                Cancel
              </Button>
              <Button
                key="submit"
                className="submit"
                onClick={this.handleSubmit}
                htmlType={'button'}
              >
                Login
              </Button>
            </div>
          }
        >
          <div>
            <Form className={styles.loginForm} layout="vertical">
              <Form.Item label="User Id">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'The field is required.' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Password">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'The field is required.' }],
                })(<Input type={'password'} />)}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Form.create<ILoginModalProps>()(LoginModal);
