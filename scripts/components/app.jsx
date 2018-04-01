import { hot } from 'react-hot-loader';
import React from 'react';
import Body from './Body';
import Banner from './Banner';

const App = () => (
  <React.Fragment>
    <Banner />
    <Body />
  </React.Fragment>
);

const HotRootComponent = hot(module)(App);
export default HotRootComponent;
