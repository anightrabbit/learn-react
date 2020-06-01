import { STORY_ARCHIVE } from './constants';

export const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});

