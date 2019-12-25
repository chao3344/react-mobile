import styled,{ keyframes } from 'styled-components'
import border from '../component/styled/border'


const Up = keyframes`
    from{
        bottom:-3.75rem;
    }
    to{
        bottom:0rem;
    }
`



export const SwiperWrap = styled.div `
    height:40vw;
    font-size:0;
    overflow:hidden;
    touch-action:none;
    img{
        width:100%;
        height:40vw
    }
`
export const SearchItemWrap = styled.div `
    .am-input-label-5{
        width:32px !important;
    }
`

export const IconLeft = styled.div `
    transform: rotate(-135deg);
    display: block;
    position: absolute;
    top: 50%;
    left:90%;
    margin-top: -7px;
    width: 12px;
    height: 12px;
    border: 1px solid #CCC;
    border-width: 0 0 2px 2px;
    
`

export const DateWrap = styled.div `
    
`
export const SearchBtnWrap = styled.div `
    padding:20px 30px;
    background: #fff;
    span{
        font-size:.16rem !important;
    }
`

export const Margin10 = styled.div `
    margin-top:10px;
`

export const UserNav = border(
    styled.div `
        color:#555;
        .nav{
            margin-bottom: 12px;
            background: #FFF;
            overflow: hidden;
            height: .45rem;
            ul{
                display: flex;
               .tjclick{
                    text-align: center;
                    width: 33.33%;
                    font-size: .14rem;
                    border-right: 1px solid #DDD;
                    .a{
                        display: block;
                        padding: 12px 0;
                        color: #555;
                        i{
                            width: 20px;
                            height: 20px;
                            display: inline-block;
                            margin-right: 16px;
                            vertical-align: middle;
                        }
                    }
               }
            }
        }
        .search-app{
            margin-bottom: .06rem;
            margin-top:.2rem;
            width:100%
            img{
                width:100%
            }
        }
    `
)

export const CityWrap = styled.div `
    .city-title{
        color:#555;
        width:100%;
        margin-bottom:10px;
        text-align:center;
    }
`
export const CityItemWrap = styled.div `
    
    height: 75px;
    margin-bottom: 4px;
    overflow: hidden;
    position: relative;
    div{
        padding: 0 24px;
        display: block;
        height: 75px;
        overflow: hidden;
        h2{
            color: #FFF;
            text-shadow: 1px 1px 6px #000;
            font-size: .24rem;
            font-weight: normal;
            margin-top: 16px;
            margin-bottom: 2px;
            line-height:1;
        }
        p{
            font-size: .0813rem;
            color: #FFF;
            span{
                color: #F55;
            }
        }
        .icon-left{
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -9px;
            width: 14px;
            height: 14px;
            border: 1px solid #FFF;
            border-width: 0 0 2px 2px;
            transform: rotate(-135deg);
            right: 10px;
        }
    }
`

export const FooterWrap = styled.div `
    text-align: center;
    font-size: .12rem;
    margin: 15px 0 60px;
    color: #888;
    line-height: 18px;
    span{
        display:block
    }
`

export const StarItemWrap = styled.div `

    .mask{
        position:absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.7;
    }

    .show{
        animation: ${Up} 0.3s linear;
        animation-fill-mode: forwards;
    }
    .starbox{
        position:absolute;
        width:100%;
        left:0;
        bottom:0;
        z-index: 1000;
        background:#fff;
        display:block;
        color:#555;
    .content{
            padding: .12rem .12rem .24rem;
            .sp-tit{
                font-size: .12rem;
                margin-bottom: .04rem;
            }
            .star-list{
                padding: 0 !important;
                font-size: .12rem;
                min-height: 0;
                max-height: 1000px;
                display:flex;
                li{
                    margin-right: -1px;
                    width: 20%;
                    border: 1px solid #DDD;
                    padding: .08rem 0;
                    text-align: center;
                    &.on{
                        background: #deeaff;
                        border: 1px solid #49f;
                        color: #555;
                        position: relative;
                        z-index: 1;
                    }
                }
            }
            .price{
                margin-top: .12rem;
                .sp-tit{
                    font-size: .12rem;
                    margin-bottom: .04rem;
                }
                .price-list{
                    padding: 0 !important;
                    font-size: .12rem;
                    min-height: 0;
                    max-height: 1000px;
                    display:flex;
                    li{
                        margin-right: -1px;
                        width: 20%;
                        border: 1px solid #DDD;
                        padding: .08rem 0;
                        text-align: center;
                        &.on{
                        background: #deeaff;
                        border: 1px solid #49f;
                        color: #555;
                        position: relative;
                        z-index: 1;
                    }
                    }
                }
            }
            
        }
        .bot-btn{
                width: 100%;
                background: #F8F8F8;
                border-top: 1px solid #ddd;
                padding: 4px 8px;
                z-index: 10010;
                
                ul{
                    width:100%;
                    display:flex;
                
                    #filter-reset{
                        margin-right: 8px;
                    }
                    li{
                        flex: 1;
                        height: 36px;
                        line-height: 34px;
                        border: 1px solid #DDD;
                        text-align: center;
                        border-radius: 3px;
                        background: #FFF;
                    }
                    .on{
                        border: none;
                        background: #49f;
                        color: #FFF;
                    }
                }
            }
    }
    
`

export const CityListWrap = styled.div `
    position:absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    
    .header{
        display:flex;
        padding-right: 10px;
        padding-left: 10px;
        .back{
            color: #858585;
            margin-left: -10px;
            padding-left: 10px;
            position: relative;
            z-index: 20;
            width: 34px;
            height: 44px;
            display: inline-block;
            line-height: 44px;
            font-size: 24px;
            padding-top: 3px;
        }
        .back:after{
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -9px;
            width: 14px;
            height: 14px;
            border: 1px solid #858585;
            border-width: 0 0 2px 2px;
            transform: rotate(45deg);
            right: 0;
        }

        .search-input{
            flex:1;
            border: 1px solid #ddd;
            height: 34px;
            background-color: #f4f4f4;
            border-radius: 3px;
            padding: 0 8px;
            line-height: 32px;
            margin: 6px 0 0 31px;
            position: relative;
            input{
                width: 99%;
                padding-left: 24px;
                border: 0;
                font-size: .14rem;
                line-height: 1;
                color: #555;
                float: left;
                margin-top: 8px;
                background-color: #f4f4f4;
            }
        }
    }
    .city-content{
        background: #F2F2F2;
        padding: 50px 12px 12px 12px;
        
        .search-hostory,
        .search-hot{
            padding: 0px 12px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 8px;
            
            .hostory-title{
                font-size: .12rem;
                line-height: 24px;
                margin-bottom: 6px;
            }
            .hostory-list{
                display:flex;
                flex-wrap:wrap;
                max-height:1.04rem;
                overflow:hidden;
                .hostory-li{
                    padding: 0 12px;
                    width: 30%;
                    border-radius: 3px;
                    margin-right:3%;
                    margin-bottom: 12px;
                    background: #FFF;
                    height: .4rem;
                    border: 0;
                    text-align:center;
                    font-size:.12rem;
                    line-height:.4rem;
                }
            }
        }
        .search-hot{
            
            .hot-title{
                font-size: .12rem;
                line-height: 24px;
                margin-bottom: 6px;
            }
            .hot-list{
                display:flex;
                flex-wrap:wrap;
                .hot-li{
                    
                    padding: 0 12px;
                    width: 30%;
                    border-radius: 3px;
                    margin-right:3%;
                    margin-bottom: 12px;
                    background: #FFF;
                    height: .4rem;
                    border: 0;
                    text-align:center;
                    font-size:.12rem;
                    line-height:.4rem;
                }
            }
        }
        .city-letter{
            margin-bottom: 12px;
            padding: 17px 12px 25px;
            background: #fff;
            ul{
                display:flex;
                flex-wrap:wrap;
                .city-head{
                    width: 17%;
                    margin-right: 2.5%;
                    margin-bottom: 2.5%;
                    border-radius: 3px;
                    height: 35px;
                    background: #FFF;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 33px;
                    font-size:.13rem;
                }
            }
        }
        .city-search{        
            ul{
                display:flex;
                flex-wrap:wrap;
                .search-div{
                    padding: 0 12px;
                    width: 30%;
                    border-radius: 3px;
                    margin-right:3%;
                    margin-bottom: 12px;
                    background: #FFF;
                    height: .4rem;
                    border: 0;
                    text-align:center;
                    font-size:.13rem;
                    /* line-height:.4rem; */
                }
            }
        }
        
    }
    
`

export const ChooseLocalWrap = styled.div`
    
    padding: 0px 12px 12px 12px;
    position:absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    .header{
        display:flex;
        padding-right: 10px;
        padding-left: 10px;
        .back{
            color: #858585;
            margin-left: -10px;
            padding-left: 10px;
            position: relative;
            z-index: 20;
            width: 34px;
            height: 44px;
            display: inline-block;
            line-height: 44px;
            font-size: 24px;
            padding-top: 3px;
        }
        .back:after{
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -9px;
            width: 14px;
            height: 14px;
            border: 1px solid #858585;
            border-width: 0 0 2px 2px;
            transform: rotate(45deg);
            right: 0;
        }

        .search-input{
            flex:1;
            border: 1px solid #ddd;
            height: 34px;
            background-color: #f4f4f4;
            border-radius: 3px;
            
            line-height: 32px;
            margin: 6px 0 0 10px;
            position: relative;
            input{
                width: 99%;
                padding-left: 24px;
                border: 0;
                font-size: .14rem;
                line-height: 1;
                color: #555;
                float: left;
                margin-top: 8px;
                background-color: #f4f4f4;
            }
        }
    }
    .page-content{
        padding-top: .14rem;
        position: relative;
        .get-city{
            background: #FFF;
            padding: 0 12px;
            line-height: 44px;
            height: .44rem;
            margin: 0px -12px;
            font-size: .14rem;
            border: 0;
            
        }
    }
    .keyword-group{
        margin-bottom: 2px;
        .page-title{
            font-size: .12rem;
            color: #999;
            margin-bottom: 6px;
            position: relative;
        }
        .keyword-list{
            overflow: hidden;
            padding-bottom: 1px;
            margin-right: -3px;
            ul{
                display:flex;
                flex-wrap:wrap;
                .keyword-div{
                    width: 30%;
                    border: 0px;
                    border-radius: 3px;
                    margin-right: 2%;
                    margin-bottom: 12px;
                    background: #FFF;
                    text-align: center;
                    float: left;
                    height: .4rem;
                    line-height:.4rem;
                    span{
                        font-size: .12rem;
                        display: inline-block;
                        max-width: 6em;
                        max-height: .4rem;
                        overflow: hidden;
                        line-height:.2rem
                    }
                }
            }
        }
    }
`