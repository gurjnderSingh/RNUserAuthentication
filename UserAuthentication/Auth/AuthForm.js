import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Buttton from '../UI/Button';
import Input from './Input';

function AuthForm({isLogin, onSubmit, credentialsInvalid}) {
  const [enteredEmail, setenteredEmail] = useState('');
  const [enteredConfirmEmail, setenteredConfirmEmail] = useState('');
  const [enteredPassword, setenteredPassword] = useState('');
  const [enteredConfirmPassword, setenteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValuesHandler(inputType, enteredValue) {
    console.log('setting it');
    switch (inputType) {
      case 'email':
        setenteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setenteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setenteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setenteredConfirmPassword(enteredValue);
        break;
    }
  }

  const onSubmitHandler = () => {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };

  return (
    <View>
      <View>
        <Input
          label="Enter Email"
          keyboardType="email-address"
          // isInvalid={emailIsInvalid}
          value={enteredEmail}
          onUpdateValue={value => updateInputValuesHandler('email', value)}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            keyboardType="email-address"
            // isInvalid={emailsDontMatch}
            value={enteredConfirmEmail}
            onUpdateValue={value =>
              updateInputValuesHandler('confirmEmail', value)
            }
          />
        )}
        <Input
          label="Enter Password"
          // isInvalid={passwordIsInvalid}
          secure={true}
          value={enteredPassword}
          onUpdateValue={value => updateInputValuesHandler('password', value)}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={value =>
              updateInputValuesHandler('confirmPassword', value)
            }
            secure={true}
            value={enteredConfirmPassword}
            // isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Buttton onPress={onSubmitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Buttton>
        </View>
      </View>
    </View>
  );
}
export default AuthForm;
const styles = StyleSheet.create({
  buttons: {marginTop: 12},
});
