import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Messages } from '../constants/Messages'

class MessagesScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: user.pic }}
              title={user.title}
              subtitle={user.message}
              chevron
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default MessagesScreen
