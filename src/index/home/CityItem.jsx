import React, { Component } from 'react';
import {CityItemWrap} from '../indexStyled'
import bkimg from 'imgs/images/citys.jpg'

import { CHANGECITY,GETTIME } from '../action-types'

import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import store from 'store'


const mapState = state =>({})

const mapDispatch = dispatch => ({
    CityData(name,id){
        // 派发一个CHANGECITY使得全局中的saga里的takeEvery检测到
        dispatch({
            type:CHANGECITY,
            cityname:name,
            cityid:id
        })
    },
    TimeData(){
        dispatch({
          type:GETTIME,
          starttime:new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ new Date().getDate(),
          endtime:new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ (new Date().getDate()+1)
        })
    }
})



class CityItem extends Component {


    clickcity = (id,name)=>()=>{
        this.props.history.push('/hotel')
        
        this.props.CityData(name,id)
        this.props.TimeData()
        store.set('search',{
            cityid:id,
            cityname:name,
            starttime:new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ new Date().getDate(),
            endtime:new Date().getFullYear()+'-'+ (new Date().getMonth()+1) +'-'+ (new Date().getDate()+1)
        })
    }

    render() {
        return (
            <>
            
            {this.props.cityList.map((val,index)=>(
                <CityItemWrap
                    style={{background:`url(${bkimg}) 0 ${val.PosY}`,backgroundSize: '100% 750px'}}
                    key={val.cityId}
                    onClick={this.clickcity(val.cityId,val.cityName)}
                >
                    
                        <div data-href="http://m.elong.com/hotel/beijing"  city-id="0101" city-name="北京">
                            <h2>{val.cityName}</h2>
                            <p>共有<span>6410</span>家酒店</p>
                            <i className="icon-left"></i>
                        </div>

                </CityItemWrap>

            ))}
            </>
        );
    }
}

export default withRouter(connect(mapState,mapDispatch)(CityItem));