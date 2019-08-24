import { takeLatest, all } from 'redux-saga/effects';
import Api from 'Services/Api';

/* ------------- Types ------------- */

import { StartupTypes } from 'Reducers/Startup';

/* ------------- Sagas ------------- */

import { startup } from 'Sagas/StartupSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, Api),
  ]);
}
