import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLOR} from '../constants/styles';

function Input({label, keyboardType, secure, onUpdateValue, value, isInvalid}) {
  return  (
    <View style={styles.inputContainer}>
      <Text style={[styles.label && isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      {console.log('ddddd',value)}
      <TextInput
        // style={[styles.input && isInvalid && styles.inputInvalid]}
        style={styles.input}
        autoCapitalize={true}
        autoCapitalize="none"
        secureTextEntry={secure}
        keyboardType={keyboardType}
        value={value}
        onChange={ (value) => onUpdateValue(value)}
      />
    </View>
  );;
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    borderWidth: 1,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: COLOR.error500,
    color: 'white'
  },
  input: {
    backgroundColor: COLOR.primary100,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
    // borderWidth:1,
    // borderColor:'red',

  },
  inputInvalid: {
    backgroundColor: COLOR.error100,
  },
});