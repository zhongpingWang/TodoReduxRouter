import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'   
 import '../less/autumn.less'

class Autumn extends Component {

  slideBar(){

    var result=[];
	for(var i=0;i<10;i++){
		result.push(<li key={i} className="item"><Link to={'/autumn/msg/'+i}   activeClassName="selected">图片{i}</Link></li> );
 	}
  	 	 
  	 return (
  	 	<ul className="navHeaderAutumn">
  	 		{result}
  	 		<li className="item">路由实现3</li>
        </ul>
  	 )
  }


  render() { 
 
    return (
      <div>
         {this.slideBar()}
         <div className="imgSingle">
			{this.props.children}
         </div>
         
      </div>
    )
  }
} 
 
export default Autumn