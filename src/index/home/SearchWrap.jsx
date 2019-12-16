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
    cityname:state.city.cityName,
    cityid:state.city.cityId,
    hotelid:state.hotel.hotelId,
    hotelname:state.hotel.hotelName,
    starttime:state.time.startTime,
    endtime:state.time.endTime,
    lowprice:state.star.lowPrice,
    hightprice:state.star.hightPrice,
    sofoval:state.star.sofoVal,
})


class SearchWrap extends Component {

    state = {
        cityList:[]
    }

    SearchResult = ()=>{
        if( this.props.cityname ){
            console.log(this.props)
            this.props.history.push({
                pathname:'/hotel',
            })
            store.set('search',{
                cityia:this.props.cityid,
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