import React, { Component } from 'react';
import { get } from '../../utils/http';
import { InputItem  } from 'antd-mobile'
import { IconLeft,CityListWrap } from '../indexStyled'
import searchico from 'imgs/images/search-icon.png'

import { connect } from 'react-redux'
import {CHANGECITY,GETLOCALLIST} from '../action-types'


const mapState = state => ({
    
    cityname:state.getIn(['city','cityName']),
    cityid:state.getIn(['city','cityId']),
    
})

const mapDispatch = dispatch => ({
    CityData(name,id){
        // 派发一个CHANGECITY使得全局中的saga里的takeEvery检测到
        dispatch({
            type:CHANGECITY,
            cityname:name,
            cityid:id
        })
    },
    LocalData(id){
        dispatch({
            type:GETLOCALLIST,
            url:'/api/home/api/gethotelsearchrecommendplace',
            params:{
                _rt:'1576043448794',
                city:id
            },
        })
    }
})


class Choosecity extends Component {
   
    
    state = {
        hotcity:[],
        searchCity:[],
        EngList:[{nm:'A'},{nm:'B'},{nm:'C'},{nm:'D'},{nm:'E'},{nm:'F'},{nm:'G'},{nm:'H'},{nm:'I'},{nm:'J'},{nm:'K'},
        {nm:'L'},{nm:'M'},{nm:'N'},{nm:'O'},{nm:'P'},{nm:'Q'},{nm:'R'},{nm:'S'},{nm:'T'},{nm:'U'},{nm:'V'},{nm:'W'},
        {nm:'X'},{nm:'Y'},{nm:'Z'}],
        show:false,
        active:false,
        CityID:'',
        CityName:'',
        cityshow:''
    }

    choosecity = ()=>{
        this.setState({
            show:!this.state.show
        })
    }
   async ChangeCity (Id,Name) {
      
        
        await this.setState({
            CityID:Id,
            CityName:Name
        })
        this.setState({
            show:!this.state.show
        })

        this.props.CityData(this.state.CityName,this.state.CityID)
        this.props.LocalData(this.state.CityID)

    }
    async showcity(nm){
        this.setState({
            active:true
        })
        await this.setState({
            cityshow:nm
        })

        let result2 = await get({
            url:'/api/hotel/api/gethotelcitysbyletter',
            params:{
                _rt:'1576031656638',
                letter:this.state.cityshow
            }
        })

        this.setState({
            searchCity:result2
        })
        // console.log(this.state.searchCity)
    }

    async componentDidMount(){

       
        let result = await get({
            url:'/api/home/api/gethomehotcitys',
            params:{
                _rt:'1575944204126'
            }
        })
        // 设置城市选择中的热门城市,
        // 用JSON.parse转换为对象
        this.setState({
            hotcity:JSON.parse(result.hotCitys)
        })
        // console.log(this.state.hotcity)

        
    }

    
    render() {
        return (
            <div>
                
                <InputItem
                        value={this.state.CityName?this.state.CityName:''}
                        extra={[<IconLeft key="1"></IconLeft>]}
                        editable={false}
                        onClick={this.choosecity}
                        placeholder={this.state.CityName?'' :'选择入住城市'}
                    >
                    <div style={{ backgroundImage: `url(${searchico})`,backgroundSize:'150px 140px', height: '16px', width: '16px',backgroundPosition:'0px 0px', }} />
                </InputItem>

                {
                    this.state.show &&
                    <CityListWrap>

                        <div>
                            <div className="header">
                                <span className="back" onClick={this.choosecity}></span>
                                <div className="search-input">
                                    <i className="icon-search"></i>
                                    <input type="input"  placeholder="请输入城市名、行政区或景区" />
                                </div>
                            </div>
                            <div className="city-content">
                                <div className="search-hostory">
                                    <div className="hostory-title">搜索历史</div>
                                    <div className="hostory-list"></div>
                                </div>
                                <div className="search-hot">
                                    <div className="hot-title">热门城市</div>
                                    <div className="hot-list">
                                        {
                                        
                                            this.state.hotcity.map((val,index)=>(

                                                <div 
                                                    className="hot-li"
                                                    key={val.cityId}
                                                    onClick={this.ChangeCity.bind(this,val.cityId,val.cityName)}
                                                >{val.cityName}</div>

                                        ))}
                                    </div>
                                </div>
                                <div className="city-letter">
                                    <ul>
                                        {
                                            this.state.EngList.map((val,index)=>(
                                                <div className="city-head" key={index+val.nm} onClick={this.showcity.bind(this,val.nm)}>{val.nm}</div>
                                            ))
                                        }
                                        
                                    </ul>
                                </div>
                                {
                                    this.state.active &&
                                    <div className="city-search">
                                        <ul>
                                        {
                                            this.state.searchCity.map((val,index)=>(
                                                <div className="search-div" key={val.cityId} onClick={this.ChangeCity.bind(this,val.cityId,val.cityName)}>{val.cityName}</div>
                                            ))
                                        }
                                            
                                            
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>

                    </CityListWrap>
                }
                
            </div>
        );
    }
}

export default connect(mapState,mapDispatch)(Choosecity);