import {
	LOAD_MEMBERLIST, LOAD_TRAVELLERLIST
} from './constants';
import AppDispatcher from './dispatcher';
import {
	getFakeMembers
} from '../api/config';

export const Actions = {
	fetchMemberListData(count) {
		// AppDispatcher.dispatch({
		// 	type: LOAD_MEMBERLIST.INIT,
		// 	payload: {
		// 		loading: true,
		// 		error: false,
		// 		memberList: [],
		// 	},
		// });
		getFakeMembers(count)
			.then(memberList => {
				AppDispatcher.dispatch({
					type: LOAD_MEMBERLIST.SUCCESS,
					payload: {
						loading: false,
						error: false,
						memberList,
					},
				});
			})
			.catch(error => {
				AppDispatcher.dispatch({
					type: LOAD_MEMBERLIST.ERROR,
					payload: {
						loading: false,
						error: true,
						memberList: [],
					},
				});
			})
	},
	fetchTravellerListData(count) {
		// AppDispatcher.dispatch({
		// 	type: LOAD_TRAVELLERLIST.INIT,
		// 	payload: {
		// 		loading: true,
		// 		error: false,
		// 		travellerList: [],
		// 	},
		// });
		getFakeMembers(count)
			.then(travellerList => {
				AppDispatcher.dispatch({
					type: LOAD_TRAVELLERLIST.SUCCESS,
					payload: {
						loading: false,
						error: false,
						travellerList,
					},
				});
			})
			.catch(error => {
				AppDispatcher.dispatch({
					type: LOAD_TRAVELLERLIST.ERROR,
					payload: {
						loading: false,
						error: true,
						travellerList: [],
					},
				});
			})
	}
};