import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'  
import { Router, Route, browserHistory,Link,IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import App from './components/app'
import Index from './components/index'
import With from './components/with'
import Done from './components/done'
import Summer from './components/summer'
import Autumn from './components/autumn'
import AutumnMsg from './components/autumnMsg' 


import * as reducers from './reducers/index'   
 
const store = createStore(
  combineReducers({    
    todos:reducers.todo.todos,
    visibilityFilter:reducers.todo.visibilityFilter,
    count:reducers.count,
    ArticleList:reducers.articles,
    routing: routerReducer
  })
) 

 

class NoMatch extends Component {
  render() {
    return (  <div>404</div> )
  }
}


const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}> 
    <Router history={history}> 
      <Route path="/" component={App}>
      <IndexRoute component={Index}/>
        <Route path="index" component={Index}/>
        <Route path="with" component={With}/>
        <Route path="done" component={Done}/>
        <Route path="summer" component={Summer}/>
        <Route path="autumn" component={Autumn}>
          <Route name="autumnRouter" path="msg/:id" component={AutumnMsg} />
        </Route> 
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
) 

 // <Redirect from="messages/:id" to="/messages/:id" />