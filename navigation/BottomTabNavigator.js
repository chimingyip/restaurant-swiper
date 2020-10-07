import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from '../screens/HomeScreen';
import Friends from '../screens/FriendsScreen';
import Swipe from '../screens/SwipeScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Ionicons name="ios-home" color={color} size={25} style={{marginBottom: -3}} />,
        }}
      />

      <BottomTab.Screen
        name="Friends"
        component={FriendsNavigator}
        options={{
          tabBarIcon: ({color}) => <MaterialIcons name="add-circle" color={color} size={25} style={{marginBottom: -3}} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Stack Navigators

const HomeStack = createStackNavigator();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animationEnabled: false
        }}
      />
      <HomeStack.Screen
        name="Swipe"
        component={Swipe}
        options={{
          headerShown: false,
          animationEnabled: false
        }}
      />
    </HomeStack.Navigator>
  );
}

const FriendsStack = createStackNavigator();
function FriendsNavigator() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="Friends"
        component={Friends}
        options={{
          headerShown: false,
          animationEnabled: false
        }}
      />
    </FriendsStack.Navigator>
  );
}


