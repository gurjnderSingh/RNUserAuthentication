import React from 'react';
import {View,Text} from 'react-native';
import AuthContent from '../Auth/AuthContent';

function SignUpScreen() {
    return(
         <AuthContent isLogin={false} />
    )
}

export default SignUpScreen;