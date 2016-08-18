import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'  

const requireContext = require.context("../images/autumn", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);

class AutumnMsg extends Component {
  render() {

   	var index=this.props.params.id;

    return (
      <div>
         <img src={images[index]} />
      </div>
    )
  }
} 
 
export default AutumnMsg