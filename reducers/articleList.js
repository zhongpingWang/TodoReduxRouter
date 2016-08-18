 

function articles(state = [], action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text         
        }
      ]
    case "del":
      return [ 
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

 
export default articles