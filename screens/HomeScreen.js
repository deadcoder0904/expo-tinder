import React from 'react'
import { SafeAreaView } from 'react-native'
import Swiper from 'react-native-realistic-deck-swiper'

import { Card } from '../components/Card'
import Pics from '../constants/Pics'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Swiper
          cardsData={Pics}
          renderCard={Card}
          offsetAngleMin={-2}
          offsetAngleMax={2}
        />
      </SafeAreaView>
    )
  }
}

export default HomeScreen
