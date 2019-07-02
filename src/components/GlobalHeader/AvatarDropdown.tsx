import { Avatar, Icon, Menu, Spin } from 'antd';
import { ConnectProps, ConnectState } from '@/models/connect';
import { ClickParam } from 'antd/es/menu';
import { CurrentUser } from '@/models/user';
import { FormattedMessage } from 'umi-plugin-react/locale';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import LoginModal from '../LoginModal';
// import { LoginModal } from '@/components/LoginModal';

export interface GlobalHeaderRightProps extends ConnectProps {
  currentUser?: CurrentUser;
  menu?: boolean;
  isLogged?: boolean;
}

interface IAvatarDropdownState {
  loginModalVisible?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps, IAvatarDropdownState> {
  readonly state: IAvatarDropdownState = {
    loginModalVisible: false,
  };

  // Subcomponent's instance
  private loginModalRef: any | null;

  constructor(props: GlobalHeaderRightProps, state: IAvatarDropdownState) {
    super(props, state);
    this.loginModalRef = null;
  }

  onMenuClick = (event: ClickParam) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
      return;
    }
    router.push(`/account/${key}`);
  };

  onLoginClick = (event?: any): void => {
    if (this.loginModalRef instanceof Object) {
      this.loginModalRef.handleClick();
    }

    // you can use `instanceof` to judge whether this instance belongs to it's superclass
    // if (this.loginModalRef instanceof LoginModal) {
    //   console.log(this.loginModalRef);
    //   this.loginModalRef.handleClick();
    // }
  };

  render(): React.ReactNode {
    const { currentUser = {}, menu, isLogged } = this.props;

    if (!isLogged) {
      return (
        <span className={`${styles.action} ${styles.account}`}>
          <a onClick={this.onLoginClick}>Please log-in first</a>
          <LoginModal wrappedComponentRef={(form: any) => (this.loginModalRef = form)} />
        </span>
      );
    }

    if (!menu) {
      return (
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      );
    }
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="center">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );

    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
    );
  }
}
export default connect(({ user, global }: ConnectState) => ({
  currentUser: user.currentUser,
  isLogged: global.isLogged,
}))(AvatarDropdown);