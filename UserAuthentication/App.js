import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR} from './constants/styles';
import LoginUI from './Screens/LoginScreen';
import Button from './UI/Button';

import FlatButton from './UI/FlatButton';
import LoadingOverlay from './UI/LoadingOverlay';
import IconButton from './UI/IconButton';
import AuthForm from './Auth/AuthForm';
import AuthContent from './Auth/AuthContent';

import SignUpScreen from './Screens/SignUpScreen';
import LoginScreen from './Screens/LoginScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import { color } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: COLOR.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: COLOR.primary100},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return(
      <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor: COLOR.primary500},
        headerTintColor:'white',
        contentStyle:{backgroundColor: color.primary100}
      }}
      >
        <Stack.Screen name='"Welcome' component={WelcomeScreen}/>
      </Stack.Navigator>
  )
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
function App() {
  return (
    <Navigation />
    // <View style={styles.rootContainer}>
    //   <AuthContent islogin={false}/>
    // </View>
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
