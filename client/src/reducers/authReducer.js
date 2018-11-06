import {FETCH_USER} from '../actions/types'

// Actions
export default function(state = null, action) { //Estado por default null
  console.log(action)
  switch (action.type) {

    case FETCH_USER:
      return action.payload || false
    default:
      return state
   }
} 