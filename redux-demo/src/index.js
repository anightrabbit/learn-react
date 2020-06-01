import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { getReadableStories } from './redux/selectors';
import { doArchiveStory } from './redux/actions';


const render = () =>
ReactDOM.render(
  <React.StrictMode>
    <App
      stories={getReadableStories(store.getState())}
      onArchive={(id) => store.dispatch(doArchiveStory(id))}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
