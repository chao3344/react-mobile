import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import {sagas} from './saga'
import Immutable from 'immutable'


const sagaMiddleware = createSagaMiddleware()

const initialState = Immutable.Map({})


const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store