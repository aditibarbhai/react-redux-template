import { combineReducers } from 'redux';

const helloWorldReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  helloWorld: helloWorldReducer
});
