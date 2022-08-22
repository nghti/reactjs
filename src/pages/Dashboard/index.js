import React, { useState, useEffect } from 'react';

import * as Styled from '@/pages/Dashboard/styled';
import ContainerWrap from '@/assets/styledContainer';
import Modal from '@/pages/Dashboard/Modal';
import Slide from '@/pages/Dashboard/Slide';

export default function Dashboard() {
  const [toggleModel, settoggleModel] = useState(false);
  const [count, setCount] = useState(0);
  // const [timeLine, setTimeLine] = useState(0);

  useEffect(() => {
    document.title = `You click ${count} Times`;
  });
  // useEffect(() => {
  //   const timerID = setInterval(() => {
  //     setTimeLine(timeLine + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerID);
  //   };
  //   const clickWindow = () => console.log('1')
  //   window.addEventListener('click', clickWindow)
  //   return () => {
  //     window.removeEventListener('click', clickWindow)
  //   }
  // }, []);

  function handlePick(e, num) {
    e.preventDefault();
    console.log('log', e, num);
    settoggleModel(false);
  }
  console.log('Render', count);
  return (
    <ContainerWrap>
      <h3>You click ${count} Times</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Styled.AntProSlider color="blue">
        {/* <h4>{timeLine}</h4> */}
        <h3>Slider map data</h3>
        <Slide />
      </Styled.AntProSlider>
      <h3 onClick={() => settoggleModel(!toggleModel)} style={{ cursor: 'pointer' }}>
        Modal pass props children & get event from children
      </h3>
      <Styled.ModalStyle>
        <Modal toggleModel={toggleModel} handlePick={handlePick}>
          <h4>Content Kế thừa</h4>
          <h4>Footer Kế thừa</h4>
        </Modal>
      </Styled.ModalStyle>
    </ContainerWrap>
  );
}
