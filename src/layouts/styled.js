import styled from 'styled-components';

export const ContainerDiv = styled.div`
  .layout-height {
    min-height: 100vh;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .side-wrap {
    padding-top: 64px;
  }

  .site-layout {
    min-height: 100vh;

    .site-layout-background {
      padding: 0;
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - 256px);
      z-index: 1;
      transition: all 0.2s;
      &.active-left {
        width: calc(100% - 80px);
      }
    }
  }
  .site-content {
    margin: 24px 16px;
    min-height: 280px;
  }
`;

export const AntProHeader = styled.div`
  background: #fff;
  margin-top: 2px;
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
