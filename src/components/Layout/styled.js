import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const ContentPage = styled(Content)`
  padding: 0;
  min-height: calc(100vh);
`;

export const AntDropdown = styled.div`
  float: right;
  margin-right: 16px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }

  .ant-dropdown-trigger {
    padding: 0 12px;
  }
`;
