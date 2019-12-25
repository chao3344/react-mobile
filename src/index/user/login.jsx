import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { Modal } from 'antd-mobile'

import { UserWrap } from './userStyled'

// import store from 'store'

const alert = Modal.alert

class login extends Component {
    state={
      isPhone:false,
      isTest:false,
      randomdata:'',
    }

    
    // 产生随机四位的验证码
    Random =()=>()=> {
      
      this.Gettest(Math.floor(Math.random()*(9999-1000)+ 1000))
    }

    back = ()=>()=>{
      this.props.history.goBack()
        
    }
    Gettest(random){
      if(this.state.isPhone){
        
        this.setState({
          randomdata:random
        })
        // console.log(random)
      
        alert('同城艺龙', `尊敬的用户，您本次登录的验证码为${random}`, [
          { text: '取消', onPress: () => console.log('cancel') },
          { text: '确定', onPress: () => 
            this.setState({
              isPhone:false
            })
          },
        ])

      }
    }
    changephone= ()=>()=>{
      if(this.input.value.length === 11){
        this.setState({
          isPhone:true
        })
      }else{
        this.setState({
          isPhone:false
        })
      }
    }

    // 验证
    changetest = ()=>()=>{
      
      if(Number( this.inputtest.value ) === this.state.randomdata ){
        
        this.setState({
          isTest:true,
          isPhone:true
        })
        
      }

    }

    // 登录
    Login = ()=>()=>{
      if( this.state.isPhone && this.state.isTest ){
        
        alert('同城艺龙', '尊敬的用户，您已经成功登陆！,点击确定后页面将在两秒后进行跳转', [
          { text: '取消', onPress: () => console.log('cancel') },
          { text: '确定', onPress: () => 
            // store.set('Login','true')
            setTimeout(()=>{
              this.props.history.push('/')
            },2000)
          },
        ])
      }
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
                        ref={input => this.input = input}
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
                      ref={inputtest => this.inputtest = inputtest}
                      maxLength="4"
                    />
                  </div>
                  <div className="input-right-addons" onClick={this.Random()}>
                    <span className={[this.state.isPhone ? 'active':"validate-code"]} >获取验证码</span>
                  </div>
                </div>

                <div className={["form-button", this.state.isTest?"light":""].join(' ')} onClick={this.Login()}>
                  <button>登录</button>
                </div>
              </div>
            </div>
          </UserWrap>
        );
    }
}

export default withRouter(login);