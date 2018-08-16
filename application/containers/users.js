import * as React from 'react'
import { getUsers } from '../store/users/actions'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

class Users extends React.Component {
  componentDidMount () {
    this.props.getUsers()
  }

  render () {
    return (
      <View>
        <Text>
          {this.props.loadingData && 'Loading...'}
          {!this.props.loadingData && JSON.stringify(this.props.data)}
        </Text>
      </View>
    )
  }
}

Users.propTypes = {
  getUsers: PropTypes.func,
  data: PropTypes.array,
  info: PropTypes.object,
  loadError: PropTypes.string,
  loadMoreError: PropTypes.string,
  loadingData: PropTypes.bool
}

export default connect((state) => ({ ...state.users }), { getUsers })(Users)
