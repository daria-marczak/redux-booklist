// State argument is not application's state, only
// the state this reducers is responsible for 
export default function(state = null, action) {
  // All reducers have two arguments of current state and action
  // They are called when an action occurs
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload
  }
  return state;
}