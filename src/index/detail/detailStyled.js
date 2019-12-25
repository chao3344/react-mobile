import styled from 'styled-components'

export const DetailWrap = styled.div `
height:100%;

background-color: #f4f4f4 !important;
display:flex;
flex-direction:column;
height:100%;
.header{
    opacity: 1;
    box-shadow: none;
    background: transparent;
    padding: 0;
    background-color: #fcfcfc;
    color: #444;
    box-shadow: 0px 1px 2px #ddd;
    display:flex;
    position: absolute;
    z-index:999;
    height:.44rem;
    width:100%;
    .back{
        width:.44rem;
        height:.44rem;
        color:#858585;
        display: inline-block;
        line-height: .44rem;
        font-size: 24px;
    }
    .title{
        flex:1;
        padding-right:.44rem;
        text-align:center;
        line-height:.44rem;
        font-size:.22rem;
        font-weight:bold;
    }
}
.warp{
    flex:1;
    .Swiper{
        height:1.8rem;
        touch-action: none;
        .slider-frame{
            height:1.8rem !important;
            img{
                height:1.8rem;
            }
        }
    }
    
    .detail-content{
        position: relative;
        height:100%;
        .info{
            width:100%;
            padding-left:.1rem;
            padding-right:.1rem;
            margin-top:-.3rem;
            overflow:hidden;
            
            ul{
                padding: 0px;
                margin: 0px;
                list-style-type: none;
                background:#fff;
                height:100%;
                overflow:hidden;
                li{
                    .hotelDesc{
                        padding: 14px 12px;
                        padding-bottom: 0;
                        margin: 0;
                        overflow:hidden;
                        .hotelName{
                            font-size: 18px;
                            color: #333333;
                            margin: 0;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            max-width: 70%;
                            float: left;
                            margin-right: 2%;
                            font-weight: 600;
                        }
                    }
                    .infobar_point{
                        margin: 12px 12px;
                        background: #EFF6FF;
                        border-radius: 4px;
                        border: none;
                        display:flex;
                        height: 56px;
                        padding: 6px 0;
                        overflow:hidden;
                        .praise_nbm{
                            width:.6rem;
                            height:.44rem;
                            border-right: 1px solid rgba(68,153,255,0.2);
                            padding: 0;
                            font-size: 12px;
                            color: #4499FF;
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            
                            .u_nbm{
                                padding-bottom:0px;
                                .s_nbm{
                                    font-size:.24rem;
                                    margin:0px;
                                   line-height:1;
                                }
                            }
                        }
                        .commentCenter{
                            flex:1;
                            overflow:hidden;
                            .praise_filters{
                                display:flex;
                                color:#4499FF;
                                font-size:12px;
                                padding: 0 10px;
                                span{
                                    padding-right:10px;
                                    text-align:center;
                                }
                            }
                        }
                        .commentAllDesc{
                            display:flex;
                            padding: 0 10px;
                            font-size: 12px;
                            color: #333333;
                            height: 22px;
                            margin-top:.05rem;
                            span{
                                padding-right:5px;
                            }
                        }
                    }
                    .infobar_facilities{
                        margin: 0 12px;
                        padding: 12px 0;
                        .hotelzxDesc{
                            font-size: 12px;
                            color: #333333;
                            margin: 0;
                            font-weight: 600;
                        }
                    }
                }
                .map_li{
                    position: relative;
                    border: none;
                    border-bottom: 1px solid #ebebeb;
                    
                    margin: 0 12px;
                    margin-top: 0;
                    padding-bottom: 12px;
                    .infobar_map{
                        padding-right:15%;
                        .map_location{
                            margin: 0;
                            position: relative;
                            font-size: 12px;
                            height: 22px;
                            line-height: 22px;
                            color:#333;
                            font-size:12px;
                            font-weight:bold;
                        }
                        .map_detail{
                            font-size: 12px;
                            color: #888888;
                        }
                    }
                }
            }
        }
        .home-list{
            padding-top: 24px;
            min-height: 100px;
            background:#f4f4f4;
            .iconNew{
                background:rgba(255,234,234,1);
                color:#FC5839;
                display: block;
                font-size: 12px;
                color: #FC5839;
                height: 28px;
                line-height: 28px;
                padding: 0 8px;
                border-radius: 4px 4px 0 0;
            }
            ul{
                margin: 0 8px;
                list-style-type: none;
            }
        }
    }

    .ruZhuZC{
        display: block;
        background: #FFFFFF;
        margin-top: 8px;
        padding: 20px 16px;
        .ruZhuZCName{
            font-size: 18px;
            color: #333333;
            font-weight: bold;
        }
        ul{
            
            padding:0;
            margin:0;
            .ruZhuDesc{
                margin-top: 20px;
                p{
                    font-weight: 600;
                    font-size: 12px;
                    color: #333333;
                    margin-bottom: 8px;
                }
                .ruZhucontentD{
                    font-size: 12px;
                    color: #888888;
                    
                }
            }
        }
    }
    .ZCCmment{
        display: block;
        background: #FFFFFF;
        margin-top: 8px;
        padding: 20px 16px;
        .ZCtitle{
            display:flex;
            justify-content:space-between;
            span:first-child{
                font-size: .18rem;
                color: #333333;
                font-weight: 600;
            }
            span:last-child{
                
                font-size: .12rem;
                color: #4499FF;
                line-height:1;
            }
        }
        .ZCScore{
            margin-top: .2rem;
            span:first-child{
                font-size: 28px;
                color: #4499FF;
                font-weight: 600;

            }
            span:last-child{
                
                font-size: 14px;
                color: #4499FF;
                margin-left: 4px;
            }
        }
        .ZCDemo{
            margin-top: .1rem;
            .one{
                font-size: .14rem;
                color: #333333;
            }
            .two{
                font-size: .12rem;
                color: #888888;
            }
            .three{
                font-size: .14rem;
                color: #333333;
                margin-top: .12rem;
            }
        }
    }
    .foot{
        padding-top: .24rem;
        padding-bottom: .16rem;
        text-align: center;
        background: #f4f4f4;
        .var{
            font-size: .13rem;
            margin-bottom: .08rem;
            color: #555555;
            display:flex;
            justify-content:center;
            
            span{
                display:inline-block;
                margin-right:.1rem;
            }
        }
        .copy{
            font-size: .12rem;
            color: #999;
        }
    }

}

`

export const HomeItemWrap = styled.div `

    .wrap{
        display:flex;
        background: #fff;
        border-radius: 0 0 4px 4px;
        .left-roomdetail{
            padding: 8px 0 8px 8px;
            display:flex;
            flex:1;
            .pic{
                width: .75rem;
                height: .75rem;
                img{
                    width: .75rem;
                    height: .75rem;
                }
            }
            .picroom-info{
                padding-top: 3px;
                line-height: 1;
                margin-left:.1rem;
                .room{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: .16rem;
                    color: #353535;
                }
                .room-info{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 16px;
                    font-size:12px;
                    margin-top:.1rem
                    span{
                        margin-right:.04rem;
                        white-space: nowrap;
                        line-height: 12px;
                        font-size:.12rem;
                    }
                }
            }
        }
        .right{
            display:flex;
            flex-direction:columnl;
            width:.7rem;
            margin-right:.1rem;
            align-items:center;
            .price{
                color: #f55;
                line-height: 1;
                font-size: .14rem;
                .num{
                    font-size:.24rem;
                }
                .btn2_yf{
                    width: 66px;
                    height: 28px;
                    line-height: 28px;
                    background: #FF5555;
                    color: #fff;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 14px;
                    text-align:center;
                }
            }
        }
    }


`