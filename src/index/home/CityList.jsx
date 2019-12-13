import React, { Component } from 'react';
import {CityWrap} from '../indexStyled'
import CityItem from './CityItem'



class CityList extends Component {
    // 状态提升，把数据传给自组件
    state={
        cityList:[
            { cityId:'0101',cityName:'北京' ,PosY:0+'px' },
            { cityId:'0201',cityName:'上海' ,PosY:-75+'px' },
            { cityId:'2001',cityName:'广州' ,PosY:-150+'px' },
            { cityId:'2003',cityName:'深圳' ,PosY:-225+'px' },
            { cityId:'3201',cityName:'香港' ,PosY:-300+'px' },
            { cityId:'0102',cityName:'北京' ,PosY:-375+'px' },
            { cityId:'0103',cityName:'北京' ,PosY:-450+'px' },
            { cityId:'0104',cityName:'北京' ,PosY:-525+'px' },
            { cityId:'0105',cityName:'北京' ,PosY:-600+'px' },
            { cityId:'0106',cityName:'北京' ,PosY:-675+'px' },
        ]
    }
    render() {
        return (
            <CityWrap>
                <p className="city-title">热门城市</p>
                <CityItem cityList={this.state.cityList}></CityItem>
                
            </CityWrap>
        );
    }
}

export default CityList;