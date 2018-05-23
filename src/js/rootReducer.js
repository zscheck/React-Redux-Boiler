// Combine all instances of reducers
import { combineReducers } from 'redux';

// Import reducers
import mainReducer from './reducers/mainReducer'; 

const rootReducer = combineReducers({
    main: mainReducer
})

export default rootReducer;