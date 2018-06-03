import {actionTypes} from './actions'

export const initialState = {
  meta: {},
  address: '',
  location: {},
  error: null
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_META:
      return {...state, meta: action.data};

    case actionTypes.SET_ADDRESS:
      return {...state, address: action.data};

    case actionTypes.SET_LOCATION:
      return {...state, location: action.data};

    case actionTypes.SET_ERROR:
      return {...state, error: action.data};

    default:
      return state
  }
};

export default reduser;