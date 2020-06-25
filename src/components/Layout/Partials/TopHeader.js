import React, { Component } from 'react';
import { Dropdown, Layout, Menu, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import * as Styled from '@/components/Layout/styled';

const { Header } = Layout;

export class TopHeader extends Component {
  render() {
    const { collapsed, activeLeft, logOut } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="form">Form</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="table">Table</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={logOut}>
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={`site-layout-background ${activeLeft}`}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.props.toggle,
        })}
        <Styled.AntDropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <span>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: '10px' }}>Admin</span>
            </span>
          </Dropdown>
        </Styled.AntDropdown>
      </Header>
    );
  }
}

export default TopHeader;
