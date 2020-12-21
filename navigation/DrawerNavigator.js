import { Ionicons, MaterialIcons, Entypo} from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from '../screens/HomeScreen';
import Friends from '../screens/FriendsScreen';
import Swipe from '../screens/SwipeScreen';
import { Pressable } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerTitle: false.valueOf,
          tabBarIcon: ({color}) => <Ionicons name="ios-home" color={color} size={25} style={{marginBottom: -3}} />,
          // headerLeft: () => (
          //   <Pressable onPress={() => navigation.openDrawer()}>
          //     <Entypo name="menu" size={24} color="black" />            
          //   </Pressable>
          // ),
        }}
      />

      <Drawer.Screen
        name="Friends"
        component={FriendsNavigator}
        options={{
          tabBarIcon: ({color}) => <MaterialIcons name="add-circle" color={color} size={25} style={{marginBottom: -3}} />,
        }}
      />
    </Drawer.Navigator>
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
          // headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Swipe"
        component={Swipe}
        options={{
          // headerShown: false,
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
          // headerShown: false,
        }}
      />
    </FriendsStack.Navigator>
  );
}


