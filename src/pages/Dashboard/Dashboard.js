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
      return (this.toggle = !this.toggle);
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
        <h2 onClick={this.onToggle}>Workplace</h2>
        {this.toggle && <p>那是一种内在的东西，他们到达不了，也无法触及的</p>}
      </Styled.AntProContent>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
