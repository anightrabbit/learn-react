import { ReduceStore } from 'flux/utils';
import {
	LOAD_MEMBERLIST
} from './constants';
import AppDispatcher from './dispatcher';
// import { memberListActions } from './actions';

class MemberListStore extends ReduceStore {
  getInitialState() {
    return {
      loading: true,
      error: false,
      memberList: [],
    };
  }

  reduce (state, action) {
    switch (action.type) {
      case LOAD_MEMBERLIST.INIT:
        return {
          ...this.state,
          // error: false,
          // loading: true
          ...action.payload
        };

      case LOAD_MEMBERLIST.SUCCESS:
        return {
          ...this.state,
          // loading: false,
          // error: false,
          // memberList: action.payload.memberList,
          ...action.payload
        };

      case LOAD_MEMBERLIST.ERROR:
        return {
          ...this.state,
          // error: true,
          // loading: false,
          ...action.payload
        };

      default:
        return state;
    }
  }
}

export const memberListStore = new MemberListStore(AppDispatcher);

