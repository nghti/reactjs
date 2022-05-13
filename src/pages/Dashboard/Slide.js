import React from 'react';
import { Carousel } from 'antd';

export default function Slide(props) {
  const num = 4;
  return (
    <div>
      <span
        onClick={(e) => {
          props.handlePick(e, num);
        }}>
        Click to father
      </span>
      <Carousel autoplay className={props.color}>
        <div>
          <img alt="title" src={props.link} />
        </div>
        <div>
          <img alt="title" src={props.link} />
        </div>
        <div>
          <img alt="title" src={props.link} />
        </div>
        <div>
          <img alt="title" src={props.link} />
        </div>
      </Carousel>
      {props.children}
    </div>
  );
}
