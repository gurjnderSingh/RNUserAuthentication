import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Buttton from '../UI/Button';
import Input from './Input';

function AuthForm({islogin, submit, credentialsInvalid}) {
    const [enteredEmail, setenteredEmail] = useState('')
    const [enteredConfirmEmail, setenteredConfirmEmail] = useState('')
    const [enteredPassword, setenteredPassword] = useState('')
    const [enteredConfirmPassword, setenteredConfirmPassword] = useState('')
    
    // const {
    //     email: emailIsInvalid,
    //     confirmEmail: emailsDontMatch,
    //     password: passwordIsInvalid,
    //     confirmPassword: passwordsDontMatch,
    //   } = credentialsInvalid;

    function updateInputValuesHandler(inputType, enteredValue) {
        switch(inputType) {
            case 'email':
                setenteredEmail(enteredValue);
                break;
            case 'confirmEmail':
                setenteredConfirmEmail(enteredValue);
                break;
            case 'password':
                setenteredPassword(enteredValue);
                break;
            case 'confrimPassword':
                setenteredConfirmPassword(enteredValue);
                break;
        }
    }

    const onSubmitHandler = ()=>{
        onsubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        })
    }

    return(
        <View>
            <View>
                <Input
                label="Enter Email"
                keyboardType="email-address"
                // isInvalid={emailIsInvalid}
                value={enteredEmail}
                onUpdateValue={updateInputValuesHandler(this,'email')}
                />
                { !islogin && (
                    <Input
                    label="Confirm Email Address"
                    keyboardType="email-address"
                    // isInvalid={emailsDontMatch}
                    value={enteredConfirmEmail}
                    onUpdateValue={updateInputValuesHandler(this, 'confirmEmail')}
                    />
                )}
                <Input
                label="Enter Password"
                // isInvalid={passwordIsInvalid}
                secure={true}
                value={enteredPassword}
                onUpdateValue={updateInputValuesHandler(this, 'password')}
                />
                { !islogin && (
                    <Input
                    label="Confirm Password"
                    onUpdateValue={updateInputValuesHandler(this, 'confirmPassword')}    
                    secure
                    value={enteredConfirmPassword}  
                    // isInvalid={passwordsDontMatch}
                    />
                )}
                <View style={styles.buttons}>
                    <Buttton onPress={onSubmitHandler}>
                        {islogin ? 'Log In' : 'Sign Up'}
                    </Buttton>
                </View>
            </View>
        </View>
    )
}
export default AuthForm;
const styles = StyleSheet.create({
    buttons: {marginTop: 12}
});