import { STORY_ARCHIVE } from './constants';

const STORY_INITIAL_STATE = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export const storyReducer = (state = STORY_INITIAL_STATE, action) => {
  switch(action.type) {
    default : return state;
  }
};

const ARCHIVE_INITIAL_STATE = [];

const applyArchiveStory = (state, action) => [...state, action.id];

export const archiveReducer = (state = ARCHIVE_INITIAL_STATE, action) => {
  switch(action.type) {
  	case STORY_ARCHIVE : {
      return applyArchiveStory(state, action);
    }
    default : return state;
  }
};
