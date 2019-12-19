import React, { Component } from 'react';

import { InputItem  } from 'antd-mobile'
import { IconLeft,ChooseLocalWrap } from '../indexStyled'
import searchico from 'imgs/images/search-icon.png'

import { connect } from 'react-redux'
import {GEThotelName} from '../action-types'


const mapState = state => ({
    // cityid:state.city.cityId,
    // localdata:state.local.localList,
    cityid:state.getIn(['city','cityId']),
    localdata:state.getIn(['local','localList']),
})


const mapDispatch = dispatch => ({
    HotelData(sn,name){
        dispatch({
            type:GEThotelName,
            hotelid:sn,
            hotelname:name
        })
    }
})


class ChooseLocal extends Component {
    state = {
        show:false,
        cityList:[],
        hotelid:'',
        hotelname:''
    }

    chooselocal= ()=>{
        this.setState({
            show:true
        })
    }
    back = ()=>{
        this.setState({
            show:false
        })
    }

    // 函数柯里化，相当与bind，优雅的传值
    chooseLocal = (sn,name)=>()=>{
        this.setState({
            hotelid:sn,
            hotelname:name,
            show:false
        })

        this.props.HotelData(sn,name)
        
    }

    render() {
        
        return (
            <div>
                <InputItem
                    placeholder="酒店名称/位置不限"
                    extra={[<IconLeft key="3"></IconLeft>]}
                    editable={false}
                    onClick={this.chooselocal}
                    value={this.state.hotelname?this.state.hotelname:''}
                >
                    <div style={{ backgroundImage: `url(${searchico})`,backgroundSize:'150px 140px', height: '16px', width: '16px',backgroundPosition:'-48px 0px', }} />
                </InputItem>
                {
                    (this.props.localdata && this.state.show) &&
                    <ChooseLocalWrap>
                        <div className="header">
                            <span className="back" onClick={this.back}></span>
                            <div className="search-input">
                                <i className="icon-search"></i>
                                <input type="input"  placeholder="请输入城市名、行政区或景区" />
                            </div>
                        </div>

                        <div className="page-content">
                            <div className="get-city" data-events="click">
                                查看我附近的酒店
                            </div>
                        </div>

                        {
                            this.props.localdata.map((val,index)=>(

                                <div className="keyword-group" key={val.sn + val.typeId}>
                                    <div className="page-title" key="val.sn">{val.nameCn}</div>
                                    <div className="keyword-list" key="val.nameCn">
                                        <ul>
                                            {
                                                this.props.localdata[index].subFilterInfoEntities.map((value)=>(
                                                    <div className="keyword-div" key={value.sn + value.typeId} onClick={this.chooseLocal(value.sn,value.nameCn)}><span key="value.sn">{value.nameCn} </span></div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                
                            ))
                        }

                    </ChooseLocalWrap>
                }
            </div>
        );
    }
}

export default connect(mapState,mapDispatch)(ChooseLocal);