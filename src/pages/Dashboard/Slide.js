import React from 'react';
import { Carousel } from 'antd';

const data = [
  {
    id: 1,
    link: 'http://placekitten.com/1280/160',
  },
  {
    id: 2,
    link: 'http://placekitten.com/1280/160',
  },
  {
    id: 3,
    link: 'http://placekitten.com/1280/160',
  },
  {
    id: 4,
    link: 'http://placekitten.com/1280/160',
  },
];

export default function Slide() {
  return (
    <div>
      <Carousel autoplay>
        {data.map((item, i) => (
          <div key={i}>
            <img alt="title" src={item.link} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
