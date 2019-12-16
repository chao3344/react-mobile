import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { UserWrap } from './userStyled'


class login extends Component {

    back = ()=>()=>{
        this.props.history.goBack()
        console.log(this.props)
    }
    changetest= ()=>()=>{
        console.log(1)
    }
    changephone= ()=>()=>{
        console.log(2)
    }

    render() {
        return (
          <UserWrap>
            <div className="navbar">
              <div className="navbar-left">
                <div
                  className="navbar-left-icon back"
                  data-events="click"
                  onClick={this.back()}
                >《</div>
              </div>
              <div className="navbar-right" data-events="click">
                <div className="navbar-right-content">注册</div>
              </div>
            </div>
            <div className="page-content">
              <div className="page-title">欢迎来到CC旅行</div>
              <div className="page-from">
                <div className="from-item">
                  <div className="input-label" data-events="click">
                    <div>
                      <span className="text">+86</span>
                      <i className="icon arrow-bottom"></i>
                    </div>
                  </div>
                  <div className="input-item">
                    <input
                        type="tel" 
                        defaultValue="" 
                        placeholder="请输入手机号"
                        maxLength="11"
                        onChange={this.changephone()} 
                    />
                  </div>
                </div>
                <div className="form-item2">
                  <div className="input-item pr9">
                    <input
                      type="text"
                      defaultValue=""
                      placeholder="请输入短信验证码"
                      onChange={this.changetest()}
                      maxLength="4"
                    />
                  </div>
                  <div className="input-right-addons" data-events="click">
                    <span className="validate-code disabled">获取验证码</span>
                  </div>
                </div>

                <div className="form-button" data-events="click">
                  <button>登录</button>
                </div>
              </div>
            </div>
          </UserWrap>
        );
    }
}

export default withRouter(login);