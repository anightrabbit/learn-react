import {
	LOAD_MEMBERLIST,
	LOAD_TRAVELLERLIST
} from './constants';
import AppDispatcher from './dispatcher';
import {
	getFakeMembers
} from '../api/config';

const dispatchAction = ({type, payload}) => {
	console.log(type, payload);
	AppDispatcher.dispatch({type, payload});
}

export const fetchMemberListData = (count) => {
	dispatchAction({
		type: LOAD_MEMBERLIST.INIT,
		payload: {
			member: {
				loading: true,
				error: false,
				memberList: [],
			}
		},
	});
	getFakeMembers(count)
		.then(memberList => {
			dispatchAction({
				type: LOAD_MEMBERLIST.SUCCESS,
				payload: {
					member: {
						loading: false,
						error: false,
						memberList,
					}
				},
			});
		})
		.catch(error => {
			dispatchAction({
				type: LOAD_MEMBERLIST.ERROR,
				payload: {
					member: {
						loading: false,
						error: true,
						memberList: [],
					}
				},
			});
		})
};

export const fetchTravellerListData = (count) => {
	dispatchAction({
		type: LOAD_TRAVELLERLIST.INIT,
		payload: {
			traveller: {
				loading: true,
				error: false,
				travellerList: [],
			}
		},
	});
	getFakeMembers(count)
		.then(travellerList => {
			dispatchAction({
				type: LOAD_TRAVELLERLIST.SUCCESS,
				payload: {
					traveller:{
						loading: false,
						error: false,
						travellerList,
					}
				},
			});
		})
		.catch(error => {
			dispatchAction({
				type: LOAD_TRAVELLERLIST.ERROR,
				payload: {
					traveller: {
						loading: false,
						error: true,
						travellerList: [],
					}
				},
			});
		})
};
