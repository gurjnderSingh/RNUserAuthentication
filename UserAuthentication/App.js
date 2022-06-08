import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR} from './constants/styles';
import LoginUI from './Screens/Login';
import Button from './UI/Button';
import WelcomeScreen from './Screens/WelcomeScreen';
import FlatButton from './UI/FlatButton';
import LoadingOverlay from './UI/LoadingOverlay';
import IconButton from './UI/IconButton';

function App() {
  return (
    <View style={styles.rootContainer}>
      {/* <Text>Hello</Text> */}
      <Button
        onPress={() => {
          console.log('Do Something');
        }}>
        This is button
      </Button>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.primary100,
  },
});
