import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar  />
    </SafeAreaProvider>
  );
}