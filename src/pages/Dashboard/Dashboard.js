import React, { Component } from 'react';
import { Carousel } from 'antd';
import { connect } from 'react-redux';

import * as Styled from '@/pages/Dashboard/styled';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState(() => {
      return (this.state.toggle = !this.state.toggle);
    });
  }

  render() {
    return (
      <Styled.AntProContent p={4}>
        <Styled.AntProSlider>
          <Carousel autoplay>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
          </Carousel>
          <Carousel autoplay>
            <div>
              <img alt="title" src="http://placekitten.com/1280/160" />
            </div>
            <div>
              <img alt="title" src="http://placekitten.com/1280/160" />
            </div>
            <div>
              <img alt="title" src="http://placekitten.com/1280/160" />
            </div>
            <div>
              <img alt="title" src="http://placekitten.com/1280/160" />
            </div>
          </Carousel>
          <Carousel autoplay>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
            <div>
              <img alt="title" src="https://picsum.photos/1280/160" />
            </div>
          </Carousel>
        </Styled.AntProSlider>
        <h2 onClick={this.onToggle} style={{ cursor: 'pointer' }}>
          Workplace
        </h2>
        {this.state.toggle && (
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
      </Styled.AntProContent>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
