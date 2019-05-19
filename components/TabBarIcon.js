import React from 'react'
import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    const { Icon, name, focused } = this.props
    return (
      <Icon
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}
