import React from 'react';
import { Layout } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logoutRequest } from '@/store/modules/auth/actions';
import * as Styled from '@/components/Layout/styled';
import { TopHeader, LeftSider, BreadCrumb } from '@/components/Layout/Partials';

const { Content } = Layout;

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      activeLeft: '',
    };
    this.logOut = this.logOut.bind(this);
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

  logOut() {
    const { logoutRequest } = this.props;
    logoutRequest();
  }

  render() {
    return (
      <Styled.ContainerDiv>
        <Layout>
          <LeftSider collapsed={this.state.collapsed} location={this.props.location} />
          <Layout className="site-layout">
            <TopHeader
              collapsed={this.state.collapsed}
              activeLeft={this.state.activeLeft}
              toggle={this.toggle}
              logOut={this.logOut}
            />
            <div className="side-wrap">
              <BreadCrumb location={this.props.location} />
              <Content className="site-content">{this.props.children}</Content>
            </div>
          </Layout>
        </Layout>
      </Styled.ContainerDiv>
    );
  }
}

export default compose(withRouter, connect(null, { logoutRequest }))(DashboardLayout);
