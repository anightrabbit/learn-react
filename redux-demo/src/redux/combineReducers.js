import { combineReducers } from 'redux';
import { storyReducer, archiveReducer } from './reducers';

export const rootReducer = combineReducers({
	storyState: storyReducer,
	archiveState: archiveReducer,
});