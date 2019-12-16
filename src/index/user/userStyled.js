import styled from 'styled-components'

export const UserWrap = styled.div`
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    .navbar{
        display: flex;
        justify-content: space-between;
        height: .44rem;
        .navbar-left{
            display: flex;
            align-items: center;
            justify-content: center;
            width: .7rem;
            font-size:.24rem;
            color:#4499FF;
        }
        .navbar-right{
            display: flex;
            align-items: center;
            justify-content: center;
            width: .7rem;
            height:.44rem;
            .navbar-right-content{
                font-size: .18rem;
                color: #49f;
            }
        }
    }
    .page-content{
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-left: .48rem;
        margin-right: .48rem;
        .page-title{
            margin-top: .18rem;
            color: #49f;
            font-size: .3rem;
            height: .5rem;
            line-height: .5rem;
            letter-spacing: 2px;
            text-align: center;
        }
        .page-from{
            .from-item{
                display: flex;
                align-items:center;
                height: .72rem;
                border-bottom: 1px solid #e0e0e0;
                position: relative;
                .input-label{
                    width: 1rem;
                    height: .3rem;
                    line-height: .3rem;
                    span{
                        font-size: .17rem;
                        color: #333;
                    }
                }
                .input-item{
                    flex: 1;
                    height: .72rem;
                    input{
                        width: 100%;
                        font-size: .17rem;
                        color: #333;
                        height: .36rem;
                        margin-top: .18rem;
                        line-height: .36rem;
                        border:0;
                    }

                }
            }
            .form-item2{
                display: flex;
                align-items:center;
                height: .72rem;
                border-bottom: 1px solid #e0e0e0;
                position: relative;
                .pr9{
                    padding-right: .72rem;
                    display: flex;
                    align-items:center;
                    height: .72rem;
                    border-bottom: 1px solid #e0e0e0;
                    
                    input{
                        width: 100%;
                        font-size: .18rem;
                        color: #333;
                        height: .36rem;
                        margin-top: .18rem;
                        line-height: .36rem;
                        border:0;
                    }
                }
                .input-right-addons{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    .validate-code{
                        display: inline-block;
                        width: .96rem;
                        height: .4rem;
                        border: 1px solid #49f;
                        font-size: .12rem;
                        color: #49f;
                        line-height: .4rem;
                        border-radius: 3px;
                        text-align: center;
                        border: 1px solid #b2b2b2;
                        color: #888;
                    }
                }
            }
            .form-button{
                margin-top: .33rem;
                border-radius: 3px;
                height: .48rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(68,153,255,.5);
                button{
                    color: #fff;
                    font-size: .17rem;
                    outline: none!important;
                    background-color: transparent;
                    border: 0;
                   
                }
            }
        }
    }
`