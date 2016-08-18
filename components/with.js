import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'  
import { connect } from 'react-redux'

import WithList from './withList.js'


import '../less/with.less'
import $ from 'jquery'

class With extends Component {


  addNew(){
     this.showDialog();
  }

  showDialog(){

      var that=this;

      const {dispatch}=this.props;

      $('body').append('<div class="addDialogMask"></div><div class="addDialog"> <input type="text" /> <button>添加</button>  </div>');
      
      $(".addDialogMask").click(function(){
          $(this).fadeOut();
          $(".addDialog").slideUp(function(){
              $(".addDialogMaskm,.addDialog").remove();
          });
      });

      $(".addDialog button").on("click",function(){ 
          var val=$(".addDialog input").val().trim(); 
          if (val) {
              //发布
             dispatch({type:"add",text:val});
             $(".addDialog input").val('');
          } 
      }); 
  }

  delOne(){
      const {dispatch}=this.props;
      dispatch({type:"del"});
  }

  render() {
  	 
    const { dispatch,ArticleList} = this.props; 

    return (
      <div>
          <div className="btnNewArticle" onClick={this.addNew.bind(this)}>New</div> 
          <WithList ArticleList={ArticleList}  delOne={ index=>dispatch({type:"del",index:index})  }  />
      </div>
    )
  }
} 
 


function getData(state) {   
   	return state.ArticleList;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	 
  return {
      ArticleList: getData(state) 
  }
}
 


export default connect(select)(With)

 