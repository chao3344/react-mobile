import React, { Component } from 'react';
import {CityItemWrap} from '../indexStyled'
import bkimg from 'imgs/images/citys.jpg'

import {withRouter} from 'react-router-dom'

class CityItem extends Component {


    clickcity = (id,name)=>()=>{
        this.props.history.push('/hotel')
        console.log(id,name)
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

export default withRouter(CityItem);