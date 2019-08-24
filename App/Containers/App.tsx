import 'Config';
import DebugConfig from 'Config/DebugConfig';
import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from 'Containers/RootContainer';
import createStore from 'Reducers';
import StartupActions from 'Reducers/Startup';

// create our store
const store = createStore();

/**
 * Note: This function should be called after redux-persist rehydration is complete
 *
 * See Services/Rehydration
 *
 * @method init
 *
 * @param {Store} store
 */
export const init = (store) => {
  store.dispatch(StartupActions.startup());
};

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = (props) => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
