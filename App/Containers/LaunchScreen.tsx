import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

const LaunchScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('SecondScreen')}
        >
          <Text> Press me</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Image source={Images.ready} />
          <Text style={styles.sectionText}>
            This probably isn't what your app is going to look like. Unless your
            designer handed you this screen and, in that case, congrats! You're
            ready to ship. For everyone else, this is where you'll see a live
            preview of your fully functioning app using Ignite.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LaunchScreen;
