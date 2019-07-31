import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import {
  IAppReduxActionTypes,
  IAppReduxActionCreators,
  IAppReduxState,
} from 'Constants/Types';

const {
  Types,
  Creators,
}: {
  Types: IAppReduxActionTypes;
  Creators: IAppReduxActionCreators;
} = createActions({
  changeConnection: ['isConnected'],
  setAppState: ['appState'],
});

export const AppTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<IAppReduxState> = Immutable({
  isConnected: true,
  appState: '',
});

export const changeConnection = (
  state: ImmutableObject<IAppReduxState>,
  { isConnected },
): ImmutableObject<IAppReduxState> => state.merge({ isConnected });

export const setAppState = (
  state: ImmutableObject<IAppReduxState>,
  { appState },
): ImmutableObject<IAppReduxState> => state.merge({ appState });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_CONNECTION]: changeConnection,
  [Types.SET_APP_STATE]: setAppState,
});

/** Selectors */
export const connected = (state) => state.app.isConnected;
