import React, { Component } from 'react';
import {FooterWrap} from '../indexStyled'

class Footer extends Component {
    render() {
        return (
            <FooterWrap>
				©2009-2019 艺龙网信息技术（北京）有限公司
                <span>《艺龙旅行网服务条款》</span>
            </FooterWrap>
        );
    }
}

export default Footer;