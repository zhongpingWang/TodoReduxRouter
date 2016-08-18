import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router' 

import '../less/reset.less'
import '../less/app.less' 

class App extends Component {
  render() {
   
    return (
      <div>
          <div id="topBar">
            <ul className="navHeader">
                <li className="item"><Link to="/index" activeClassName="selected">首页</Link></li> 
                <li className="item"><Link to="/with" activeClassName="selected">随记</Link></li>
                <li className="item"><Link to="/done" activeClassName="selected">过往</Link></li>
                <li className="item"><Link to="/summer" activeClassName="selected">夏</Link></li>
                <li className="item"><Link to="/autumn" activeClassName="selected">秋</Link></li>
              </ul>
              <div className="logo"></div>
          </div>
          <div id="bodyContent">{this.props.children}</div>
      </div>
    )
  }
} 
 
export default App