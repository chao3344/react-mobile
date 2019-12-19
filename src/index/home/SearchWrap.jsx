import React, { Component } from 'react';
import { Button  } from 'antd-mobile'
import { SearchItemWrap,SearchBtnWrap } from '../indexStyled'
import  ChooseDate  from './ChooseDate'
import { withRouter } from 'react-router-dom'

import store from 'store'

// import { get } from '../../utils/http';

import Choosecity from './Choosecity'
import ChooseStar from './ChooseStar'
import ChooseLocal from './ChooseLocal'

import { connect } from 'react-redux'


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

    // cityid:state.city.cityId,
    // hotelid:state.hotel.hotelId,
    // hotelname:state.hotel.hotelName,

    // starttime:state.time.startTime,
    // endtime:state.time.endTime,

    // lowprice:state.star.lowPrice,
    // hightprice:state.star.hightPrice,
    // sofoval:state.star.sofoVal,
})


class SearchWrap extends Component {

    state = {
        cityList:[]
    }

    SearchResult = ()=>{
        if( this.props.cityname ){
           
            this.props.history.push({
                pathname:'/hotel',
            })
            store.set('search',{
                cityid:this.props.cityid,
                cityname:this.props.cityname,
                hotelid:this.props.hotelid,
                hotelname:this.props.hotelname,
                starttime:this.props.starttime,
                endtime:this.props.endtime,
                lowprice:this.props.lowprice,
                hightprice:this.props.hightprice,
                sofoval:this.props.sofoval,
            })
        }
        
    }


    render() {
        
        return (
            
            <div style={{borderBottom:'1px solid #bbb'}}>
                <SearchItemWrap>
                   
                    
                    <Choosecity></Choosecity>
                
                    <ChooseDate></ChooseDate>
                
                    <ChooseLocal></ChooseLocal>
                
                    <ChooseStar></ChooseStar>

                    <SearchBtnWrap>
                        <Button type="primary" onClick={this.SearchResult}>搜索</Button>
                    </SearchBtnWrap>
                    
                </SearchItemWrap>
            </div>
        );
    }
}

export default withRouter(connect(mapState)(SearchWrap));