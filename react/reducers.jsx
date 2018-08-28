import { combineReducers } from 'redux';
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILURE } from './actions';

const home = (state = {}, action) => {
    console.log('action!!!', action);
    switch (action.type) {
    case REQUESTING: {
        return { ...state, isFetching: true };
    }
    case REQUEST_SUCCESS: {
        return { ...state, isFetching: false };
    }
    case REQUEST_FAILURE: {
        return { ...state, isFetching: false, error: action.error };
    }
    default:
        return state;
    }
};

export default combineReducers({
    home,
});
