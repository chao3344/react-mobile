import React from 'react';
import Index from './index/Index.jsx'
import { Provider } from 'react-redux'
import store from './store/index'
import '../src/assets/styles/reset.css'
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Index></Index>
      </Provider>
    )
  }
}


