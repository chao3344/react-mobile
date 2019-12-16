import React, { Component } from 'react';
import Swiper from './home/Swiper'
import  SearchWrap  from './home/SearchWrap'
import SearchList from './home/SearchList'
import UserList from './home/UserList'
import CityList from './home/CityList'
import Footer from './home/Footer'


import swiper1 from 'imgs/images/swiper1.jpg'
import swiper2 from 'imgs/images/swiper2.jpg'
import swiper3 from 'imgs/images/swiper3.jpg'
import swiper4 from 'imgs/images/swiper4.jpg'
import swiper5 from 'imgs/images/swiper5.jpg'

import { connect } from 'react-redux'

const mapState = state =>({
    
    cityname:state.city.cityName,
    cityid:state.city.cityId
})

class Index extends Component {
    
    state = {
        swiperList : [
            {
                src:swiper1
            },
            {
                src:swiper2
            },
            {
                src:swiper3
            },
            {
                src:swiper4
            },
            {
                src:swiper5
            }
        ]
    }
    render() {
        return (
            <div>
                <Swiper swiperVal={this.state.swiperList}></Swiper>
                <SearchWrap></SearchWrap>
                <SearchList></SearchList>
                <UserList></UserList>
                <CityList></CityList>
                <Footer></Footer>
                
                
            </div>
        );
    }
}

export default connect(mapState)(Index);