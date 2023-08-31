import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'src/constants/colors';

interface Props {
  onPress: () => void;
}

export default function FAB({onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={styles.container}>
      <Image
        source={require('src/assets/icons/pencil.png')}
        resizeMode="contain"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 62,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.teal,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: {
    width: 23,
    height: 23,
  },
});
