import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import REDUX_PERSIST from '../Config/ReduxPersist';
import { persistReducer } from 'redux-persist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
});

export default () => {
  let finalReducers = reducers;
  if (REDUX_PERSIST.active) {
    const persistConfig = REDUX_PERSIST.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  /* tslint:disable:prefer-const */
  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga,
  );
  /* tslint:enable:prefer-const */

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('.').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return store;
};
