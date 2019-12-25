import styled,{ keyframes } from 'styled-components'

const Up = keyframes`
    from {
        height:.44rem;
    }
    to{
        height:0rem;
        
    }
`

const Down = keyframes`
    from{
        height:0rem;
    }
    to{
        height:.44rem;
    }
`
const Up1 = keyframes`
    from {
        height:.53rem;
    }
    to{
        height:0rem;
        
    }
`

const Down1 = keyframes`
    from{
        height:0rem;
    }
    to{
        height:.53rem;
    }
`

export const HotelWrap = styled.div`
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    
    .show{
        animation: ${Down} 0.15s linear;
        animation-fill-mode: forwards;
    }
    .hidden{
        animation: ${Up} 0.15s linear;
        animation-fill-mode: forwards;
    }
    .head{
        display:flex;
        padding:0 10px;
        height:.44rem;
        font-size:.19rem;
        color:#444;
        font-weight:bold;
        i{
            width:.34rem;
            height:.44rem;
            text-align:center;
            line-height:.44rem;
        }
        .head-title{
            flex:1;
            line-height:.44rem;
            text-align:center;
            padding-right:.3rem;
            color:#444;
        }
    }
    .show1{
        animation: ${Down1} 0.15s linear;
        animation-fill-mode: forwards;
    }
    .hidden1{
        animation: ${Up1} 0.15s linear;
        animation-fill-mode: forwards;
        padding:0rem !important;
    }
    .search-box{
        padding:.08rem;
        display:flex;
        height:.53rem;
        .search-time{
            width:1.06rem;
            font-size:.12rem;
            border: 1px solid #DDD;
            border-radius: 3px;
            height: 36px;
            padding: 0 10px;
        }
        .search-search{
            flex:1;
            height:.36rem;
            border: 1px solid #DDD;
            border-radius: 3px;
            height: 36px;
            padding: 0 8px;
            text-align:center;
            margin-left:.1rem;
            color:#555;
            input{
                margin-top:.05rem;
                border:0
            }
        }
    }
    .fast-filter{
        position: relative;
        height:.52rem;
        .box{
            padding: .12rem .12rem 0;
            background: #ffffff;
            overflow-x: scroll;
            overflow-y: hidden;
            display: block;
            border-top:1px solid #ddd;
            width:100%;
            ul{
                display:flex;
                height:.4rem;
                width:max-content;
                li{
                    height:.28rem;
                    line-height: .28rem;
                    color: #444444;
                    font-size: 0.12rem;
                    border-radius: .05px;
                    background: #F6F6F6;
                    padding: 0 .1rem;
                    display: inline-block;
                    margin-right: .1rem;
                    border: 1px solid #ffffff;
                    
                    i{
                        position: relative;
                        margin-left: 7.5px;
                        vertical-align: middle;
                        display: inline-block;
                        padding-right: 5px;
                    }
                    i:after{
                        border-color: #888;
                        content: "";
                        width: 5px;
                        height: 5px;
                        position: absolute;
                        top: -5px;
                        border: 1px solid #888;
                        border-width: 1px 0px 0px 1px;
                        transform: rotate(-135deg);
                    }
                    
                }
                .isclick{
                    background: none;
                    border: 1px solid #4499FF;
                    color: #4499FF;
                    border-radius:.2rem;
                }
            }
        }
        
        .brand-box{
            position: absolute;
            z-index:999;
            color:#000;
            top:.3rem;
            margin-top:.2rem;
            .brand-top{
                max-height:3rem;
                background:#fff;
                ul{
                    list-style:none;
                    display:flex;
                    flex-wrap:wrap;
                    li{
                        display: inline-block;
                        background: #F6F6F6;
                        padding: 0 11px;
                        font-size: .12rem;
                        border-radius: 3px;
                        line-height: .3rem;
                        margin-left: 10px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        border: 1px solid #ffffff;
                    }
                    .check{
                        color: #4499FF;
                        border: 1px solid #4499FF;
                        background: #ffffff;
                    }
                }
            }
            .brand-bot{
                padding: 9px 12px 8px;
                background: #F4F4F4;
                height: 52px;
                display:flex;
                .btn-clear{
                    width: 88px;
                    height: .36rem;
                    background: #FFFFFF;
                    border-radius: 3px;
                    float: left;
                    color: #000000;
                    font-size: .14rem;
                    line-height: .36rem;
                    text-align: center;
                }
                .btn-submit{
                    flex:1;
                    background: #4499FF;
                    height: .36rem;
                    border-radius: 3px;
                    float: left;
                    position: absolute;
                    right: 12px;
                    left: 112px;
                    font-size: .14rem;
                    line-height: .36rem;
                    text-align: center;
                    color: #ffffff;
                }
            }
        }
        .bed-box{
            position: absolute;
            z-index:999;
            color:#000;
            top:.3rem;
            margin-top:.2rem;
            width:100%;
            background:#fff;
            .bed-top{
                width:100%;
                max-height:3rem;
                background:#fff;
                ul{
                    list-style:none;
                    li{
                        display: block;
                        font-size: .16rem;
                        height: .44rem;
                        line-height: .44rem;
                        border-bottom: 1px solid #E0E0E0;
                        border: none;
                        margin-left: 10px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .active{
                        border: none;
                        border-bottom: 1px solid #E0E0E0;
                        color: #4499FF;
                    }
                }
            }
            .brand-bot{
                padding: 9px 12px 8px;
                background: #F4F4F4;
                height: 52px;
                display:flex;
                .btn-clear{
                    width: 88px;
                    height: .36rem;
                    background: #FFFFFF;
                    border-radius: 3px;
                    float: left;
                    color: #000000;
                    font-size: .14rem;
                    line-height: .36rem;
                    text-align: center;
                }
                .btn-submit{
                    flex:1;
                    background: #4499FF;
                    height: .36rem;
                    border-radius: 3px;
                    float: left;
                    position: absolute;
                    right: 12px;
                    left: 112px;
                    font-size: .14rem;
                    line-height: .36rem;
                    text-align: center;
                    color: #ffffff;
                }
            }
        }
    }
    .content{
        flex:1;
        position: relative;
        overflow:hidden;
        .mask{
            position: absolute;
            width:100%;
            height:100%;
            background:#000;
            top: 0px;
            left: 0px;
            z-index: 998;
            opacity: 0.7;
        }
        .login-wrap{
            padding: 12px;
            background: #fff;
            position: relative;
            background:#FFF8F4;
            p{
                height:.48rem;
                font-size: 14px;
                color: #333;
                font-weight: bold;
                line-height: .48rem;
                margin-left: 48px;
                span{
                    color: #FF5555;
                }
            }
            .login{
                width: 46px;
                height: 28px;
                position: absolute;
                top: 20px;
                right: 12px;
                color: #DC3A00;
                display: block;
                line-height: 28px;
                text-align: center;
                font-size: 12px;
                font-weight: bold;
                background-image: linear-gradient(-180deg, #FCD7CA 0%, #FFC9B1 100%);
                border-radius: 6px;
                
            }
            .hotel-list{
                background: #FFF;
            }
        }
    }
`

export const HotelItemWrap = styled.div`
    li{
        border-bottom: 3px solid #F5F5F5;
        margin: 0;
        position: relative;
        overflow: hidden;
        border-color: #ebebeb;
        display:flex;
        width:100%;
        .pic{
            height: 1.5rem;
            width: 1rem;
            display:inline-block;
        }
        .info{
            position: relative;
            height: 150px;
            padding: 12px 0;
            margin-left:5px;
            flex:1;
            .name{
                font-size: .16rem;
                color: #333333;
                margin-bottom: 8px;
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display:flex;
                em{
                    display: inline-block;
                    max-width: 91%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-style: normal;
                }
                .grade{
                    display: inline-block;
                    width: 16px;
                    height: 14px;
                    margin-left: 3px;
                    margin-bottom: 1px;
                }
            }
            .comt{
                height: 16px;
                line-height: 16px;
                margin-bottom: 8px;
                font-size:.12rem;
                .comt_no{
                    color:#4899fe;
                    b{
                        font-size: .16rem;
                        margin-right: 1px;
                        font-weight:bold;
                    }
                }
                .comt_str{
                    color:#4899fe;
                }
                .comt_nmb{
                    color: #898989;
                }
            }
            .district{
                margin-bottom: .06rem;
                margin-top: 8px;
                font-size: .12rem;
                color: #898989;
                line-height: 12px;
                max-width:1.8rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                .d4{
                    font-size: .12rem;
                    color: #898989;
                    line-height: 16px;
                    white-space: nowrap;
                }
            }
            .fac{
                font-size: .12rem;
                color: #898989;
                line-height: 12px;
                span{
                    margin-right: 6px;
                }
            }
        }
        .right-wrap{
            text-align: right;
            position: absolute;
            right: 12px;
            top: 72px;
            .r-tab{
                .pri{
                    margin-top: 4px;
                    line-height: 12px;
                    color: #898989;
                    span{
                        font-weight: 700;
                        font-size: .2rem;
                        color: #fa4c47;
                        i{
                            font-size:.12rem;
                        }
                        .pri-end{
                            margin: 0 0 0 2px;
                            color: #B2B2B2;
                            font-size:.12rem;
                        }
                    }
                }
                .UnLogin{
                    font-size: .12rem;
                    color: #FF9300;
                }
            }
        }
    }
`


export const LoadingWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #444;
    opacity:0.5;
    z-index: 10006 !important;
    .loading{
        width:.8rem;
        height:.8rem;
        background-color:#fff !important;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
        border-radius: 10px;
        position: absolute;
        left:37%;
        top:35%;
        
        
    }
`
