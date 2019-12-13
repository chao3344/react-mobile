import React, { Component } from 'react';
import {CityItemWrap} from '../indexStyled'
import bkimg from 'imgs/images/citys.jpg'

class CityItem extends Component {
    render() {
        return (
            <>
            {this.props.cityList.map((val,index)=>(
                <CityItemWrap
                    style={{background:`url(${bkimg}) 0 ${val.PosY}`,backgroundSize: '100% 750px'}}
                    key={val.cityId}
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

export default CityItem;