import styled from 'styled-components';
import styledSystem from '@/styles/styledSystem';

export const AntProContent = styledSystem(styled.div`
  background: #fff;
`);

export const AntProHeader = styled.div`
  background: #fff;
  margin-top: 2px;
`;

export const AntProSlider = styled.div`
  .ant-carousel {
    margin-bottom: 10px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

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
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;
