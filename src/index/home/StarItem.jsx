import React, { Component } from 'react';

import {StarItemWrap} from '../indexStyled'


import { connect } from 'react-redux'
import {} from '../action-types'
import {GETStar} from '../action-types'

const mapState = state => ({
    
})


const mapDispatch = dispatch => ({
    StarData(lowpri,hightpri,sofo){
        dispatch({
            type:GETStar,
            lowprice:lowpri,
            hightprice:hightpri,
            sofoval:sofo
        })
    }
})

class StarItem extends Component {

    state={
        active:'不限',
        sofoval:'-1',
        activeprice:'无限制',
        data:[],
        highprice:'',
        lowprice:'',
        
    }
    
    maskonclick = ()=>{
        // 接受父组件传过来的方法
        this.props.choosestar()
    }
    liclick = (name,id) =>{
        this.setState({
            active:name,
            sofoval:id
        })
        
    }
     Changeprice = (price)=>{
        this.setState({
            activeprice:price
        })

        if( price === '无限制' ){
            
        }
        else if( price === '700以上' ){
            this.setState({
                lowprice:'700'
            })
        }else{
            
            this.setState({
                lowprice:price.split("-")[0],
                highprice:price.split("-")[1]
            })
        }
        

    }

    // 点击确定
    
    async Sure() {
        await this.setState({
            data:{
                active:this.state.active,
                sofoval:this.state.sofoval,
                activeprice:this.state.activeprice
            }
        })
    
        this.props.Makesure(this.state.data)
        this.props.choosestar()
        this.props.StarData(this.state.lowprice,this.state.highprice,this.state.sofoval)
    }

    reset = () => {
        this.setState({
            active:'无限制',
            activeprice:'不限',
            sofoval:'-1'
        })
    }
    render() {
        return (
            <StarItemWrap>
                
                <div className="mask" onClick={ this.maskonclick } ></div>
                <div className={["starbox",this.props.show?"show":""].join(' ')}>
                   <div className="content">
                        <div className="star">
                            <div className="sp-tit">星级（可多选）</div>
                            <ul className="star-list">
                                <li sn="-1" className={this.state.active === "不限"?'on':''} onClick={this.liclick.bind(this,"不限","-1")}>不限</li>
                                <li sn="12" className={this.state.active === "经济/客栈"?'on':''} onClick={this.liclick.bind(this,"经济/客栈","12")}>经济/客栈</li>
                                <li sn="3" className={this.state.active === "三星/舒适"?'on':''} onClick={this.liclick.bind(this,"三星/舒适","3")}>三星/舒适</li>
                                <li sn="4" className={this.state.active === "四星/高档"?'on':''} onClick={this.liclick.bind(this,"四星/高档","4")}>四星/高档</li>
                                <li sn="5" className={this.state.active === "五星/豪华"?'on':''} onClick={this.liclick.bind(this,"五星/豪华","5")}>五星/豪华</li>
                            </ul>
                        </div>
                        <div className="price">
                            <div className="sp-tit">价格</div>
                            <ul className="price-list">
                                <li className={this.state.activeprice === '无限制'?'on':''} price-value="0" onClick={this.Changeprice.bind(this,"无限制")}>无限制</li>
                                <li price-value="0-150" className={this.state.activeprice === '0-150'?'on':''} onClick={this.Changeprice.bind(this,"0-150")}>0-150</li>
                                <li price-value="150-300" className={this.state.activeprice === '150-300'?'on':''} onClick={this.Changeprice.bind(this,"150-300")}>150-300</li>
                                <li price-value="300-450" className={this.state.activeprice === '300-450'?'on':''} onClick={this.Changeprice.bind(this,"300-450")}>300-450</li>
                                <li price-value="450-700" className={this.state.activeprice === '450-700'?'on':''} onClick={this.Changeprice.bind(this,"450-700")}>450-700</li>
                                <li price-value="700" className={this.state.activeprice === '700以上'?'on':''} onClick={this.Changeprice.bind(this,"700以上")}>700以上</li>
                            </ul>
                        </div>
                   </div>
                    <div className="bot-btn">
                        <ul>
                            <li id="filter-reset" onClick={this.reset}>重置</li>
                            <li className="on" id="starprice-submit" onClick={this.Sure.bind(this)}>确定</li>
                        </ul>
                    </div>
                </div>
            </StarItemWrap>
        );
    }
}

export default connect(mapState,mapDispatch)(StarItem);