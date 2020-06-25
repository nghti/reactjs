import React, { Component } from 'react';
import { PageHeader } from 'antd';
import _ from 'lodash';

import * as Styled from '@/layouts/styled';

export class BreadCrumb extends Component {
  render() {
    const { location } = this.props;
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
      <div>
        {location.pathname !== '/' && (
          <Styled.AntProHeader>
            <PageHeader className="site-page-header" title="Form" breadcrumb={{ routes }}>
              <p>
                Form pages are used to collect or verify information to users, and basic forms are common in scenarios
                where there are fewer data items.
              </p>
            </PageHeader>
          </Styled.AntProHeader>
        )}
      </div>
    );
  }
}

export default BreadCrumb;
