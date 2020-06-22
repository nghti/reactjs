import React from 'react';
import { Layout, Menu, Dropdown, Avatar, PageHeader } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';

import { logoutRequest } from '@/store/auth/actions';
import * as Styled from '@/pages/Dashboard/styled';
import * as Styled2 from '@/components/Layout/styled';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      // activeTop: '',
      activeLeft: '',
    };
    this.handleClick = this.handleClick.bind(this);
    // this.scroll = this.scroll.bind(this);
  }

  toggle = () => {
    let showWidth = '';
    showWidth = document.getElementsByClassName('ant-sider')[0].clientWidth;

    if (showWidth === 256) {
      this.setState({
        activeLeft: 'active-left',
      });
    } else {
      this.setState({
        activeLeft: '',
      });
    }

    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick() {
    const { logoutRequest } = this.props;
    logoutRequest();
  }

  // scroll() {
  //   if (window.scrollY > 64) {
  //     this.setState({
  //       activeTop: 'active-top'
  //     })
  //   } else {
  //     this.setState({
  //       activeTop: '',
  //     })
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scroll)
  // }

  render() {
    const { location } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="form">Form</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="table">Table</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={this.handleClick}>
          Logout
        </Menu.Item>
      </Menu>
    );
    const routes = [
      {
        path: 'index',
        breadcrumbName: 'Home',
      },
      {
        path: 'first',
        breadcrumbName: `${_.trim(location.pathname, '/')}`,
      },
    ];

    return (
      <Styled.ContainerDiv>
        <Layout>
          <Sider className="ant-sider" width="256" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu defaultSelectedKeys={[location.pathname]} mode="inline" theme="dark">
              <Menu.Item key="/" icon={<PieChartOutlined />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="/form" icon={<DesktopOutlined />}>
                <Link to="form">Form</Link>
              </Menu.Item>
              <Menu.Item key="/table" icon={<ContainerOutlined />}>
                <Link to="table">Table</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className={`site-layout-background ${this.state.activeLeft}`}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <Styled2.AntDropdown>
                <Dropdown overlay={menu} placement="bottomRight">
                  <span>
                    <Avatar icon={<UserOutlined />} />
                    <span style={{ marginLeft: '10px' }}>Admin</span>
                  </span>
                </Dropdown>
              </Styled2.AntDropdown>
            </Header>
            <div className="side-wrap">
              {location.pathname !== '/' && (
                <Styled.AntProHeader>
                  <PageHeader className="site-page-header" title="Form" breadcrumb={{ routes }}>
                    <p>
                      Form pages are used to collect or verify information to users, and basic forms are common in
                      scenarios where there are fewer data items.
                    </p>
                  </PageHeader>
                </Styled.AntProHeader>
              )}
              <Content className="site-content">{this.props.children}</Content>
            </div>
          </Layout>
        </Layout>
      </Styled.ContainerDiv>
    );
  }
}

export default compose(withRouter, connect(null, { logoutRequest }))(DashboardLayout);
