import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLOR} from '../constants/styles';
function Button({children, onPress}) {
  return  (
    <Pressable onPress={onPress} style={({pressed})=> [styles.button, pressed && styles.opacity]}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}
export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: COLOR.primary500,
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  opacity: {
      opacity: 0.3
  }
});
