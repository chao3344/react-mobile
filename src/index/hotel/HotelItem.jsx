import React, { Component } from "react";

import { HotelItemWrap } from "./hotelStyled";

import img from 'imgs/images/icon-list.png'

// import img1 from 'imgs/images/1.jpg'

class HotelItem extends Component {
  render() {
    return (
      <HotelItemWrap>
        <li>
          <div className="pic">
            <img src={this.props.list.picUrl} alt="" style={{width:"1rem",height:"1.5rem",display:"inline-block"}} />
          </div>
          <div className="info">
            <p className="name">
              <em>{this.props.list.hotelName}</em> <i className="grade grade1" style={{background:`url(${img}) -17px -18px`,backgroundSize:"96px 32px"}}></i>
            </p>
            <p className="comt">
              <span className="comt_no">
                <b>{this.props.list.commemtPoint}</b>分
              </span>
              <span className="comt_str com_str_desc">棒极了</span>
              <span className="comt_str com_str_bridge">-</span>
              <span className="comt_str comt_str_distrct">{this.props.list.commentMainTag}</span>
              <span className="comt_nmb">{this.props.list.totalCommentCount}条点评</span>
            </p>
            <p className="district districtNew">
              <span className="d4">{this.props.list.newRecallReason.content}</span>
            </p>
            <p className="fac">
              <span>高档型</span>
            </p>
            <p className="tags tagsNew"> </p>
          </div>
          <div className="right-wrap">
            <div className="r-tab">
              <p className="pri priNew">
                <span>
                  <i>¥</i>{this.props.list.lowestPrice}<i className="pri-end">起</i>
                </span>
              </p>
              <span className="UnLogin">登录价更低</span>
            </div>
          </div>
        </li>
      </HotelItemWrap>
    );
  }
}

export default HotelItem;
