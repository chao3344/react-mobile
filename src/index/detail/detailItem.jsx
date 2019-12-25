import React, { Component } from 'react';

import { HomeItemWrap } from './detailStyled'

class detailItem extends Component {
    render() {
        return (
          <HomeItemWrap>
            <div className="wrap">
              <div className="left-roomdetail">
                <div className="pic">
                  <img src={this.props.list.imageList[0]} alt="" />
                </div>
                <div className="picroom-info">
                  <div className="room">{this.props.list.roomInfoName}</div>
                  <div className="room-info">
                    
                    <span>{this.props.list.area}</span> <span>{this.props.list.bed}</span>
                    <span> 无窗 </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="price">
                    <span>¥</span> <span className="num">{Math.floor(this.props.list.minAveragePrice)}</span>
                    <p className="btn2_yf">在线付</p>
                </div>
              </div>
            </div>
          </HomeItemWrap>
        );
    }
}

export default detailItem;