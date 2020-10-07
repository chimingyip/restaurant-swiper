import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import shuffleArray from '../helpers/shuffleArray'

export const HomeScreenPics = shuffleArray([
  {
    pic: require('../assets/test/1.jpg'),
    title: 'Amelia, 27',
    caption: '16 miles away',
  },
  {
    pic: require('../assets/test/2.jpg'),
    title: 'Joanna, 19',
    caption: '2 miles away',
  },
  {
    pic: require('../assets/test/3.jpg'),
    title: 'Charlie, 32',
    caption: '24 miles away',
  },
]);

class SwipeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default SwipeScreen