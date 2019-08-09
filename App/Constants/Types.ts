import { AppStateStatus } from 'react-native';

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

/**
 * App form values interface
 */
export interface IAppFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Enum type for input field type
 */
export enum FieldType {
  text = 'text',
  password = 'password',
}
