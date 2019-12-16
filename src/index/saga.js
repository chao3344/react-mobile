import { put } from 'redux-saga/effects'

import * as types from './action-types'
import { get } from '../utils/http'


// *相当于async，yield相当于await
function * loadData(action){
    try {
        const result = yield get({
            url: action.url,
            params:action.params
        })
        yield put({type:types.LOADDATA,data:result})
    } catch(e){}
}

function * CityData(action){
    try {
        // 在被调用之后真正的派发一个type，连同参数传递
        yield put({type:types.LOADCITY,data:action})
    } catch(e){}
}

// 选择地区的数据
function * LocalData(action){
    
    try {
         const result = yield get({
            url: action.url,
            params:action.params
        })
        // 在被调用之后真正的派发另一个type，连同参数传递
        yield put({type:types.LOCALLISTDATA,data:result})
    } catch(e){}
}

// 选择酒店位置的id和name
function * HotelData(action){
    try {
        yield put({type:types.HOTELName,data:action})
    } catch(e){}
}

function * TimeData(action){
    try {
        yield put({type:types.TimeDATA,data:action})
    } catch(e){}
}

function * StarData(action){
    
    try {
        yield put({type:types.StarDATA,data:action})
    } catch(e){}
}

export{
    types,
    loadData as action,
    CityData,
    LocalData,
    HotelData,
    TimeData,
    StarData
}