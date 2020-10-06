import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from '../screens/HomeScreen';
import Friends from '../screens/FriendsScreen';

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
        options={{headerTitle: 'Home'}}
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
        options={{headerTitle: 'Friends'}}
      />
    </FriendsStack.Navigator>
  );
}


