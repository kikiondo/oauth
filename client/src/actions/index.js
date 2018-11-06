import axios from 'axios'
import { FETCH_USER } from './types'

const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res}) //Respuesta de axios res.data
    // fetch('/api/current_user')
    // .then(res => dispatch({ type: FETCH_USER, payload: res}))
  }

export {
  fetchUser
}