import React, { useState, useEffect } from 'react';

import * as Styled from '@/pages/Dashboard/styled';
import ContainerWrap from '@/assets/styledContainer';
import Slide from '@/pages/Dashboard/Slide';
// import Game from '@/pages/Dashboard/Game'
// import Todo from '@/pages/Dashboard/Todo'

export default function Dashboard() {
  const [toggleClass, setToggle] = useState(true);
  const [timeLine, setTimeLine] = useState(0);
  // const PRODUCTS = [
  //   {category: 'Sporting Goods', price: '$49.99', stocker: true, name: 'football'},
  //   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  //   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  //   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  //   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  //   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  // ]

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimeLine(timeLine + 1);
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
    // const clickWindow = () => console.log('1')
    // window.addEventListener('click', clickWindow)
    // return () => {
    //   window.removeEventListener('click', clickWindow)
    // }
  }, [timeLine]);

  function handlePick(e, num) {
    e.preventDefault();
    console.log('log', num);
  }

  return (
    <ContainerWrap>
      <Styled.AntProSlider color="blue">
        {/* <Todo products={PRODUCTS} /> */}
        {/* <Game /> */}
        <h4>{timeLine}</h4>
        <Styled.AntTitle width={{ sm: 1 / 4, md: 1 / 3, lg: 1 / 2, xl: 1 }}>styledSystem</Styled.AntTitle>
        <Slide color="red" link="http://placekitten.com/1280/160" handlePick={handlePick}>
          <h4>Kế thừa</h4>
        </Slide>
        <Slide color="blue" link="http://placekitten.com/1280/160" handlePick={handlePick}>
          <h4>props.children</h4>
        </Slide>
      </Styled.AntProSlider>
      <h2 onClick={() => setToggle(!toggleClass)} style={{ cursor: 'pointer' }}>
        Toggle Class
      </h2>
      <h5>{toggleClass ? 'On' : 'Off'}</h5>
      {toggleClass && (
        <div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
        </div>
      )}
    </ContainerWrap>
  );
}
