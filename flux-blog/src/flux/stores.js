import { ReduceStore } from 'flux/utils';
import {
	LOAD_MEMBERLIST, LOAD_TRAVELLERLIST
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

class TravellerListStore extends ReduceStore {
  getInitialState() {
    return {
      loading: true,
      error: false,
      travellerList: [],
    };
  }

  reduce (state, action) {
    switch (action.type) {
      case LOAD_TRAVELLERLIST.INIT:
        return {
          ...this.state,
          ...action.payload
        };

      case LOAD_TRAVELLERLIST.SUCCESS:
        return {
          ...this.state,
          ...action.payload
        };

      case LOAD_TRAVELLERLIST.ERROR:
        return {
          ...this.state,
          ...action.payload
        };

      default:
        return state;
    }
  }
}

export const travellerListStore = new TravellerListStore(AppDispatcher);

