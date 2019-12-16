import React, { Component } from 'react';
import { Margin10,UserNav } from '../indexStyled'
import img from 'imgs/images/search-icon.png'
import imgApp from 'imgs/images/search_app.jpg'

import { withRouter } from 'react-router-dom'


class UserList extends Component {

    OnLogin = ()=>()=>{
        this.props.history.push('/user')
    }

    render() {
        return (
            <Margin10>
                <UserNav width="1px">
                    <div className="nav">
                        <ul>
                            <li className="tjclick">
                                <div className="a">
                                    <i className="search-tool-i1" style={{background:`url(${img})`,backgroundPosition:'-24px -24px',backgroundSize:'150px 140px'}}
                                        onClick={this.OnLogin()}
                                    ></i>
                                    账户
                                </div>
                            </li>
                            <li className="tjclick">
                                <div className="a">
                                    <i className="search-tool-i1" style={{background:`url(${img})`,backgroundPosition:'-48px -24px',backgroundSize:'150px 140px'}}></i>
                                    订单
                                </div>
                            </li>
                            <li className="tjclick">
                                <div className="a">
                                    <i className="search-tool-i1" style={{background:`url(${img})`,backgroundPosition:'-68px -24px',backgroundSize:'150px 140px'}}></i>
                                    电话
                                </div>
                            </li>
                        </ul>         
                    </div>
                    <div className="search-app">
                        <img src={imgApp} alt=""/>
                    </div>
                </UserNav>
            </Margin10>
        );
    }
}

export default withRouter(UserList);