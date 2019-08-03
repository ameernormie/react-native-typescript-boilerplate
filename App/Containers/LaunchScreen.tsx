import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images } from 'Themes';

// Styles
import styles from 'Containers/Styles/LaunchScreenStyles';

const LaunchScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={[styles.centered, { marginBottom: 100 }]}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('SecondScreen')}
          style={styles.button}
        >
          <Text>Navigate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TabNav')}
          style={styles.button}
        >
          <Text>Tab Navigation</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LaunchScreen;
