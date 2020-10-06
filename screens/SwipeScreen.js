import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SwipeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Text>Swiping</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: 'rgba(249,249,249,1)',
      paddingHorizontal: 34,
    }
});