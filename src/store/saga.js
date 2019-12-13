import { takeEvery } from 'redux-saga/effects'
import { sagas as index } from '../index/index'


let { GETLIST,
    CHANGECITY,
    GETLOCALLIST,
    GEThotelName,
    GETTIME } = index.types

function* sagas(){

    // 检测到状态发生变化是 调用局部中saga写好的方法
    yield takeEvery(GETLIST,index.action)
    yield takeEvery(CHANGECITY,index.CityData)
    yield takeEvery(GETLOCALLIST,index.LocalData)
    yield takeEvery(GEThotelName,index.HotelData)
    yield takeEvery(GETTIME,index.TimeData)
}


export {
    sagas
} 
    