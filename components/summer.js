import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'  

import summer from '../images/summer.jpg'


class Summer extends Component {
  render() {
   
  	var style={
  		width:'100%',
  		height:'100%'
  	}

    return (
      <div>
         <img src={summer} style={style} />
      </div>
    )
  }
} 
 
export default Summer