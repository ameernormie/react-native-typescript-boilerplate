import React from 'react';
import { View, Text } from 'react-native';

function Dashboard(props: {}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

Dashboard.navigationOptions = ({ navigation }) => ({
  title: 'Boilerplate',
});

export default Dashboard;
