import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

function LoadingOverlay(props) {
  return  (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{props.message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
