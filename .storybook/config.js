import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/editor');
  // require as many stories as you need.
}

configure(loadStories, module);
