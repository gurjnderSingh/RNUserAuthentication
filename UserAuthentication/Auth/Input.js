import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLOR} from '../constants/styles';

function Input({label, keyboardType, secure, onUpdateValue, value, isInvalid}) {
  return  (
    <View style={styles.inputContainer}>
      <Text style={[styles.label && isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input && isInvalid && styles.inputInvalid]}
        autoCapitalize={true}
        autoCapitalize="none"
        secureTextEntry={secure}
        keyboardType={keyboardType}
        value={value}
        onChange={onUpdateValue}
      />
    </View>
  );;
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: COLOR.error500,
  },
  input: {
    backgroundColor: COLOR.primary100,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  inputInvalid: {
    backgroundColor: COLOR.error100,
  },
});
