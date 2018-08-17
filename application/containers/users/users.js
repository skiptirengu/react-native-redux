import * as React from 'react'
import { getUsers, refreshUsers } from '../../store/users/actions'
import { connect } from 'react-redux'
import { Body, Button, Container, Header, Icon, Left, Right, Spinner, Text, Title, View } from 'native-base'
import { FlatList, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './components/user-list-item'

class Users extends React.Component {
  componentDidMount () {
    this.props.getUsers()
  }

  renderItem (item) {
    return (
      <ListItem
        name={item.name}
        email={item.email}
        profilePicture={item.picture.large}
        age={item.dob.age}
      />
    )
  }

  renderFooter () {
    if (this.props.loadingMore) {
      return <Spinner />
    } else if (this.props.loadMoreError) {
      return <Text>{this.props.loadMoreError}</Text>
    } else {
      return null
    }
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Demo Application</Title>
          </Body>
          <Right />
        </Header>
        <View
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.props.loadingData}
              onRefresh={() => this.props.refreshUsers()} />
          }>
          <FlatList
            data={this.props.data}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={() => this.props.getUsers()}
            renderItem={({ item }) => this.renderItem(item)}
            onEndReachedThreshold={0.3}
            onRefresh={() => this.props.refreshUsers()}
            refreshing={this.props.loadingData}
            ListFooterComponent={this.renderFooter()}
          />
        </View>
        {this.props.loadError && <Text>{this.props.loadError}</Text>}
      </Container>
    )
  }
}

Users.propTypes = {
  getUsers: PropTypes.func,
  refreshUsers: PropTypes.func,

  data: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  info: PropTypes.object,
  loadError: PropTypes.string,
  loadMoreError: PropTypes.string,
  loadingData: PropTypes.bool,
  loadingMore: PropTypes.bool
}

export default connect((state) => ({ ...state.users }), { getUsers, refreshUsers })(Users)
