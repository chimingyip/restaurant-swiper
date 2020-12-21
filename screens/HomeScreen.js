import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Pressable
            onPress={() => {
              navigation.navigate('Swipe')
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              }
            ]}>
            {() => (
              <Text style={styles.text}>
                Go to swipe screen
              </Text>
            )}
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: 'rgba(249,249,249,1)',
      paddingHorizontal: 34,
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6
    },
    text: {
      fontSize: 16
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
    },
});