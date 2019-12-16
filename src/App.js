import React from 'react';
import Index from './index/Index.jsx'
import Hotelindex from './index/hotel/hotel.jsx'
import Login from './index/user/login'

import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import '../src/assets/styles/reset.css'
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route
            path="/hotel"
            component={Hotelindex}
            /* render={()=>(
              <Hotelindex></Hotelindex>
            )} */
            
          ></Route>
          <Route
            path="/user"
            component={Login}
          ></Route>
          <Route
            path="*"
            component={Index}
          ></Route> 
        </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}


