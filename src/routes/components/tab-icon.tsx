import React from 'react';
import {Image} from 'react-native';
import {Colors} from 'src/constants/colors';

export const feedIcon = () => {
  const size = 34;
  return (
    <Image
      source={require('src/assets/icons/tab-menu/feed.png')}
      resizeMode="contain"
      style={{width: size, height: size}}
    />
  );
};

export const chatIcon = () => {
  const size = 34;
  return (
    <Image
      source={require('src/assets/icons/tab-menu/chat.png')}
      resizeMode="contain"
      style={{width: size, height: size}}
    />
  );
};

export const newsIcon = () => {
  const size = 34;
  return (
    <Image
      source={require('src/assets/icons/tab-menu/news.png')}
      resizeMode="contain"
      style={{width: size, height: size}}
    />
  );
};

export const profileIcon = () => {
  const size = 22;
  return (
    <Image
      source={{
        uri: 'https://img.freepik.com/free-photo/woman-working-table_1098-19392.jpg',
      }}
      resizeMode="cover"
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: Colors.aliceBlue,
      }}
    />
  );
};
