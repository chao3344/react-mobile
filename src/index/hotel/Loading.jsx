import React, { Component } from 'react';
import { LoadingWrap } from './hotelStyled'

import loadimg from '../../assets/images/loading.gif'

class Loading extends Component {
    render() {
        return (
            <LoadingWrap>
                <div 
                    className="loading"
                    style={{background:`url(${loadimg})`,backgroundSize:"cover"}}
                >

                </div>
            </LoadingWrap>
        );
    }
}

export default Loading;

