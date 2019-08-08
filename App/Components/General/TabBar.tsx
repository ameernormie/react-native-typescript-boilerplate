import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Colors } from 'Themes';
import Icon from 'Themes/Icon';
import { NavigationState, NavigationScreenProp } from 'react-navigation';

const styles = StyleSheet.create({
  tabView: {
    height: DeviceInfo.hasNotch() ? 66 : 56,
    flexDirection: 'row',
    backgroundColor: Colors.tabViewBg,
    borderWidth: 0.5,
    paddingTop: 7,
    borderColor: Colors.tabViewBorder,
  },
  label: {
    fontSize: 10,
    letterSpacing: 0.16,
    color: Colors.text,
    alignSelf: 'center',
    marginTop: 7,
  },
});

interface ITabBarProps {
  navigation: NavigationScreenProp<NavigationState>;
}

function TabBar(props: ITabBarProps) {
  const { navigation } = props;
  const { routes, index } = navigation.state;

  return (
    <View style={styles.tabView}>
      {routes.map((route, i) => (
        <TabItem
          navigation={navigation}
          key={route.routeName}
          {...route}
          isActive={index === i}
        />
      ))}
    </View>
  );
}

function TabItem(props) {
  const { isActive, params } = props;

  /**
   * Navigates to the selected tab
   *
   * @method handlePress
   *
   * @returns {void}
   */
  function handlePress() {
    props.navigation.navigate(props.routeName);
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Icon
          name={params.iconName}
          size={16}
          color={isActive ? Colors.green : Colors.text}
        />
        <Text
          style={[
            styles.label,
            { color: isActive ? Colors.green : Colors.text },
          ]}
        >
          {params.label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TabBar;
