import React, { Component } from 'react';
import { Button  } from 'antd-mobile'
import { SearchItemWrap,SearchBtnWrap } from '../indexStyled'
import  ChooseDate  from './ChooseDate'

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
})


class SearchWrap extends Component {

    state = {
        cityList:[]
    }

    SearchResult = ()=>{
        if( this.props.cityname ){
            console.log(this.props)
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

export default connect(mapState)(SearchWrap);