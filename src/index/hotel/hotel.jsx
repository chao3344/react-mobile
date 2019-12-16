import React, { Component } from "react";
import store from "store";
import {withRouter} from 'react-router-dom'
import BScroll from 'better-scroll'

import { HotelWrap } from "./hotelStyled";
import HotelItem from './HotelItem'

import img from 'imgs/images/login.png'


class hotel extends Component {
  state = {
    search: {},
    isbrand: false,
    isbed: false,
    ismask:false
  };
  componentDidMount() {
    this.setState({
      search: store.get("search")
    });

    let bscroll = new BScroll('.content',{
      probeType:2,
      click:true
    })
    bscroll.on('scroll',(obj)=>{
      if( obj.y <= -85 ){
        console.log(1)
      }
      // console.log(obj.y)
    }) 
      
    
      
    
  }
  brand = () => () => {
    this.setState({
      isbrand: !this.state.isbrand,
      ismask:!this.state.ismask
    });
  };
  bed = () => () => {
   
    this.setState({
      isbed: !this.state.isbed,
      ismask:!this.state.ismask
    });
  };
  clickmask = () => () =>{
    console.log(1)
    this.setState({
        isbed: false,
        ismask:false,
        isbrand:false
    });
  }


  Goback =()=>()=>{
    this.props.history.goBack()
    console.log(this.props)
  }

  render() {
    return (
      <HotelWrap>
        <div className="head">
          <i onClick={this.Goback()}>《</i>
          <div className="head-title">北京北京北京北京</div>
        </div>
        <div className="search-box">
          <div className="search-time">
            <div className="intime">入:12-13</div>
            <div className="outtime">离:12-14</div>
          </div>
          <div className="search-search">
            <input type="text" placeholder="酒店位置名称不限" />
          </div>
        </div>
        <div className="fast-filter">
          <div className="box">
            <ul>
              <li onClick={this.brand()}>
                <span>品牌</span>
                <i></i>
              </li>
              <li onClick={this.bed()}>
                <span>床型</span>
                <i></i>
              </li>
              <li>
                <span>4.5分以上</span>
              </li>
              <li>
                <span>免费取消</span>
              </li>
              <li>
                <span>立即确认</span>
              </li>
            </ul>
          </div>
          {this.state.isbrand && (
            <div className="brand-box">
              <div className="brand-top">
                <ul>
                  <li
                    data-sn="n167033088745261_3833717731081439458_40204"
                    data-paneltype="brand"
                  >
                    <span>OYU酒店</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_32"
                    data-paneltype="brand"
                  >
                    <span>如家</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_53"
                    data-paneltype="brand"
                  >
                    <span>7天</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_41"
                    data-paneltype="brand"
                  >
                    <span>速8</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_56"
                    data-paneltype="brand"
                  >
                    <span>汉庭</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_111"
                    data-paneltype="brand"
                  >
                    <span>布丁</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_312"
                    data-paneltype="brand"
                  >
                    <span>宜必思</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_34"
                    data-paneltype="brand"
                  >
                    <span>锦江之星</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_330"
                    data-paneltype="brand"
                  >
                    <span>智选假日</span>
                  </li>
                  <li
                    data-sn="n167033088745261_3833717731081439458_15"
                    data-paneltype="brand"
                  >
                    <span>洲际</span>
                  </li>
                </ul>
              </div>
              <div className="brand-bot">
                <div className="btn-clear" data-events="click">
                  清空
                </div>
                <div className="btn-submit" data-events="click">
                  确定
                </div>
              </div>
            </div>
          )}
          {this.state.isbed && (
            <div className="bed-box">
              <div className="bed-top">
                <ul>
                  <li
                    data-sn="new_37_1011_0_34"
                    data-paneltype="bed"
                  >
                    <span>双床</span>
                  </li>
                  <li
                    data-sn="new_36_1011_0_33"
                    data-paneltype="bed"
                  >
                    <span>大床</span>
                  </li>
                </ul>
              </div>
              <div className="brand-bot">
                <div className="btn-clear" data-events="click">
                  清空
                </div>
                <div className="btn-submit" data-events="click">
                  确定
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="content">
            {
              this.state.ismask &&(
                  <div className="mask" onClick={this.clickmask()}></div>
              )
            }
            <div>
                <div className="login-wrap">
                    <i className="login-img" style={{width:"38px",height:"38px"}}>
                        <img src={img} alt="" style={{width:"38px",height:"38px",position:"absolute",left:"12px",top:"17px"}}/>
                    </i>
                    <p>
                    登录享会员低价,<span>最高8折优惠</span>
                    </p>
                    <span className="login">登录</span>
                </div>
                <div className="hotel-list">
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    <HotelItem></HotelItem>
                    
                    
                </div>
            </div>
        </div>
      </HotelWrap>
    );
  }
}

export default withRouter(hotel);
