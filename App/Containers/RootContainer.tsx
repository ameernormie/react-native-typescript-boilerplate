import React, { useEffect } from 'react';
import { AppState, AppStateStatus, View, StatusBar } from 'react-native';
import ReduxNavigation from 'Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from 'Reducers/StartupRedux';
import AppActions from 'Reducers/AppRedux';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

// Styles
import styles from './Styles/RootContainerStyles';

interface IRootContainerProps {
  startup: () => void;
  changeConnection: (isConnected: boolean) => void;
  setAppState: (appState: AppStateStatus) => void;
}

function RootContainer(props: IRootContainerProps) {
  useEffect(() => {
    props.startup();

    /** Listen to the connection change and update it in App redux */
    const unsubscribeNetInfo = NetInfo.addEventListener(
      (state: NetInfoState) => {
        props.changeConnection(state.isConnected);
      },
    );

    /** Listen to the state of app i.e. `active`, `inactive` */
    AppState.addEventListener('change', handleAppStateChange);

    /** Clean up all event listeners */
    return () => {
      unsubscribeNetInfo();
      AppState.removeEventListener('change', handleAppStateChange);
    };
  });

  /**
   * App state change callback - Called when state of the app changes
   *
   * @method handleAppStateChange
   *
   * @param {AppStateStatus} state
   *
   * @returns {void}
   */
  function handleAppStateChange(state: AppStateStatus) {
    props.setAppState(state);
  }

  return (
    <View style={styles.applicationView}>
      <StatusBar barStyle='light-content' />
      <ReduxNavigation />
    </View>
  );
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  changeConnection: (isConnected) =>
    dispatch(AppActions.changeConnection(isConnected)),
  setAppState: (appState: AppStateStatus) =>
    dispatch(AppActions.setAppState(appState)),
});

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer);
