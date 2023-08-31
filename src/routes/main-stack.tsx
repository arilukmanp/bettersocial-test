import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';
import MainTabNavigator from './main-tab';
import PostDetail from 'src/pages/post-detail';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: true,
        fullScreenGestureEnabled: true,
        animation: 'slide_from_right',
      }}>
      <MainStack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen name="PostDetail" component={PostDetail} />
    </MainStack.Navigator>
  );
}
