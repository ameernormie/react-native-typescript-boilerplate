import ReduxPersist from 'Config/ReduxPersist';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';
import { init } from 'Containers/App';
import noop from 'lodash/noop';
import DebugConfig from 'Config/DebugConfig';
import { Store } from 'redux';

const updateReducers = (store: Store) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  // Check to ensure latest reducer version
  const _init = () => init(store);

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion,
            },
            preview: 'Reducer Version Change Detected',
            important: true,
          });
        }
        // Purge store
        persistStore(store, null, _init)
          .purge()
          .then(noop)
          .catch(noop);
        AsyncStorage.setItem('reducerVersion', reducerVersion)
          .then(noop)
          .catch(noop);
      } else {
        persistStore(store, null, _init);
      }
    })
    .catch(() => {
      persistStore(store, null, _init);
      AsyncStorage.setItem('reducerVersion', reducerVersion)
        .then(noop)
        .catch(noop);
    });
};
export default { updateReducers };
