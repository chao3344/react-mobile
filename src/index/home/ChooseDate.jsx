import React, { Component } from 'react';
import { DateWrap } from '../indexStyled'
import { List,  Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import searchico from 'imgs/images/search-icon.png'
import './choosedate.css'

import { connect } from 'react-redux'
import {GETTIME} from '../action-types'

const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
  };
  
  const now = new Date();
  // 设置日期为不可选择
  // extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5)] = { info: 'Disable', disable: true };
  
  
  Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
      extra[+date] = info;
    }
});


const mapState = state => ({
  cityid:state.city.cityId,
  localdata:state.local.localList
})


const mapDispatch = dispatch => ({
  TimeData(start,end){
      dispatch({
        type:GETTIME,
        starttime:start,
        endtime:end
      })
  }
})


class ChooseDate extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;
    constructor(props) {
        super(props);
        this.state = {
          en: false,
          show: false,
          config: {},
        };
      }
      renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        
        return (
          <List.Item arrow="horizontal"
            onClick={() => {
              document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
              this.setState({
                show: true,
                config,
              });
            }}
          >
            <div className="ico" style={{ backgroundImage: `url(${searchico})`,backgroundSize:'150px 140px', height: '16px', width: '16px',backgroundPosition:'-24px 0px', }}></div>
            {this.state.en ? en : zh}
          </List.Item>
        );
      }
      
    
      onSelectHasDisableDate = (dates) => { 
        console.warn('onSelectHasDisableDate', dates)
      }
    
      
      onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
          show: false,
          startTime,
          endTime,
        });
        let NewStartTime = new Date(startTime).getFullYear()+'-'+ (new Date(startTime).getMonth()+1) +'-'+ new Date(startTime).getDate()
        let NewEndTime = new Date(endTime).getFullYear()+'-'+ (new Date(endTime).getMonth()+1) + '-'+new Date(endTime).getDate()
        
        this.props.TimeData(NewStartTime,NewEndTime)
      }
    
      onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
          show: false,
          startTime: '',
          endTime: '',
        });
      }
    
      getDateExtra = date => extra[+date];
      
    render() {
        return (
            <DateWrap>
                <List className="calendar-list" style={{ backgroundColor: 'white'}}>
                    
                    {this.renderBtn( this.state.startTime ? new Date(this.state.startTime).getMonth()+1 +'月'+ new Date(this.state.startTime).getDate() + '日'+
                      '  星期' +'日一二三四五六'.charAt(new Date(this.state.startTime).getDay() )
                      + '   /    ' + 
                      (new Date(this.state.endTime).getMonth() + 1) +'月'+ new Date(this.state.endTime).getDate() + '日' +
                      '  星期' +'日一二三四五六'.charAt(new Date(this.state.endTime).getDay() )
                    : '选择日期区间' )}
                    
                </List>
                <Calendar
                    {...this.state.config}
                    visible={this.state.show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    defaultValue={[new Date()]}
                    minDate={new Date(+now - 5184000000)}
                    maxDate={new Date(+now + 31536000000)}
                />
            </DateWrap>
        );
    }
}

export default connect(mapState,mapDispatch)(ChooseDate);