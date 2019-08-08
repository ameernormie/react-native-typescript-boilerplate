import React from 'react';
import {
  Header,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import LaunchScreen from 'Containers/LaunchScreen';
import SecondScreen from 'Containers/SecondScreen';
import Dashboard from 'Containers/Dashboard';

import TabBar from 'Components/General/TabBar';

import styles from 'Navigation/Styles/NavigationStyles';
import { Fonts, Colors } from 'Themes';

const headerDefaultConfig = {
  header: (props) => <Header {...props} />,
  headerStyle: {
    backgroundColor: Colors.headerBg,
    marginTop: 10,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    left: 0,
    right: 0,
    position: 'relative',
  },
  headerTitleStyle: {
    fontWeight: undefined, // React Navigation bug https://github.com/react-navigation/react-navigation/issues/542
    color: Colors.black,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: 17,
    lineHeight: 22,
  },
  /** Default header left for stacks */
  // headerLeft: (navigation) => {
  //   /** If it's the first screen of the stack, don't show the back button */
  //   if (navigation.scene.index === 0) return null;
  //   return (
  //     <TouchableOpacity
  //       onPress={navigation.onPress}
  //       style={styles.backButtonContainer}
  //     >
  //       <Icon name='arrow-left' color={Colors.button} size={20} />
  //       <Text style={styles.backText}>Back</Text>
  //     </TouchableOpacity>
  //   );
  // },
  headerTintColor: Colors.transparent,
  gesturesEnabled: false,
};

const HomeNav = createStackNavigator(
  {
    Dashboard: { screen: Dashboard },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: { ...headerDefaultConfig },
  },
);

const BottomTabApp = createBottomTabNavigator(
  {
    HomeNav: {
      screen: HomeNav,
      params: {
        label: 'Dashboard',
        iconName: 'eye-open',
      },
    },
    CGMSNav: {
      screen: HomeNav,
      params: {
        label: 'Reports',
        iconName: 'eye-open',
      },
    },
    AppointmentNav: {
      screen: HomeNav,
      params: {
        label: 'Appointments',
        iconName: 'eye-open',
      },
    },
    ELearningNav: {
      screen: HomeNav,
      params: {
        label: 'E-Learning',
        iconName: 'eye-open',
      },
    },
    MoreNav: {
      screen: HomeNav,
      params: {
        label: 'More',
        iconName: 'eye-open',
      },
    },
  },
  {
    initialRouteName: 'HomeNav',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarComponent: ({ navigation }) => <TabBar navigation={navigation} />,
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    SecondScreen: { screen: SecondScreen },
    TabNav: { screen: BottomTabApp },
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
