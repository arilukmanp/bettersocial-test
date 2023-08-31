import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'src/constants/colors';
import {Props} from '.';

export default function Footer({data}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperLeftActions}>
        <TouchableOpacity activeOpacity={0.75}>
          <Image
            source={require('src/assets/icons/share.png')}
            resizeMode="contain"
            style={styles.defaultIconSize}
          />
        </TouchableOpacity>
        <View style={styles.wrapperComment}>
          <TouchableOpacity activeOpacity={0.75}>
            <Image
              source={require('src/assets/icons/comment.png')}
              resizeMode="contain"
              style={styles.biggerIconSize}
            />
          </TouchableOpacity>
          <Text style={{color: Colors.silverSand}}>
            {data.content.comments}
          </Text>
        </View>
      </View>

      <View style={styles.wrapperRightActions}>
        <TouchableOpacity activeOpacity={0.75}>
          <Image
            source={require('src/assets/icons/block.png')}
            resizeMode="contain"
            style={styles.defaultIconSize}
          />
        </TouchableOpacity>
        <View style={styles.wrapperUpvote}>
          <TouchableOpacity activeOpacity={0.75}>
            <Image
              source={require('src/assets/icons/arrow-down.png')}
              resizeMode="contain"
              style={styles.defaultIconSize}
            />
          </TouchableOpacity>
          <Text style={{color: Colors.teal}}>{data.content.likes}</Text>
          <TouchableOpacity activeOpacity={0.75}>
            <Image
              source={require('src/assets/icons/arrow-up.png')}
              resizeMode="contain"
              style={styles.defaultIconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  wrapperLeftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 23,
  },
  defaultIconSize: {width: 22, height: 22},
  biggerIconSize: {width: 25, height: 25},
  wrapperComment: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  wrapperRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 18,
  },
  wrapperUpvote: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
