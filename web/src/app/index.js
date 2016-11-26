/* @flow */

import About from 'src/pages/about';
import StoryList from 'src/pages/story-list';
import Legal from 'src/pages/legal';
import NotFound from 'src/pages/not-found';
import React from 'react';
import ReduxHistory from 'src/lib/redux-history';
import StoryDetail from 'src/pages/story-detail';
import StoryForm from 'src/pages/story-form';
import store from 'src/store';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router'
import { Provider } from 'react-redux'

const redirectToHome = () => <Redirect to="/" />;

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ReduxHistory />

          <Match exactly pattern="/" component={StoryList} />
          <Match pattern="/about" component={About} />
          <Match pattern="/newest" component={StoryList} />
          <Match exactly pattern="/stories" render={redirectToHome} />
          <Match pattern="/stories/new" component={StoryForm} />
          <Match pattern="/stories/:id(\d+)" component={StoryDetail} />
          <Match pattern="/terms" component={Legal} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
