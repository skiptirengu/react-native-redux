import React from 'react'
import PropTypes from 'prop-types'
import { Body, Left, ListItem, Right, Text, Thumbnail } from 'native-base'

class UserListItem extends React.PureComponent {
  userName () {
    let { first, last } = this.props.name
    first = first.charAt(0).toLocaleUpperCase() + first.slice(1)
    last = last.charAt(0).toLocaleUpperCase() + last.slice(1)
    return `${first} ${last}`
  }

  render () {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: this.props.profilePicture }} />
        </Left>
        <Body>
          <Text>
            {this.userName()}
          </Text>
          <Text note>
            {this.props.email}
          </Text>
        </Body>
        <Right>
          <Text note>{this.props.age}</Text>
        </Right>
      </ListItem>
    )
  }
}

UserListItem.propTypes = {
  name: PropTypes.object,
  email: PropTypes.string,
  profilePicture: PropTypes.string,
  age: PropTypes.number
}

export default UserListItem
