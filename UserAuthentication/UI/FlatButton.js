import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLOR} from '../constants/styles';
function FlatButton({children, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.opacity]}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}
export default FlatButton;
const styles = StyleSheet.create({
  button: {
    // backgroundColor:'red',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: COLOR.primary100,
  },
  opacity: {
    opacity: 0.3,
  },
});
