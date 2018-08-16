import * as React from 'react'
import { getUsers } from '../store/users/actions'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

class Users extends React.Component {
  componentDidMount () {
    this.props.getUsers()

    setTimeout(() => this.props.getUsers(), 5000)
  }

  render () {
    return (
      <View>
        <Text>Page: {this.props.info.page}</Text>
        <Text>{this.props.loadingData && 'Loading Data...'}</Text>
        <Text>{this.props.loadingMore && 'Loading More...'}</Text>
        <Text>{this.props.data.length > 0 && 'Data Loaded.'}</Text>
        <Text>{this.props.loadError}</Text>
        <Text>{this.props.loadMoreError}</Text>
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
  loadingData: PropTypes.bool,
  loadingMore: PropTypes.bool
}

export default connect((state) => ({ ...state.users }), { getUsers })(Users)
