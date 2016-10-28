/* @flow */

import About from 'src/pages/about';
import Home from 'src/pages/home';
import New from 'src/pages/new';
import NotFound from 'src/pages/not-found';
import Popular from 'src/pages/popular';
import React from 'react';
import ReduxHistory from 'src/lib/redux-history';
import StoryDetail from 'src/pages/story-detail';
import StoryForm from 'src/pages/story-form';
import store from 'src/store';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ReduxHistory />

          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/new" component={New} />
          <Match pattern="/popular" component={Popular} />
          <Match exactly pattern="/stories" render={() => <Redirect to="/" />} />
          <Match pattern="/stories/:id" component={StoryDetail} />
          <Match pattern="/stories/new" component={StoryForm} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
