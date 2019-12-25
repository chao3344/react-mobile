import React, { Component } from 'react';
import { DetailWrap } from './detailStyled'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
import  DetailItem  from  './detailItem'
import Bscroll from 'better-scroll'

import {get} from '../../utils/http'


const mapState = state => ({
    
    cityname:state.getIn(['city','cityName']),
    cityid:state.getIn(['city','cityId']),
    starttime:state.getIn(['time','startTime']),
    endtime:state.getIn(['time','endTime']),
    
})

const mapDispatch = dispatch => ({
    CityData(name,id){
        // 派发一个CHANGECITY使得全局中的saga里的takeEvery检测到
        /* dispatch({
            type:CHANGECITY,
            cityname:name,
            cityid:id
        }) */
    },
})

class detail extends Component {
    state = {
        PicList:[],
        InfoList:[],
        commentdata:{},
        commentList:[]
    }

    async componentDidMount(){
        let result = await get({
            url:'/api/hotelapi/otherDetail',
            params:{
                cityid:this.props.cityid,
                hotelid:this.props.location.state.dattaId,
                searchEntranceId:'h5_home',
                lat:'39.890267',
                lng:'116.345968',
                traceToken:this.props.location.state.traceToken
            }
        })
        
        this.setState({
            PicList:result.data.pics
        })


        let Newresult = await get({
            url:'/api/hotelapi/hoteldetailroomlist',
            params:{
                hotelid:this.props.location.state.dattaId,
                searchEntranceId:'h5_home',
                indate:this.props.starttime,
                outdate:this.props.endtime,
                esdnum:'8772359',
                traceToken:this.props.location.state.traceToken
            }
        })
        
        this.setState({
            InfoList:Newresult.data.roomInfoList
        })
        
        new Bscroll('.detail-content',{
            probeType:2,
            click:true
        })

        let commentresult = await get({
            url:'/api/hotelapi/otherDetail',
            params:{
                cityid:this.props.cityid,
                hotelid:this.props.location.state.dattaId,
                searchEntranceId:'h5order'
            }
        })

        await this.setState({
            commentdata:commentresult.data,
            commentList:commentresult.data.comments[0]
        })
        
    }

    render() {
        return (
          <DetailWrap>
            <div className="header">
              <div
                className="back"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                《
              </div>
              <div className="title">酒店详情</div>
            </div>

            <div className="detail-content" style={{ height: "100%" }}>
              <div className="warp">
                <div className="Swiper">
                  <Carousel autoplay={false} dots={false}>
                    {this.state.PicList.map((val, index) => (
                      <img key={val} src={val} alt="" />
                    ))}
                  </Carousel>
                </div>

                <div className="detail-content">
                  <div className="info">
                    <ul>
                      <li>
                        <div className="hotelDesc">
                          <p className="hotelName">
                            {this.props.location.state.hotelName}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="infobar_point">
                          <div className="praise_nbm">
                            <span className="u_nbm">
                              <b className="s_nbm">4.5</b>
                            </span>
                            <span className="u_btn">棒极啦</span>
                          </div>
                          <div className="commentCenter">
                            <div className="praise_filters">
                              <span>早餐好492</span>
                              <span>早餐好492</span>
                              <span>早餐好492</span>
                            </div>
                            <div className="commentAllDesc">
                              <span>95%好评</span>
                              <span>95%好评</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="map_li">
                        <div className="infobar_map">
                          <div className="map_location">广安门外大街3号</div>
                          <div className="map_detail">
                            距达官营地铁站直线0.9公里,步行约0.9公里,预计13分钟
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="infobar_facilities">
                          <div className="hotelzxDesc">2015年装修</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="home-list">
                    <div className="iconNew">赞！为您挑到了本店的热销房间</div>
                    <ul>
                      {this.state.InfoList.map((val, index) => (
                        <DetailItem list={val} key={index}></DetailItem>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="ruZhuZC" data-events="click">
                  <p className="ruZhuZCName">入住政策</p>
                  <ul>
                    <li className="ruZhuDesc">
                      <p>预订须知</p>
                      <p className="ruZhucontentD">
                        目前北京全城禁烟，酒店均为无烟房。
                      </p>
                    </li>
                    <li className="ruZhuDesc">
                      <p>入离通知</p>
                      <p className="ruZhucontentD">
                        入住时间:15:00点以后,离店时间:12:00点以前
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="ZCCmment">
                  <p className="ZCtitle">
                    <span>住客评论</span>
                      <span>{this.state.commentdata.totalCount}条点评</span>
                  </p>
                  <p className="ZCScore">
                    <span>4.4</span>
                    <span>挺好哒</span>
                  </p>
                  <div className="ZCDemo">
                    <p className="one">{this.state.commentList.userName}</p>
                    <p className="two">
                      <span>2019-12-12点评</span>
                      
                    </p>
                    <p className="three">
                    {this.state.commentList.content}
                    </p>
                  </div>
                </div>
                <div className="foot">
                    <div className="var">
                        <span>我感兴趣</span>
                        <span>联系电话</span>
                    </div>
                    <div className="copy">©2009-2019 艺龙无线1</div>
                </div>
              </div>
            </div>
          </DetailWrap>
        );
    }
}

export default withRouter(connect(mapState,mapDispatch)(detail));