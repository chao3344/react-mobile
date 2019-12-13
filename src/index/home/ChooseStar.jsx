import React, { Component } from 'react';
// import { get } from '../utils/http';
import { InputItem  } from 'antd-mobile'
import { IconLeft } from '../indexStyled'
import searchico from 'imgs/images/search-icon.png'

import StarItem from './StarItem'

class ChooseStar extends Component {
    state={
        show:false,
        list:[]
    }

    choosestar = ()=>{
        this.setState({
            show:!this.state.show
        })
    }
    makesure = (data)=> {
        this.setState({
            list:data
        })
        
    }   

    render() {
        return (
            <div>
                <InputItem
                    value={this.state.list.active?'￥'+this.state.list.activeprice+','+this.state.list.active:''}
                    placeholder="价格星级不限"
                    extra={[<IconLeft key="4"></IconLeft>]}
                    editable={false}
                    onClick={this.choosestar}
                >
                    <div style={{ backgroundImage: `url(${searchico})`,backgroundSize:'150px 140px', height: '16px', width: '16px',backgroundPosition:'-72px 0px', }} />
                </InputItem>
                {
                    // 运算符，当条件为真是才渲染组件
                    this.state.show &&
                    <StarItem choosestar={this.choosestar} Makesure={this.makesure}></StarItem>
                }
            </div>
        );
    }
}

export default ChooseStar;