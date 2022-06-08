import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function WelcomeScreen() {
  return  (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully</Text>
    </View>
  );;
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
});
