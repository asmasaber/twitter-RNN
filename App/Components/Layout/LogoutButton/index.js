import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';

import AuthActions from '~/Redux/Actions/Auth';

import styles from './styles';

class Logout extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.logout()}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthActions.logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
