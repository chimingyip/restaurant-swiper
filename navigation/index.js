import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen.js';
import DrawerNavigator from './DrawerNavigator';

export default function Navigation() {
    return(
        <NavigationContainer>
            {/* linking={LinkingConfiguration} */}
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Root" component={DrawerNavigator} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}} />
        </Stack.Navigator>
      );
}