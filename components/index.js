import React, { Component, PropTypes } from 'react'
import {  Link } from 'react-router'  
import { connect } from 'react-redux'
import '../less/index.less'

  let img1=require('../images/c1.jpg'),
      img2=require('../images/c2.jpg'),
      img3=require('../images/c3.jpg'),
      img4=require('../images/c4.jpg'),
      img5=require('../images/c5.jpg'); 

var timer;

class Index extends Component { 

  constructor(props){

     super(props);

     this.state={
         step:0,
         mLeft:0
     }

     this.starPlay();

  }

  //轮播
  starPlay(){

    var that=this;

    timer = setInterval(function(){ 

       var step=that.state.step;

       if (step>=5) {
          step=0;
       }

       var mLeft=-step*1000;

       that.setState({mLeft:mLeft,step:step+1}); 

    },2000);

  }

  componentWillUnmount(){
      clearInterval(timer);
  }

  render() { 
   	  
  	const { dispatch,count} = this.props
     
    var style={
      marginLeft:this.state.mLeft
    }

    return (
      <div> 
          <div className="slideBox" >
            <ul className="slideImg" style={style}>
                <li className="item"><img src={img1}/></li>
                <li className="item"><img src={img2}/></li>
                <li className="item"><img src={img3}/></li>
                <li className="item"><img src={img4}/></li>
                <li className="item"><img src={img5}/></li> 
                <li className="item"><img src={img1}/></li>
            </ul>
          </div>
         
          <div className="slideBox">redux 操作了state 但是我们依然可以操作state</div>
         
      </div>
    )
  }
} 
 // <button onClick={() =>dispatch({type:'add'})}>加一</button>
          // <div>{count}</div>


function getData(state) {   
   	return state.count;
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	 
  return {
    count: getData(state)
   
  }
}
 

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
//export default connect(select)(Index)

export default Index
 

 //onClick={() =>dispatch(addOne())}