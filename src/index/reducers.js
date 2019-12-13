import { LOADDATA,
  CHANGECITY,
  LOCALLISTDATA,
  HOTELName,
  TimeDATA } from './action-types'

const defaultState = {
    list:[],
    localList:'',
    cityName:'',
    cityId:'',
    hotelId:'',
    hotelName:'',
    startTime:'',
    endTime:''
}

export const listdata = (state=defaultState,action) => {
    switch(action.type) {
        case LOADDATA:
          return {
            list: action.data
          }
        default:
          return state
      }
}

export const city = (state=defaultState,action) => {
  
    switch(action.type) {
        case CHANGECITY:
          return {
            cityName: action.cityname,
            cityId: action.cityid
          }
        default:
          return state
      }
}


export const local = (state=defaultState,action) => {
  
  switch(action.type) {
      case LOCALLISTDATA:
        return {
          localList:JSON.parse(action.data.simpleFilterInfos)
        }
      default:
        return state
    }
}

export const hotel = (state=defaultState,action) => {
  switch(action.type) {
      case HOTELName:
        return {
          hotelId:action.data.hotelid,
          hotelName:action.data.hotelname
        }
      default:
        return state
    }
}

export const time = (state=defaultState,action) => {
  
  switch(action.type) {
      case TimeDATA:
        return {
          startTime:action.data.starttime,
          endTime:action.data.endtime
        }
      default:
        return state
    }
}