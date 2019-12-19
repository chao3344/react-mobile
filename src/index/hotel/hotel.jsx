import React, { Component } from "react";
import store from "store";
import {withRouter} from 'react-router-dom'
import BScroll from 'better-scroll'

import {connect} from 'react-redux'

import { HotelWrap } from "./hotelStyled";
import HotelItem from './HotelItem'
import { get } from '../../utils/http'

import img from 'imgs/images/login.png'


const mapState = state => ({
  cityname:state.getIn(['city','cityName']),
  cityid:state.getIn(['city','cityId']),
  hotelid:state.getIn(['hotel','hotelId']),
  hotelname:state.getIn(['hotel','hotelName']),
  starttime:state.getIn(['time','startTime']),
  endtime:state.getIn(['time','endTime']),
  lowprice:state.getIn(['star','lowPrice']),
  hightprice:state.getIn(['star','hightPrice']),
  sofoval:state.getIn(['star','sofoVal']),

})


class hotel extends Component {
  state = {
    search: {},
    isbrand: false,
    isbed: false,
    ismask:false,
    ischeckbrand:"",
    ischeckbed:"",
    isrightsure:false,
    isfreeCan:false,
    ishigh45:false,
    ismiss:false,
    pagNum:0,
    ispull:true,
    List:[
      {name:'OYU酒店',dataSn:'n167033088745261_3833717731081439458_40204'},
      {name:'如家',dataSn:'n167033088745261_3833717731081439458_32'},
      {name:'7天',dataSn:'n167033088745261_3833717731081439458_53'},
      {name:'速8',dataSn:'n167033088745261_3833717731081439458_41'},
      {name:'汉庭',dataSn:'n167033088745261_3833717731081439458_56'},
      {name:'布丁',dataSn:'n167033088745261_3833717731081439458_111'},
      {name:'宜必思',dataSn:'n167033088745261_3833717731081439458_312'},
      {name:'锦江之星',dataSn:'n167033088745261_3833717731081439458_34'},
      {name:'智选假日',dataSn:'n167033088745261_3833717731081439458_330'},
      {name:'洲际',dataSn:'n167033088745261_3833717731081439458_15'},
    ],
    HotelList:[],
    hotelbrandids:'',
    bed:'',
    score:'',
    specall:''
  };
  async componentDidMount() {
    
    let result = await get({
      url:'/api/hotelapi/list',
      params:{
        indate:this.props.starttime,
        outdate:this.props.endtime,
        t:'1576544169344',
        city:this.props.cityid,
        pageindex:0,
        actionName:'h5=>brand=>getHotelList',
        searchEntranceId:'h5_home',
        areaid:this.props.hotelid,
        lowprice:this.props.lowprice,
        highprice:this.props.hightprice,
        starlevels:this.props.sofoval,
        // areatype:'6',
        esdnum:'8852792'
      }
    })

    this.setState({
      HotelList:result.data.hotelList
    })
    // console.log(this.state.HotelList)
    

    this.setState({
      search: store.get("search")
    });

    let bscroll = new BScroll('.content',{
      probeType:2,
      click:true,
      
    })
    bscroll.on('scroll',async(obj)=>{
      
      if( obj.y <= -120 && bscroll.movingDirectionY === 1){
        this.setState({
          ismiss:true
        })
      }else if(bscroll.movingDirectionY === -1){
        this.setState({
          ismiss:false
        })
      }
      
      if( obj.y <= bscroll.maxScrollY ){

        // ispull实现防抖
        if( this.state.ispull ){
          this.setState({
            ispull:!this.state.ispull
          })
          await this.setState({
            pagNum:this.state.pagNum+1
          })
          let NewResult = await get({
            url:'/api/hotelapi/list',
            params:{
              indate:this.props.starttime,
              outdate:this.props.endtime,
              t:'1576544169344',
              city:this.props.cityid,
              pageindex:this.state.pagNum,
              actionName:'h5=>brand=>getHotelList',
              searchEntranceId:'h5_home',
              areaid:this.props.hotelid,
              lowprice:this.props.lowprice,
              highprice:this.props.hightprice,
              starlevels:this.props.sofoval,
              // areatype:'6',
              esdnum:'8852792',
              hotelbrandids:this.state.hotelbrandids,
              bed:this.state.bed,
              score:this.state.score,
              specall:this.state.specall
            }
          })
          
          
          await this.setState({
            HotelList:[
              ...this.state.HotelList,
              ...NewResult.data.hotelList
            ]
          })
          bscroll.refresh()
          this.setState({
            ispull:!this.state.ispull
          })
           
        }
      }
      
    })
    
  }


  async GetList(){
    let result = await get({
      url:'/api/hotelapi/list',
      params:{
        indate:this.props.starttime,
        outdate:this.props.endtime,
        t:'1576544169344',
        city:this.props.cityid,
        pageindex:0,
        actionName:'h5=>brand=>getHotelList',
        searchEntranceId:'h5_home',
        areaid:this.props.hotelid,
        lowprice:this.props.lowprice,
        highprice:this.props.hightprice,
        starlevels:this.props.sofoval,
        // areatype:'6',
        esdnum:'8852792',
        hotelbrandids:this.state.hotelbrandids,
        bed:this.state.bed,
        score:this.state.score,
        specall:this.state.specall
      }
    })

    this.setState({
      HotelList:result.data.hotelList
    })
    console.log(this.state.HotelList)
    // await console.log(this.state.hotelbrandids)
    
  }

  brand = () => () => {
    if( !this.state.isbed ){
      this.setState({
        isbrand: !this.state.isbrand,
        ismask:!this.state.ismask
      });

    }
  };
  bed = () => () => {
   if( !this.state.isbrand ){
     this.setState({
       isbed: !this.state.isbed,
       ismask:!this.state.ismask
     });

   }
  };
  clickmask = () => () =>{
    console.log(1)
    this.setState({
        isbed: false,
        ismask:false,
        isbrand:false
    });
  }


  

  Login=()=>()=>{
    this.props.history.push('/user')
  }

  // 选择品牌
  chooseBrand=(id,name)=>()=>{
    console.log(id,name)
    this.setState({
      ischeckbrand:name,
      hotelbrandids:id
    })
  }

  // 确定品牌
  surebrand = ()=>()=>{
    this.setState({
      isbrand:false,
      ismask:false
    })
    this.GetList()
  }

  Reset = ()=>()=>{
    
    this.setState({
      ischeckbrand:''
    })
  }

  // 选择床型
  choosebed = (id,name)=>()=>{
    console.log(id,name)
    this.setState({
      ischeckbed:name,
      bed:id
    })
  }

  bedReset = ()=>()=>{
    this.setState({
      ischeckbed:''
    })
    
  }

  bedSure = ()=>()=>{
    this.setState({
      isbed:false,
      ismask:false
    })
    this.GetList()
  }


  // 是否免费取消
  freeCan=(id)=>()=>{
    this.setState({
      isfreeCan:!this.state.isfreeCan,
      specall:id
    })
    this.GetList()
  }

  // 是高于4.5
  high45=(id)=>()=>{
    this.setState({
      ishigh45:!this.state.ishigh45,
      score:id
    })
    this.GetList()
  }

  // 是否立即确认
  rightsure=(id)=>()=>{
    this.setState({
      isrightsure:!this.state.isrightsure,
      specall:id
    })
    this.GetList()
  }
  

  render() {
    return (
      <HotelWrap>
        <div className="head" style={{display:this.state.ismiss?"none":"flex"}}>
          <i onClick={()=>{ this.props.history.goBack() }}>《</i>
          <div className="head-title">{this.props.cityname}</div>
        </div>
        <div className="search-box" style={{display:this.state.ismiss?"none":"flex"}}>
          <div className="search-time">
            <div className="intime">入:{this.props.starttime}</div>
            <div className="outtime">离:{this.props.endtime}</div>
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
              <li className={this.state.ishigh45?"isclick":""}>
                <span 
                  sn="n7296976791201738_20993425432115050764"
                  onClick={this.high45('n7296976791201738_20993425432115050764')}
                  
                >4.5分以上</span>
              </li>
              <li className={this.state.isfreeCan?"isclick":""}>
                <span
                  sn="new_139_1100_0_101"
                  onClick={this.freeCan('new_139_1100_0_101')}
                  
                >免费取消</span>
              </li>
              <li className={this.state.isrightsure?"isclick":""}>
                <span 
                  sn="new_141_1100_0_102"
                  onClick={this.rightsure('new_141_1100_0_102')}
                  
                >立即确认</span>
              </li>
            </ul>
          </div>
          {this.state.isbrand && (
            <div className="brand-box">
              <div className="brand-top">
                <ul>
                  {
                    this.state.List.map((val)=>(
                      <li
                        
                        data-paneltype="brand"
                        className={this.state.ischeckbrand === val.name ? 'check':''}
                        onClick={this.chooseBrand(val.dataSn,val.name)}
                        key={val.dataSn}
                      >
                        <span>{val.name}</span>
                      </li>

                    ))
                  }
                  
                </ul>
              </div>
              <div className="brand-bot">
                <div className="btn-clear" onClick={this.Reset()}>
                  清空
                </div>
                <div className="btn-submit" onClick={this.surebrand()}>
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
                    onClick={this.choosebed('new_37_1011_0_34','双床')}
                    className={this.state.ischeckbed === "双床"?"active":""}
                  >
                    <span>双床</span>
                  </li>
                  <li
                    data-sn="new_36_1011_0_33"
                    onClick={this.choosebed('new_36_1011_0_33','大床')}
                    className={this.state.ischeckbed === "大床"?"active":""}
                  >
                    <span>大床</span>
                  </li>
                </ul>
              </div>
              <div className="brand-bot">
                <div className="btn-clear" onClick={this.bedReset()}>
                  清空
                </div>
                <div className="btn-submit" onClick={this.bedSure()}>
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
                    <span className="login" onClick={this.Login()}>登录</span>
                </div>
                <div className="hotel-list">
                  {
                    this.state.HotelList.map((val,index)=>(
                      <HotelItem
                        key={val.hotelId}
                        // id={val.hotelId}
                        list={val}
                        
                      ></HotelItem>
                      
                    ))
                  }
                    
                </div>
            </div>
        </div>
      </HotelWrap>
    );
  }
}

export default withRouter(connect(mapState)(hotel));
