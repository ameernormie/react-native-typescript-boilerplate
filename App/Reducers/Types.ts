import { AppStateStatus } from 'react-native';

/******************************* APP REDUX TYPES ************************************/

/**
 * AppRedux state interface
 */
export interface IAppReduxState {
  isConnected: boolean;
  appState: string;
}

/**
 * AppRedux Action Types interface
 */
export interface IAppReduxActionTypes {
  CHANGE_CONNECTION: string;
  SET_APP_STATE: string;
}

/**
 * AppRedux Action creators interface
 */
export interface IAppReduxActionCreators {
  changeConnection: (isConnected: boolean) => void;
  setAppState: (appState: AppStateStatus) => void;
}

/******************************* STARTUP TYPES ************************************/

/**
 * Startup Action Types interface
 */
export interface IStartupActionTypes {
  STARTUP: string;
}

/**
 * Startup Action creators interface
 */
export interface IStartupActionCreators {
  startup: () => void;
}
