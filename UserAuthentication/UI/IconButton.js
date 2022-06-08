import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {COLOR} from '../constants/styles';
function IconButton({children, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.opacity]}>
      <View>
        <Image source={require('../Icon/buttonI.png')} style={styles.image}/>
      </View>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    margin: 8,
    // backgroundColor:'red',
  },
  image: {
    height: 30,
    width: 30
  },
  opacity: {
    opacity: 0.3,
  },
});
