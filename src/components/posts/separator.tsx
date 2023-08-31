import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'src/constants/colors';

export default function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {height: 5, backgroundColor: Colors.aliceBlue},
});
