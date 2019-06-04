import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'

const { pic, title } = HomeScreenPics[randomNo(1, HomeScreenPics.length)]

const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <Text h4 style={[styles.textColor, styles.name]}>
          {title}
        </Text>
        <Text style={[styles.textColor, styles.job]}>
          Fashion Designer at Amelia & Co.
        </Text>
        <Divider style={styles.divider} />
        <Text style={[styles.textColor, styles.job]}>
          I love to travel. I have a cat named pickles, if he likes you, I
          probably will too.
        </Text>
        <Divider style={styles.divider} />
        <Text style={[styles.textColor, styles.job]}>
          Find me on Social here
        </Text>
        <View style={styles.socialLinks}>
          <Social name="snapchat" />
          <Social name="instagram" />
          <Social name="facebook-square" />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
    // for android
    elevation: 5,
    // for ios
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  textColor: {
    color: '#5E5E5E',
  },
  name: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  job: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
    color: 'grey',
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfileScreen
