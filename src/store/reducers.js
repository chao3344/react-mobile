import { combineReducers } from 'redux'
import { reducers } from '../index/index'

// 合并reducers
export default combineReducers({
    home:reducers.listdata,
    city:reducers.city,
    local:reducers.local,
    hotel:reducers.hotel,
    time:reducers.time,
    star:reducers.star,
})