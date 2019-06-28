import React, { Component } from 'react';
import { Modal, Form, Button, Input } from 'antd';
// import { FormComponentProps } from "antd/lib/form/Form";
import styles from './index.less';

interface ILoginModalProps {
  [propName: string]: any;
}

interface ILoginModalState {
  visible: boolean;
  [propName: string]: any;
}

class LoginModal extends Component<ILoginModalProps, ILoginModalState> {
  readonly state: ILoginModalState = {
    visible: true,
  };
  props: ILoginModalProps = {};

  constructor(props: ILoginModalProps, state: ILoginModalState) {
    super(props, state);
  }

  handleOk = (e: React.MouseEvent): void => {
    console.log('handleOk', e);
    this.setState({ visible: false });
  };

  handleCancel = (e: React.MouseEvent): void => {
    console.log('handleCancel', e);
    this.setState({ visible: false });
  };

  handleSubmit = (e: React.MouseEvent): void => {
    console.log('handleSubmit', e);
    this.setState({ visible: false });
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
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
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default LoginModal;
