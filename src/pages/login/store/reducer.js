import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginStatus: false
})

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'login_submit':
      return state.set('loginStatus',true);
    case 'sign_out':
      return state.set('loginStatus', false)
    default:
      return state;
  }
}