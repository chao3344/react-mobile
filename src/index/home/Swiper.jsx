
import React, { Component } from 'react';
import { SwiperWrap } from '../indexStyled'

import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux'

import { GETLIST } from '../action-types'


const mapState = state => ({
    list:state.home.list
})

const mapDispatch = dispatch => ({
    loadData(){
        dispatch({
            type:GETLIST,
            url:'/api/home/api/gethotelsearchrecommendplace',
            params:{
                _rt:'1576043448794',
                city:'0201'
            }
        })
    }
})

class Swiper extends Component {

    componentDidMount(){
        // this.props.loadData()
    }
 
    render() {
        
        return (
            <SwiperWrap>
            <Carousel
              autoplay={true}
              infinite
              autoplayInterval={5000}
              beforeChange={(from, to) => {} }
              afterChange={index => {} }
            >
                {this.props.swiperVal.map((val) => (
                    
                    <img key={val.src} src={`${val.src}`} alt=""/>
                ))}
                
            </Carousel>
          </SwiperWrap>
          
        );
    }
}

export default connect(mapState,mapDispatch)(Swiper);