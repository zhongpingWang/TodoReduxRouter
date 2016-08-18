import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'  

import '../less/with.less'


class WithList extends Component { 

  render() { 

    return (
      <ul className="articleList">
 
        {this.props.ArticleList.map((todo, index) =>
            <li className="item"  key={index}  onClick={() => this.props.delOne(index)} >{todo.text}</li>
        )}
      
      </ul>
    )
  }
} 
 
export default WithList