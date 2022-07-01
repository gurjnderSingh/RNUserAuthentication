import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthContent from '../Auth/AuthContent';
// choose Authenticate on Firbase for login/singup with email password
//https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
function LoginScreen() {
  return <AuthContent isLogin />;
}
export default LoginScreen;
