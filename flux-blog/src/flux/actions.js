import {
	LOAD_MEMBERLIST
} from './constants';
import AppDispatcher from './dispatcher';
import {
	getFakeMembers
} from '../api/config';

export const memberListActions = {
	fetchData(count) {
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
	}
};