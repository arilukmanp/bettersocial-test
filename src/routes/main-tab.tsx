import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from 'src/pages/feed';
import ChatScreen from 'src/pages/chat';
import ProfileScreen from 'src/pages/profile';
import {MainTabParamList} from './types';
import NewsScreen from 'src/pages/news';
import {chatIcon, feedIcon, newsIcon, profileIcon} from './components/tab-icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const inset = useSafeAreaInsets();
  const tabBarHeight = 48 + inset.bottom;

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {height: tabBarHeight},
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{headerShown: false, tabBarIcon: feedIcon}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{tabBarIcon: chatIcon}}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{tabBarIcon: newsIcon}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: profileIcon}}
      />
    </Tab.Navigator>
  );
}
