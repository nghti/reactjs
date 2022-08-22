import styled from 'styled-components';
import styledSystem from '@/assets/styledSystem';
import { red } from '@ant-design/colors';

export const ModalStyle = styled.div`
  .no-active {
    display: none;
  }
  .active {
    display: block;
  }
  .close {
    cursor: pointer;
  }
`;

export const AntProSlider = styledSystem(styled.div`
  .ant-carousel {
    margin-bottom: 10px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: ${red[0]};
    overflow: hidden;
  }
`);

export const AntTitle = styledSystem(styled.div``);
