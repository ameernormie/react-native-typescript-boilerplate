import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import SecondScreen from '../Containers/SecondScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    SecondScreen: { screen: SecondScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
